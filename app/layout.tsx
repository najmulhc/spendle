import Providers from "@/redux/Providers";
import { LayOutProps } from "@/types";
import { Metadata } from "next";
import "@/app/styles/global.css";

export const metadata: Metadata = {
  title: "Finanzio",
};

const layout: React.FC<LayOutProps> = ({ children }) => {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default layout;
