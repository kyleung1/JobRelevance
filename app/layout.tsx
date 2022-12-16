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
        <body className="flex flex-col min-h-screen">
          <div className="flex-shrink-0">
            <Header/>
          </div>
          <div>
            <Navbar/>
          </div>
          <div className="flex-1">
            {children}
          </div>
          <div className="flex-shrink-0">
            <Footer/>
          </div>
        </body>
    </html>
  )
}