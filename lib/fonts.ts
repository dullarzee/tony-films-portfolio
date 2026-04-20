import { Geist, Geist_Mono, Eagle_Lake } from "next/font/google";

export const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
export const eagleLake = Eagle_Lake({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-eagleLake",
});
