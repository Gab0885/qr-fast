import { useState } from "react";
import { QRCodeDisplay } from "../QRCodeDisplay/QRCodeDisplay";
import { useCustomIcon } from "../../../hooks/useCustomIcon";
import AdvancedOptions from "./AdvancedOptions";
import styles from "./QRCodeGenerator.module.scss";

export default function QRCodeGenerator() {
  const [link, setLink] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [qrSize, setQrSize] = useState(256);
  const [iconPercentage, setIconPercentage] = useState(25);
  const [keepIconBackground, setKeepIconBackground] = useState(false);
  const { setCustomIcon, customIconURL } = useCustomIcon();

  // Gera o QR Code se o texto/link não estiver vazio.
  const generateQRCode = () => {
    if (link.trim()) {
      setShowQRCode(true);
    }
  };

  return (
    <section className={styles.qrGenerator}>
      <h1>Tela de geração de QR Code</h1>
      <input
        type="text"
        placeholder="Insira o texto ou link para gerar o QR Code"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className={styles.inputField}
      />
      <button className={styles.button} onClick={generateQRCode}>
        Gerar QR Code
      </button>
      <button
        className={styles.button}
        onClick={() => setShowOptions(!showOptions)}
      >
        {showOptions ? "Ocultar Opções" : "Opções avançadas"}
      </button>

      {showOptions && (
        <AdvancedOptions
          setCustomIcon={setCustomIcon}
          qrSize={qrSize}
          setQrSize={setQrSize}
          iconPercentage={iconPercentage}
          setIconPercentage={setIconPercentage}
          keepIconBackground={keepIconBackground}
          setKeepIconBackground={setKeepIconBackground}
          bgColor={bgColor}
          setBgColor={setBgColor}
        />
      )}

      {showQRCode && (
        <QRCodeDisplay
          link={link}
          customIconURL={customIconURL}
          bgColor={bgColor}
          size={qrSize}
          iconPercentage={iconPercentage}
          excavate={keepIconBackground}
        />
      )}
    </section>
  );
}
