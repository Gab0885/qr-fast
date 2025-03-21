import styles from "./QRCodeActions.module.scss";

interface QRCodeActionsProps {
  downloadQRCode: () => void;
  downloadStatus: "idle" | "success" | "error";
  copyQRCode: () => void;
  copyStatus: "idle" | "success" | "error";
}

export function QRCodeActions({
  downloadQRCode,
  downloadStatus,
  copyQRCode,
  copyStatus,
}: QRCodeActionsProps) {
  return (
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
  );
}