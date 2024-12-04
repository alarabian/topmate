import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "../../public/assets/css/custom.css";
import "../../public/assets/css/responsive.css";

import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const inter = Inter({
  subsets: ["cyrillic"],
});

export const metadata = {
  title: "Topmate",
  description: "Topmate ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
