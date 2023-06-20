import AppNavbar from "../components/navbars/AppNavbar";

export const metadata = {
  title: "Application part",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AppNavbar />
        {children}
      </body>
    </html>
  );
}
