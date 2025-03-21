import { ChangeEvent } from "react";
import styles from "./AdvancedOptions.module.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaQuestionCircle } from "react-icons/fa";

type AdvancedOptionsProps = {
  setCustomIcon: (file: File | null) => void;
  qrSize: number;
  setQrSize: (size: number) => void;
  iconPercentage: number;
  setIconPercentage: (value: number) => void;
  keepIconBackground: boolean;
  setKeepIconBackground: (value: boolean) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  downloadFormat: "png" | "jpeg";
  setDownloadFormat: (value: "png" | "jpeg") => void;
};

export default function AdvancedOptions({
  setCustomIcon,
  qrSize,
  setQrSize,
  iconPercentage,
  setIconPercentage,
  keepIconBackground,
  setKeepIconBackground,
  bgColor,
  setBgColor,
  downloadFormat,
  setDownloadFormat,
}: AdvancedOptionsProps) {
  const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCustomIcon(e.target.files[0]);
    } else {
      setCustomIcon(null);
    }
  };

  return (
    <div className={styles.qrOptions}>
      <div className={styles.customIcon}>
        <label>
          Ícone Customizado:
          <FaQuestionCircle
            data-tooltip-id="customIconTip"
            data-tooltip-content="O ícone será inserido no centro do QR Code."
            className={styles.tooltipIcon}
            aria-label="Mais informações sobre o ícone customizado"
          />
          <input type="file" accept="image/*" onChange={handleIconChange} />
        </label>
        <ReactTooltip id="customIconTip" opacity={1.0} place="right" />
      </div>

      <div className={styles.customSize}>
        <label>
          Tamanho do QR Code:
          <FaQuestionCircle
            data-tooltip-id="customSizeTip"
            data-tooltip-content="Tamanhos maiores são ideais para impressão, enquanto tamanhos menores funcionam bem em aplicações digitais."
            className={styles.tooltipIcon}
            aria-label="Mais informações sobre o tamanho do QR Code"
          />
          <input
            type="range"
            min="128"
            max="512"
            value={qrSize}
            onChange={(e) => setQrSize(Number(e.target.value))}
          />
          <span>{qrSize}px</span>
          <ReactTooltip id="customSizeTip" place="right" opacity={1.0} />
        </label>
      </div>

      <div className={styles.customIconSize}>
        <label>
          Tamanho do Ícone (%):
          <FaQuestionCircle
            data-tooltip-id="customIconSizeTip"
            data-tooltip-content="Ajuste o tamanho do ícone em relação ao QR Code. Valor inicial é 25%."
            className={styles.tooltipIcon}
            aria-label="Mais informações sobre o tamanho do ícone"
          />
          <input
            type="range"
            min="10"
            max="50"
            value={iconPercentage}
            onChange={(e) => setIconPercentage(Number(e.target.value))}
          />
          <span>{iconPercentage}%</span>
          <ReactTooltip id="customIconSizeTip" place="right" opacity={1.0} />
        </label>
      </div>

      <div className={styles.customIconBackground}>
        <label>
          Manter fundo da imagem:
          <FaQuestionCircle
            data-tooltip-id="customIconBackgroundTip"
            data-tooltip-content="Marque para manter o fundo original da imagem (não removerá o fundo)."
            className={styles.tooltipIcon}
            aria-label="Mais informações sobre manter o fundo da imagem"
          />
          <input
            type="checkbox"
            checked={keepIconBackground}
            onChange={(e) => setKeepIconBackground(e.target.checked)}
          />
          <ReactTooltip
            id="customIconBackgroundTip"
            place="right"
            opacity={1.0}
          />
        </label>
      </div>

      <div className={styles.customColor}>
        <label>
          Escolha a cor de fundo:
          <FaQuestionCircle
            data-tooltip-id="customColorTip"
            data-tooltip-content="Selecione uma cor de fundo que ofereça contraste suficiente com os elementos do QR Code."
            className={styles.tooltipIcon}
            aria-label="Mais informações sobre a cor de fundo"
          />
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <ReactTooltip id="customColorTip" opacity={1.0} place="right" />
        </label>
      </div>

      <div className={styles.downloadFormat}>
        <label>
          Formato de Download:
          <FaQuestionCircle
            data-tooltip-id="downloadFormatTip"
            data-tooltip-content="Selecione o formato de imagem para download: PNG ou JPEG. (Padrão: PNG)"
            className={styles.tooltipIcon}
            aria-label="Mais informações sobre o formato de download"
          />
          <select
            value={downloadFormat}
            onChange={(e) =>
              setDownloadFormat(e.target.value as "png" | "jpeg")
            }
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
          </select>
          <ReactTooltip id="downloadFormatTip" opacity={1.0} place="right" />
        </label>
      </div>
    </div>
  );
}
