import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devin Delaney Personal Portfolio",
  description: "Simple portfolio app made in Next JS with MDX by Devin Delaney to post details about and thought process for personal projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
