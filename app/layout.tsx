import { Quicksand, Poppins, Questrial } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const quicksandSans = Quicksand({
  variable: "--font-quicksand-sans",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const questrialSans = Questrial({
  variable: "--font-questrial-sans",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

// Configure local font
const gendy = localFont({
  src: "../public/fonts/Gendy.otf",
  variable: "--font-gendy",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning={true}
      className={`${poppinsSans.variable} ${quicksandSans.variable} ${questrialSans.variable} ${gendy.variable}`}
    >
      <body className="font-sans bg-primary">{children}</body>
    </html>
  );
}
