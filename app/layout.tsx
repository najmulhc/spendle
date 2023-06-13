import Providers from "@/redux/Providers";
import { LayOutProps } from "@/types";
import { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Finanzio",
};

const layout: React.FC<LayOutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <Providers>
          <Hero />
          {children}{" "}
        </Providers>
      </body>
    </html>
  );
};

export default layout;
