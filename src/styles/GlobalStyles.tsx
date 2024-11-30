import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme.media.md} {
    padding: 0 10px;
  }
`;

export const PageContent = styled(Container)`
  margin: auto;
  position: block;
  width: 66%;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  ${({ theme }) => theme.media.md} {
    width: 90%;
  }
`;

export const ImageAndCopy = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  justify-content: space-between;

  ${({ theme }) => theme.media.lg} {
    flex-direction: column;
  }
`;

export const ContentImage = styled.img<{ height?: string; position?: string }>`
  max-width: 100%;
  width: 200px;
  height: ${(props) => (props.height ? props.height : "100%")};
  object-fit: cover;
  object-position: ${(props) => (props.position ? props.position : "0")};
  transition: transform 0.3s ease;

${({ theme }) => theme.media.lg} {
    object-position: 0 25%;
    height: 50px;
    width: 33%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 3rem;
  width: 100%;
  flex: 1;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  justify-content: center;
  align-items: start;
  background: ${({ theme }) => theme.colors.footer.bg};
  color: ${({ theme }) => theme.colors.textInverted};
`;

export const WordpressStyles = createGlobalStyle`
.has-text-align-left {
  text-align: left;
}

.has-text-align-center {
  text-align: center;
}

.has-text-align-right {
  text-align: right;
}

.has-large-font-size {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.alignfull {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  max-width: 100vw;
  overflow-x: hidden;
}

.wp-block-image img {
  max-width: 100%;
  height: auto;
  margin-top: 0.5rem;
}
.wp-block-image.aligncenter {
  text-align: center;
}
.wp-block-image.alignfull img,
.wp-block-image.alignwide img {
  width: 100%;
}
.wp-block-image .alignleft,
.wp-block-image .alignright,
.wp-block-image .aligncenter,
.wp-block-image.is-resized {
  display: table;
  margin-left: 0px;
  margin-right: 0px;

}
.wp-block-image .alignleft > figcaption,
.wp-block-image .alignright > figcaption,
.wp-block-image .aligncenter > figcaption,
.wp-block-image.is-resized > figcaption {
  display: table-caption;
  caption-side: bottom;
}

.wp-block-image .alignleft {
  float: left;
  margin-right: 1rem;
}
.wp-block-image .alignright {
  float: right;
  margin-left: 1rem;
}
.wp-block-image .aligncenter {
  margin: auto;
}

.wp-block-button a,
.wp-block-file a.wp-block-file__button {
  background-color: rgb(59 130 246);
  color: rgb(255 255 255);
  text-decoration-line: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.wp-block-button a:hover,
.wp-block-file a.wp-block-file__button:hover {
  background-color: rgb(96 165 250);
  cursor: pointer;
}

.wp-block-file a:first-of-type {
  margin-right: 1rem;
}

.wp-block-cover {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  min-height: 430px;
}

.wp-block-verse {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.wp-block-media-text {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
`;

export const TextStyles = createGlobalStyle`
h1 {
    font-size: ${({ theme }) => theme.typography.scale.h1};
    font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
}
.banner {
    font-size: ${({ theme }) => theme.typography.scale.h1};
    font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
}
.script {
    font-size: ${({ theme }) => theme.typography.scale.paragraph};
    font-family: ${({ theme }) => theme.typography.fonts.scriptFont};
    margin-bottom: 1rem;
}
h2 {
    font-size: ${({ theme }) => theme.typography.scale.h2};
    font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
}
h3 {
    font-size: ${({ theme }) => theme.typography.scale.h3};
    font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
}
h4 {
    font-size: ${({ theme }) => theme.typography.scale.h4};
    font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
}
h5 {
    font-size: ${({ theme }) => theme.typography.scale.h5};
    font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
}
p {
    font-size: ${({ theme }) => theme.typography.scale.paragraph};
    font-family: ${({ theme }) => theme.typography.fonts.primaryFont};
}
.helper {
    font-size: ${({ theme }) => theme.typography.scale.helperText};
    font-family: ${({ theme }) => theme.typography.fonts.primaryFont};
}
.copyright {
    font-size: ${({ theme }) => theme.typography.scale.copyrightText};
    font-family: ${({ theme }) => theme.typography.fonts.primaryFont};
    color: ${({ theme }) => theme.colors.textInverted};
}
ul {
    list-style-type: none;
}
a, a:link, a:visited, a:focus, a:hover, a:active{
  text-decoration:none;
  cursor: cursor;
}
`;

export const TitleText = styled.h2`
color: ${({ theme }) => theme.colors.text};
font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const QuoteText = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fonts.scriptFont};
  margin-top: 0.5rem;
  letter-spacing: -1px;
  line-height: 20px;
`;
export const GigYear = styled.h5`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
  letter-spacing: -1px;
  line-height: 20px;
`;

interface CopyTextProps {
  type?: string;
}
export const P = styled.p``;

export const CopyText = styled.p<CopyTextProps>`
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${(props) => (props.type === "press" ? "0.2rem" : "0.5rem")};
  margin-bottom: 0.5rem;
  letter-spacing: 0.1rem;
  line-height: 1em;
  align-self: center;
  text-align: "left";

  ${({ theme }) => theme.media.lg} {
    text-align: center;
  }
`;

export const BlogText = styled.p<CopyTextProps>`
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${(props) => (props.type === "press" ? "0.2rem" : "0.5rem")};
  margin-bottom: 0.5rem;
  line-height: 1em;
  align-self: center;
  text-align: left;
`;

export const QuoteCredit = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1rem;
  line-height: 1em;
  align-self: center;
  text-align: "center";
`;

export const UniversalStyle = createGlobalStyle`
*,*::after, *::before{
    box-sizing: border-box;
    margin: 0;
}
`;
