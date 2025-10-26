import "./globals.css";
import { miSansLatin } from '../../font/local'

export const metadata = {
  title: "MBR Group",
  description: "The official website of MBR Group - Innovating for a smarter future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${miSansLatin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}