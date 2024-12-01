import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: [
    {
      path: "./fonts/Nunito-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Nunito-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Nunito-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Nunito-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Nunito-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Nunito-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nunito",
});


export const metadata: Metadata = {
  title: "Invoice App",
  description: "Invoice App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased font-nunito`}
      >
        {children}
      </body>
    </html>
  );
}
