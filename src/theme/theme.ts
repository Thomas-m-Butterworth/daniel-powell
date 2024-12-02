import { useDarkMode } from "@store/useDarkMode";
import { breakpoints, fonts, primary, text, typeScale } from "@utils";

export const useTheme = () => {
  const { isDarkMode } = useDarkMode();
  const {
    primaryGrey,
    primaryOffWhite,
    primaryBlack,
    primaryOrange,
    primaryYellow,
  } = primary;
  const { textPrimary } = text;

  return {
    isDarkMode,
    colors: {
      nav: {
            bg: isDarkMode ? primaryGrey : primaryBlack,
            siteTitle: isDarkMode ? primaryBlack : primaryOrange,
            linkHover: primaryOrange
        },
      footer: { 
          bg: isDarkMode ? primaryGrey : primaryBlack,
        },
      background: isDarkMode ? primaryBlack : primaryOffWhite,
      text: isDarkMode ? primaryOffWhite : textPrimary,
      textInverted: isDarkMode ?  textPrimary: primaryOffWhite,
      accent: primaryOrange,
      underline: isDarkMode ? primaryYellow : primaryOrange,
      disabled: primaryGrey,
      yellow: primaryYellow,
      orange: primaryOrange,
      white: isDarkMode ? primaryBlack : "#FFFFFF"
    },
    breakpoints,
    typography: {
      fonts,
      scale: typeScale,
    },
    media: {
      xs: `@media (max-width: ${breakpoints.xs})`,
      sm: `@media (max-width: ${breakpoints.sm})`,
      md: `@media (max-width: ${breakpoints.md})`,
      lg: `@media (max-width: ${breakpoints.lg})`,
      xl: `@media (max-width: ${breakpoints.xl})`,
    },
    zIndices: {
      base: 0,
      dropdown: 1000,
      sticky: 1100,
      fixed: 1200,
      modal: 1300,
      popover: 1400,
      tooltip: 1500,
    },
    transitions: {
      fast: "0.1s",
      normal: "0.3s",
      slow: "0.5s",
    },
    borderRadii: {
      small: "4px",
      medium: "8px",
      large: "16px",
      xLarge: "24px",
      round: "50%",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    lineHeights: {
      body: 1.5,
      heading: 1.2,
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  };
};
