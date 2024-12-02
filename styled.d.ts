import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDarkMode: boolean;
    colors: {
      footer: {
        bg: string;
      };
      nav: {
        bg: string;
        siteTitle: string;
        linkHover: string;
      };
      background: string;
      text: string;
      textInverted: string;
      accent: string;
      underline: string;
      disabled: string;
      yellow: string;
      orange: string;
      white: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fonts: {
        genericHeader: string;
        primaryFont: string;
        scriptFont: string;
      };
      scale: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        paragraph: string;
        helperText: string;
        copyrightText: string;
      };
    };
    media: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    zIndices: {
      base: number;
      dropdown: number;
      sticky: number;
      fixed: number;
      modal: number;
      popover: number;
      tooltip: number;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    borderRadii: {
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      round: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };
  }
}