import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



export const metadata: Metadata = {
  title: "Drive Moto",
  description: "Buy your next vehicle with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
    <div className="container">
          <Header/>
          {children}
          <Footer/>
    </div>
        </body>
    </html>
  );
}
