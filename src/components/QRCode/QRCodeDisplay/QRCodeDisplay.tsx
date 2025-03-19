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
*/
interface QRCodeDisplayProps {
  link: string;
  customIconURL: string;
  bgColor: string;
  size: number;
  iconPercentage?: number;
  excavate: boolean;
}

type Status = "idle" | "success" | "error";

export function QRCodeDisplay({
  link,
  customIconURL,
  bgColor,
  size,
  iconPercentage = 25, // valor inicial de 25%
  excavate = true, // valor padrão: remove o fundo
}: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [downloadStatus, setDownloadStatus] = useState<Status>("idle");
  const [copyStatus, setCopyStatus] = useState<Status>("idle");

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus("idle"), 2000);
      return;
    }
    const imageData = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = imageData;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

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
    canvas.toBlob((blob) => {
      if (!blob) {
        setCopyStatus("error");
        setTimeout(() => setCopyStatus("idle"), 2000);
        return;
      }
      const item = new ClipboardItem({ "image/png": blob });
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
    });
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
