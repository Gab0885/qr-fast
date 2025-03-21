import { useState } from "react";

export function useCopyQRCode(downloadFormat: "png" | "jpeg") {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

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