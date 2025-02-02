import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import UserProvider from "@/context/UserProvider";

const getPoppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  variable: "--var-poppins",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${getPoppins.variable} antialiased`}>
          <UserProvider>{children}</UserProvider>
          <ToastContainer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
