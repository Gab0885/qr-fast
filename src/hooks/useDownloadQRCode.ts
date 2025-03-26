import { useState } from "react";

export function useDownloadQRCode(downloadFormat: "png" | "jpeg") {
  const [downloadStatus, setDownloadStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const triggerDownload = (url: string, filename: string) => {
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.download = filename;
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };

  // Baixa o QR Code a partir do canvas.
  const downloadQRCode = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) {
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus("idle"), 2000);
      return;
    }

    const mimeType = downloadFormat === "jpeg" ? "image/jpeg" : "image/png";
    const extension = downloadFormat === "jpeg" ? "jpeg" : "png";
    const imageData = canvas
      .toDataURL(mimeType)
      .replace(mimeType, "image/octet-stream");
    triggerDownload(imageData, `qr-code.${extension}`);

    setDownloadStatus("success");
    setTimeout(() => setDownloadStatus("idle"), 2000);
  };

  return { downloadQRCode, downloadStatus };
}
