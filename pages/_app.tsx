import { AppProps } from "next/app";
import {
  AppContainer,
  Container,
  Footer,
  GlobalStyles,
  P,
} from "../src/styles/GlobalStyles";
import { NavBar } from "../src/components/NavBar/NavBar";
import { useTheme } from "@theme/theme";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { meta } from "@lang";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>{meta.main.title}</title>
      </Head> 
        <AppContainer aria-hidden={false}>
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
