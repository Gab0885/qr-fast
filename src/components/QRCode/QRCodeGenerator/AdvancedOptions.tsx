import { ChangeEvent } from "react";
import styles from "./AdvancedOptions.module.scss";
import { Tooltip as ReactTooltip } from "react-tooltip";

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
};

/*
  Componente com controles para:
  - Upload de ícone.
  - Tamanho do QR Code.
  - Tamanho do ícone.
  - Manutenção do fundo do ícone.
  - Seleção de cor de fundo.
*/

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
          <input
            data-tooltip-id="customIconTip"
            data-tooltip-html="O ícone será inserido no centro do QR Code."
            type="file"
            accept="image/*"
            onChange={handleIconChange}
          />
        </label>
        <ReactTooltip id="customIconTip" opacity={1.0} place="right" />
      </div>

      <div className={styles.customSize}>
        <label>
          Tamanho do QR Code:
          <input
            data-tooltip-id="customSizeTip"
            data-tooltip-content="Tamanhos maiores são ideais para impressão, enquanto tamanhos menores funcionam bem em aplicações digitais."
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
          <input
            data-tooltip-id="customIconSizeTip"
            data-tooltip-content="Ajuste o tamanho do ícone em relação ao QR Code. Valor inicial é 25%."
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
          <input
            data-tooltip-id="customIconBackgroundTip"
            data-tooltip-content="Marque para manter o fundo original da imagem (não removerá o fundo)."
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
          <input
            data-tooltip-id="customColorTip"
            data-tooltip-content="Selecione uma cor de fundo que ofereça contraste suficiente com os elementos do QR Code."
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <ReactTooltip id="customColorTip" opacity={1.0} place="right" />
        </label>
      </div>
    </div>
  );
}
