import "./globals.css";
import Navbar from "../components/navbar";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-black text-white p-4 text-center">
            &copy; 2024 E-commerce
          </footer>
        </div>
      </body>
    </html>
  );
}
