'use client'

import Lenis from 'lenis';
import { useEffect } from "react";

export function UseLenis() {
  useEffect(() => {
    new Lenis({
      autoRaf: true,
    });
  }, [])
  return (<></>)
}