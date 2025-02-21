import { useState, useEffect } from "react";
import { useIsClient } from "@uidotdev/usehooks";

export function useIsMobile(): boolean {
  const isClient = useIsClient();

  // default to true
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (isClient) {
      setIsMobile(window.matchMedia("(any-hover:none)").matches);
    }
  }, [isClient]);

  return isMobile;
}
