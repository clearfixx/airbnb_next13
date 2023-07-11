import "./styles/global.scss";

import { Roboto } from "next/font/google";

import RegisterModal from "./components/modals/RegisterModal";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

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

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <RentModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
