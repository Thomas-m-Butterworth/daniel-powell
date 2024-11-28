import { Montserrat, Courier_Prime, League_Spartan } from "next/font/google";

export const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
export const leagueSpartan = League_Spartan({
  weight: "500",
  subsets: ["latin"],
});

export const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export const fonts = {
  genericHeader: leagueSpartan.style.fontFamily,
  primaryFont: montserrat.style.fontFamily,
  scriptFont: courierPrime.style.fontFamily,
};

export const typeScale = {
  h1: "3.052rem",
  h2: "2.441rem",
  h3: "1.953rem",
  h4: "1.563rem",
  h5: "1.25rem",
  paragraph: "1rem",
  helperText: "0.8rem",
  copyrightText: "0.64rem",
};
