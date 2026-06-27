"use client";

import { useState } from "react";

export function useIsMobile(): boolean {
  const [isMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  });
  return isMobile;
}
