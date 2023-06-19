import { Noto_Sans_KR, Source_Sans_Pro } from "next/font/google";

export const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-noto-sans-kr",
});

export const sourceSansPro = Source_Sans_Pro({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});
