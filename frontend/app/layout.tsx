import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shirt-Fy",
  description:
    "Design, customize, and visualize shirts in 3D before production. Our platform helps clothing shops preview fabrics, styles, and fits with an interactive 3D model, ensuring perfect designs every time.",
  icons: {
    icon: "/favicon.ico", // tab icon
    apple: "/apple-touch-icon.png", // iOS home screen icon
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon.png", // for modern browsers / bookmarks
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
