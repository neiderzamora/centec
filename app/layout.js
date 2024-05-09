import { Inter } from "next/font/google";
import "./globals.css";
import UpNavbar from "@/components/navbar/up_navbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CENTEC",
    template: "%s | CENTEC"
  },
  description:
    "Centro de formación y capacitación empresarial CENTEC, conocimiento y servicio para una formación integral",
};

export default function RootLayout({ children }) {
  return (
    <html charSet="utf-8" lang="es">
      <body className={inter.className}>
        <UpNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
