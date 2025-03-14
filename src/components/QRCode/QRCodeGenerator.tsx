import { useState } from "react";
import { QRCodeDisplay } from "./QRCodeDisplay";
import { useCustomIcon } from "../../hooks/useCustomIcon";

export default function QRCodeGenerator() {
  const [link, setLink] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const { setCustomIcon, customIconURL } = useCustomIcon();

  const generateQRCode = () => {
    if (link.trim()) {
      setShowQRCode(true);
    }
  };

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
        <QRCodeDisplay link={link} customIconURL={customIconURL} />
      )}
    </section>
  );
}
