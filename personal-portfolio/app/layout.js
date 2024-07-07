import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './_components/navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Praise Waweru",
  description: "Personal Portfolio",
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
