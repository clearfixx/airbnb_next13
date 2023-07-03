import "./styles/global.scss";

import { Nunito } from "next/font/google";

export const metadata = {
  title: "Vacation Homes & Condo Rentals - Airbnb",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.",
};

const font = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
