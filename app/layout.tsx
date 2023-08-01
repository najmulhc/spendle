import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./globals.css";
export const metadata = {
  title: "Spendle | Your personal Accountent",
  description: " Lorem Ipsum Dolor Sit Amet",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
