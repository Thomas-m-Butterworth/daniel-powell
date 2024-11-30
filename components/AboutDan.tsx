import { ImageAndCopy } from "@styles/GlobalStyles";
import danMic from "@images/danMic.png";
import styled from "styled-components";
import Head from "next/head";

const loremIpsumTwo = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam. Dignissim convallis aenean et tortor at risus viverra adipiscing. Aliquam nulla facilisi cras fermentum odio eu. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Tempor orci dapibus ultrices in iaculis nunc. Tellus mauris a diam maecenas sed enim ut. Mollis aliquam ut porttitor leo a diam sollicitudin. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Cursus risus at ultrices mi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Duis at consectetur lorem donec. Vulputate mi sit amet mauris commodo. Est ante in nibh mauris cursus mattis molestie.

Nisl suscipit adipiscing bibendum est. Amet est placerat in egestas erat imperdiet. Tellus pellentesque eu tincidunt tortor aliquam nulla. Sed cras ornare arcu dui vivamus. Felis eget velit aliquet sagittis id consectetur. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nullam ac tortor vitae purus faucibus. Aliquet nec ullamcorper sit amet. Mauris pellentesque pulvinar pellentesque habitant. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.`;

const TitleText = styled.h2`
  text-transform: uppercase;

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.scale.h3};
  }
`;

const TitleAndImage = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column-reverse;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  }
`;

const CopyAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
`

const ContentImage = styled.img<{ height?: string; width?: string, position?: string }>`
  width: 250px;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  object-fit: cover;
  object-position: ${(props) => (props.position ? props.position : null)};

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    height: 100px;
    object-position: 0px -120px;
    transform: scale(1.8);
  }
  ${({ theme }) => theme.media.sm} {
    width: 100%;
    object-position: 0px -30px;
  }
  ${({ theme }) => theme.media.xs} {
    width: 100%;
  }
`;

export const AboutDan = () => {
  return (
    <ImageAndCopy>
      <Head>
        {<title>Daniel Powell - About Dan</title>}
      </Head>
      <TitleAndImage>
        <ContentImage src={danMic.src} width="10vw" alt="An illustration by Robert Maltby of Dan holding a microphone" />
      </TitleAndImage>
      <CopyAndTitle>
        <TitleText>{"About Dan"}</TitleText>
        <p>{loremIpsumTwo}</p>
      </CopyAndTitle>
    </ImageAndCopy>
  );
};
