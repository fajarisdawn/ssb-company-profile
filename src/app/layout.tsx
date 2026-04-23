import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Sukmana Sukses Bersama — Solusi Suku Cadang Telekomunikasi",
  description:
    "Supporting national connectivity through precision, reliability, and high technical standards. Rectifier Modules, Lithium Energy Storage, Industrial Routers, and Expert Consulting.",
  keywords: [
    "telekomunikasi",
    "rectifier",
    "lithium energy storage",
    "industrial router",
    "suku cadang",
    "PT Sukmana Sukses Bersama",
  ],
  openGraph: {
    title: "PT Sukmana Sukses Bersama — Solusi Suku Cadang Telekomunikasi",
    description:
      "Supporting national connectivity through precision, reliability, and high technical standards.",
    type: "website",
    locale: "id_ID",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
