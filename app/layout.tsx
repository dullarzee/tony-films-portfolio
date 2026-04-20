import type { Metadata } from "next";
import { geist, geistMono, eagleLake } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tony Films",
  description:
    "Tony Films Cinematic video production portfolio showcasing weddings, commercials, corporate films, and creative storytelling",
  generator: "dullarzee",
  // icons: {
  //   icon: [
  //     {
  //       url: "/icon.svg",
  //       type: "image/svg+xml",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.className} ${geistMono.variable} ${eagleLake.variable} font-sans antialiased bg-[#0F0F0F] text-white transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
