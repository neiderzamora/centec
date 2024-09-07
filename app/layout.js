import { Inter } from "next/font/google";
import "./globals.css";
import UpNavbar from "@/components/navbar/up_navbar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CENTEC",
    template: "%s | CENTEC",
  },
  description:
    "Centro de formación y capacitación empresarial CENTEC, conocimiento y servicio para una formación integral",
};

export default function RootLayout({ children }) {
  return (
    <html charSet="utf-8" lang="es">
      <Head>
        {/* Google Ads Tag */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=AW-16588565566`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16588565566', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <UpNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
