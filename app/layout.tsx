import { LayOutProps } from "@/types";
import { Metadata } from "next";

export const metadata:Metadata= {
    title:"Finanzio", 
 
}

const layout: React.FC<LayOutProps> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default layout;
