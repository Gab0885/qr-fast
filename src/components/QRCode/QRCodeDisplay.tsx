// QRCodeDisplay.tsx
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

interface QRCodeDisplayProps {
  link: string;
  customIconURL: string;
  bgColor: string;
  size: number;
}

export function QRCodeDisplay({
  link,
  customIconURL,
  bgColor,
  size,
}: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas do QR Code não encontrado!");
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
  };

  // Ajusta o tamanho do ícone para ser 25% do tamanho do QR Code
  const iconSize = Math.floor(size * 0.25);

  const imageSettings = customIconURL
    ? {
        src: customIconURL,
        height: iconSize,
        width: iconSize,
        excavate: true,
      }
    : undefined;

  return (
    <div className="qr-display">
      <QRCodeCanvas
        ref={canvasRef}
        value={link}
        size={size}
        marginSize={3}
        level="H"
        title="QR Code"
        bgColor={bgColor}
        imageSettings={imageSettings}
      />
      <button onClick={downloadQRCode}>Baixar QR Code</button>
    </div>
  );
}
