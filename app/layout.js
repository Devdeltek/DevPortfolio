import '@pigment-css/react/styles.css';
import "./globalCss.js";
import Header from './components/Header';
import Footer from './components/Footer';


export const metadata = {
  title: "Devin Delaney Personal Portfolio",
  description: "Simple portfolio app made in Next JS with MDX by Devin Delaney to post details about and thought process for personal projects",
};

export const viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
