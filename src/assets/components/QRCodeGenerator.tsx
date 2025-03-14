import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
  const [link, setLink] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [customIcon, setCustomIcon] = useState<File | null>(null);
  const [customIconURL, setCustomIconURL] = useState<string>("");

  // Cria a URL para o ícone customizado e limpa-a quando necessário
  useEffect(() => {
    if (customIcon) {
      const url = URL.createObjectURL(customIcon);
      setCustomIconURL(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setCustomIconURL("");
    }
  }, [customIcon]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = () => {
    if (link.trim()) {
      setShowQRCode(true);
    }
  };

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

  // Define imageSettings somente se houver URL do ícone
  const imageSettings = customIconURL
    ? {
        src: customIconURL,
        height: 64,
        width: 64,
        excavate: true,
      }
    : undefined;

  return (
    <section className="qr-generator">
      <input
        type="text"
        placeholder="Insira o link aqui"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={generateQRCode}>Gerar QR Code</button>
      <button onClick={() => setShowOptions(!showOptions)}>
        {showOptions ? "Ocultar Opções" : "Opções avançadas"}
      </button>
      {showOptions && (
        <div className="qr-options">
          <label>
            Ícone Customizado:
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setCustomIcon(
                  e.target.files && e.target.files.length > 0
                    ? e.target.files[0]
                    : null
                )
              }
            />
          </label>
        </div>
      )}
      {showQRCode && (
        <div className="qr-display">
          <QRCodeCanvas
            ref={canvasRef}
            value={link}
            size={256}
            marginSize={3}
            level="H" // aumenta a redundância do código para compensar a sobreposição da imagem
            
            title="QR Code"
            imageSettings={imageSettings}
          />
          <button onClick={downloadQRCode}>Baixar QR Code</button>
        </div>
      )}
    </section>
  );
}