import "./styles/global.scss";

import { Roboto } from "next/font/google";

import RegisterModal from "./components/modals/RegisterModal";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Vacation Homes & Condo Rentals - Airbnb",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic", "latin"],
  style: ["italic", "normal"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
