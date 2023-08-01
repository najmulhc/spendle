import './globals.css'
export const metadata = {
  title: "Spendle | Your personal Accountent",
  description: " Lorem Ipsum Dolor Sit Amet",
};

export default function RootLayout({children}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

