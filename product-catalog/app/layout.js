import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Catalog",
  description: "A product catalog for an e-commerece website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
      <Navbar />
      {children}

      </div>
      </body>
    </html>
  );
}
