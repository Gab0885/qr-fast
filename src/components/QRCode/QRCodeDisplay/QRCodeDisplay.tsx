import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import styles from "./QRCodeDisplay.module.scss";
import { useDownloadQRCode } from "../../../hooks/useDownloadQRCode";
import { useCopyQRCode } from "../../../hooks/useCopyQRCode";
import { QRCodeActions } from "../QRCodeActions/QRCodeActions";

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

export function QRCodeDisplay({
  link,
  customIconURL,
  bgColor,
  size,
  iconPercentage = 25,
  excavate = true,
  downloadFormat,
}: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { downloadQRCode, downloadStatus } = useDownloadQRCode(downloadFormat);
  const { copyQRCode, copyStatus } = useCopyQRCode(downloadFormat);

  // Calcula o tamanho do ícone conforme o percentual definido
  const iconSize = Math.floor(size * (iconPercentage / 100));

  // Define o nível de redundância baseado no percentual do ícone
  let errorCorrectionLevel: "M" | "Q" | "H" = "M";
  if (iconPercentage > 25 && iconPercentage <= 35) {
    errorCorrectionLevel = "Q";
  } else if (iconPercentage > 35) {
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
      <QRCodeActions
        downloadQRCode={() => downloadQRCode(canvasRef.current)}
        downloadStatus={downloadStatus}
        copyQRCode={() => copyQRCode(canvasRef.current)}
        copyStatus={copyStatus}
      />
    </div>
  );
}
