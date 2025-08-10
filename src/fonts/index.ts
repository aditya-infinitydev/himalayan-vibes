import { Geist, Quicksand } from "next/font/google";

export const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const stylized = Quicksand({
  variable: "--font-stylized",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})