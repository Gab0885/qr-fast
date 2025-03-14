// QRCodeDisplay.tsx
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

interface QRCodeDisplayProps {
  link: string;
  customIconURL: string;
}

export function QRCodeDisplay({ link, customIconURL }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas do QR Code não encontrado!");
      return;
    }
    const imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = imageData;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const imageSettings = customIconURL
    ? {
        src: customIconURL,
        height: 64,
        width: 64,
        excavate: true,
      }
    : undefined;

  return (
    <div className="qr-display">
      <QRCodeCanvas
        ref={canvasRef}
        value={link}
        size={256}
        marginSize={3}
        level="H"
        title="QR Code"
        imageSettings={imageSettings}
      />
      <button onClick={downloadQRCode}>Baixar QR Code</button>
    </div>
  );
}
