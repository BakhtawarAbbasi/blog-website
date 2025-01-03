import type { Metadata } from "next";
import "./globals.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Blog website",
  description: "Dynamic blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Container>
          <Navbar/>
        {children}
        </Container>
        <Footer/>
      </body>
    </html>
  );
}
