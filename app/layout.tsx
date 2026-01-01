import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/layout/Header";

export const metadata: Metadata = {
  title: "Restaurant Name",
  description: "Delicious food and amazing experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
