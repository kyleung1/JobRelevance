import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
        <head />
        <body>
        <Header/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}