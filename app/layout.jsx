import Providers from "../redux/Providers";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./globals.css";

export const metadata = {
  title: "Spendle | Your personal accountent",
  description: "lorem ipsum dolor sit amet, ",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />{" "}
        </Providers>
      </body>
    </html>
  );
}
