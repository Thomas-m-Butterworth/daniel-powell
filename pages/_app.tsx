import { AppProps } from "next/app";
import Head from "next/head";
import {
  AppContainer,
  Container,
  Footer,
  P,
  TextStyles,
  UniversalStyle,
  WordpressStyles,
} from "../src/styles/GlobalStyles";
import { NavBar } from "../src/components/NavBar/NavBar";
import { useTheme } from "@theme/theme";
import { ThemeProvider } from "styled-components";

const metadata = {
  title: "Daniel Powell",
  description: `Daniel Powell - Writer, comedian, wierdo.`,
};

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <AppContainer aria-hidden={false}>
      <UniversalStyle />
      <TextStyles />
      <WordpressStyles />
        <Head>
          <title>{metadata.title}</title>
          <meta name={metadata.title} content={metadata.description} />
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <NavBar />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer>
          <P className="copyright">&copy; Daniel Powell</P>
          <P className="copyright">
            Web design & development by Thomas Butterworth
          </P>
        </Footer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default MyApp;
