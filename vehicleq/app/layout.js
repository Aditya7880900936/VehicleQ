import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/components/Header";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "VehicleQ",
  description: "Find your next vehicle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header/>
        <main className="min-h-screen">{children}</main>

        <footer className="bg-blue-50 py-12 ">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💗 Roadside Coder</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
