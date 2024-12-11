import Footer from "./Components/Footer";
import React from 'react';
import Navbar from "./Components/Navbar";
import "./globals.css"

/* Importing fonts from gooogle using next/font */
/* import { Manrope, Bellota_Text, Montserrat } from "next/font/google";

const manrope =Manrope({
  subsets:["latin"],
  variable:"--font-manrope",
  weight: ["200","300","400","500","600","700","800"],
});

const bellota =Bellota_Text({
  subsets:["latin"],
  variable:"--font-bellota",
  weight: ['300', '400', '700'],
});

const montserrat =Montserrat({
  subsets:["latin"],
  variable:"--font-montserrat",
  weight: ["200","300","400","500","600","700","800"],
});
 */


const Layout = ({ children }: { children: React.ReactNode }) => { 
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children} 
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
