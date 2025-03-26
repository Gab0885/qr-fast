import { useState } from "react";

export function useCopyQRCode(downloadFormat: "png" | "jpeg") {
  // Estado para controlar o status da cópia: "idle", "success" ou "error"
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  // Copia a imagem do QR Code do canvas para a área de transferência.
  const copyQRCode = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 2000);
      return;
    }
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setCopyStatus("error");
          setTimeout(() => setCopyStatus("idle"), 2000);
          return;
        }
        const item = new ClipboardItem({
          [downloadFormat === "jpeg" ? "image/jpeg" : "image/png"]: blob,
        });
        navigator.clipboard.write([item]).then(
          () => {
            setCopyStatus("success");
            setTimeout(() => setCopyStatus("idle"), 2000);
          },
          () => {
            setCopyStatus("error");
            setTimeout(() => setCopyStatus("idle"), 2000);
          }
        );
      },
      downloadFormat === "jpeg" ? "image/jpeg" : "image/png"
    );
  };

  return { copyQRCode, copyStatus };
}
