import { useState } from "react";
import { QRCodeDisplay } from "../QRCodeDisplay/QRCodeDisplay";
import { useCustomIcon } from "../../../hooks/useCustomIcon";
import styles from "./QRCodeGenerator.module.scss"

export default function QRCodeGenerator() {
  const [link, setLink] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff"); // cor padrão branca
  const [qrSize, setQrSize] = useState(256); // tamanho padrão
  const { setCustomIcon, customIconURL } = useCustomIcon();

  const generateQRCode = () => {
    if (link.trim()) {
      setShowQRCode(true);
    }
  };

  return (
    <section className={styles.qrGenerator}>
      <input
        type="text"
        placeholder="Insira o link aqui"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className={styles.inputField}
      />
      <button className={styles.button} onClick={generateQRCode}>Gerar QR Code</button>
      <button className={styles.button} onClick={() => setShowOptions(!showOptions)}>
        {showOptions ? "Ocultar Opções" : "Opções avançadas"}
      </button>
      {showOptions && (
        <div className={styles.qrOptions}>
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
          <label>
            Tamanho do QR Code:
            <input
              type="range"
              min="128"
              max="512"
              value={qrSize}
              onChange={(e) => setQrSize(Number(e.target.value))}
            />
            <span>{qrSize}px</span>
          </label>
          <label>
            Escolha a cor de fundo:
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </label>
        </div>
      )}
      {showQRCode && (
        <QRCodeDisplay
          link={link}
          customIconURL={customIconURL}
          bgColor={bgColor}
          size={qrSize}
        />
      )}
    </section>
  );
}
