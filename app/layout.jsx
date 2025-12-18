import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "CreatorRank — Premium Creator Marketplace",
  description: "Premium creator profiles, ranking & featured demos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-rose-50 via-white to-pink-50 text-gray-900">

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
