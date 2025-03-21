import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import styles from "./QRCodeDisplay.module.scss";

/* 
  Propriedades esperadas pelo componente:
  - link: URL que será convertida em QR Code.
  - customIconURL: URL do ícone customizado que será inserido no QR Code.
  - bgColor: Cor de fundo do QR Code.
  - size: Tamanho do QR Code.
  - iconPercentage?: Percentual do tamanho do ícone em relação ao QR Code.
  - excavate?: Se true, o componente remove o fundo da imagem (excavate); se false, mantém o fundo.
  - downloadFormat: Formato que a imagem será salva ao baixo o QR Code.
*/
interface QRCodeDisplayProps {
  link: string;
  customIconURL: string;
  bgColor: string;
  size: number;
  iconPercentage?: number;
  excavate: boolean;
  downloadFormat: "png" | "jpeg";
}

type Status = "idle" | "success" | "error";

export function QRCodeDisplay({
  link,
  customIconURL,
  bgColor,
  size,
  iconPercentage = 25,
  excavate = true, // valor padrão: remove o fundo
  downloadFormat,
}: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [downloadStatus, setDownloadStatus] = useState<Status>("idle");
  const [copyStatus, setCopyStatus] = useState<Status>("idle");

  // Função auxiliar para disparar o download
  const triggerDownload = (url: string, filename: string) => {
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.download = filename;
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };

  const downloadQRCode = () => {
    const errorHandler = () => {
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus("idle"), 2000);
      return;
    };

    const canvas = canvasRef.current;
    if (!canvas) return errorHandler();

    const mimeType = downloadFormat === "jpeg" ? "image/jpeg" : "image/png";
    const extension = downloadFormat === "jpeg" ? "jpeg" : "png";
    const imageData = canvas
      .toDataURL(mimeType)
      .replace(mimeType, "image/octet-stream");
    triggerDownload(imageData, `qr-code.${extension}`);

    setDownloadStatus("success");
    setTimeout(() => setDownloadStatus("idle"), 2000);
  };

  const copyQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 2000);
      return;
    }
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setCopyStatus("error");
          setTimeout(() => setCopyStatus("idle"), 2000);
          return;
        }
        const item = new ClipboardItem({
          [downloadFormat === "jpeg" ? "image/jpeg" : "image/png"]: blob,
        });
        navigator.clipboard.write([item]).then(
          () => {
            setCopyStatus("success");
            setTimeout(() => setCopyStatus("idle"), 2000);
          },
          () => {
            setCopyStatus("error");
            setTimeout(() => setCopyStatus("idle"), 2000);
          }
        );
      },
      downloadFormat === "jpeg" ? "image/jpeg" : "image/png"
    );
  };

  // Calcula o tamanho do ícone conforme o percentual definido
  const iconSize = Math.floor(size * (iconPercentage / 100));

  // Define o nível de redundância baseado no percentual do ícone
  let errorCorrectionLevel: "M" | "Q" | "H" = "M";
  if (iconPercentage > 25 && iconPercentage <= 40) {
    errorCorrectionLevel = "Q";
  } else if (iconPercentage > 40) {
    errorCorrectionLevel = "H";
  }

  const imageSettings = customIconURL
    ? {
        src: customIconURL,
        height: iconSize,
        width: iconSize,
        excavate: excavate,
      }
    : undefined;

  return (
    <div className={styles.qrDisplay}>
      <QRCodeCanvas
        ref={canvasRef}
        value={link}
        size={size}
        marginSize={3}
        level={errorCorrectionLevel}
        title="QR Code"
        bgColor={bgColor}
        imageSettings={imageSettings}
      />
      <div className={styles.buttons}>
        <button
          className={`${styles.downloadButton} ${
            downloadStatus === "success"
              ? styles.success
              : downloadStatus === "error"
              ? styles.error
              : ""
          }`}
          onClick={downloadQRCode}
        >
          {downloadStatus === "success"
            ? "Baixado com sucesso!"
            : downloadStatus === "error"
            ? "Erro ao baixar QR Code"
            : "Baixar QR Code"}
        </button>
        <button
          className={`${styles.copyButton} ${
            copyStatus === "success"
              ? styles.success
              : copyStatus === "error"
              ? styles.error
              : ""
          }`}
          onClick={copyQRCode}
        >
          {copyStatus === "success"
            ? "Copiado com sucesso!"
            : copyStatus === "error"
            ? "Erro ao copiar QR Code"
            : "Copiar QR Code"}
        </button>
      </div>
    </div>
  );
}
