import Navbar from "@components/navbar";
import { cn } from "@utils/cn";
import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import AOSInit from "./aos-init";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
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
    <html lang="en">
      <AOSInit />

      <body className={cn(dmSans.className, bricolageGrotesque.variable)}>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
