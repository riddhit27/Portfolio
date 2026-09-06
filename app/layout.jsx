import "./globals.css";

export const metadata = {
  title: "RT — Product designer",
  description: "Portfolio of a product designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}