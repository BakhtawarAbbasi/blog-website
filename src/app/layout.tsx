import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Blog Website",
  description: "Dynamic Blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
