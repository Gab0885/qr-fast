import { useState, useEffect } from "react";

export function useCustomIcon() {
  const [customIcon, setCustomIcon] = useState<File | null>(null);
  const [customIconURL, setCustomIconURL] = useState<string>("");

  // Atualiza a URL quando o ícone customizado é definido
  useEffect(() => {
    if (customIcon) {
      const url = URL.createObjectURL(customIcon);
      setCustomIconURL(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setCustomIconURL("");
    }
  }, [customIcon]);

  return { customIcon, setCustomIcon, customIconURL };
}
