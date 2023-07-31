import Providers from "@/redux/Providers";
import { LayOutProps } from "@/types";
import { Metadata } from "next";
import "@/app/styles/global.css";
import Footer from "./components/footer/Footer";
import LandingNavbar from "./components/navbars/landingNavbar";

export const metadata: Metadata = {
  title: "Spendle | Your personal accountent",
};

const layout: React.FC<LayOutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <Providers> 
          <LandingNavbar/>
          {children}
          </Providers>
        <Footer />
      </body>
    </html>
  );
};

export default layout;
