import { ImageAndCopy } from "@styles/GlobalStyles";
import danMic from "@images/danMic.png";
import styled from "styled-components";
import Head from "next/head";

const loremIpsumTwo = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam. Dignissim convallis aenean et tortor at risus viverra adipiscing. Aliquam nulla facilisi cras fermentum odio eu. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Tempor orci dapibus ultrices in iaculis nunc. Tellus mauris a diam maecenas sed enim ut. Mollis aliquam ut porttitor leo a diam sollicitudin. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Cursus risus at ultrices mi. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Duis at consectetur lorem donec. Vulputate mi sit amet mauris commodo. Est ante in nibh mauris cursus mattis molestie.

Nisl suscipit adipiscing bibendum est. Amet est placerat in egestas erat imperdiet. Tellus pellentesque eu tincidunt tortor aliquam nulla. Sed cras ornare arcu dui vivamus. Felis eget velit aliquet sagittis id consectetur. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nullam ac tortor vitae purus faucibus. Aliquet nec ullamcorper sit amet. Mauris pellentesque pulvinar pellentesque habitant. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.`;

const TitleText = styled.h2`
  text-transform: uppercase;
  text-align: right;

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

const ContentImage = styled.img<{ height?: string; position?: string }>`
  width: 250px;
  height: ${(props) => (props.height ? props.height : "100%")};
  object-fit: cover;
  object-position: ${(props) => (props.position ? props.position : "0")};

  ${({ theme }) => theme.media.lg} {
    width: 150px;
    object-position: -20px -20px;
    height: 50px;
    transform: scale(1.8);
  }
  ${({ theme }) => theme.media.sm} {
    width: 75px;
    object-position: 0 0;
    transform: scale(2.5);
  }
  ${({ theme }) => theme.media.xs} {
    width: 50px;
    object-position: 0 5px;
    transform: scale(3.3);
  }
`;

export const AboutDan = () => {
  return (
    <ImageAndCopy>
      <Head>
        {<title>Daniel Powell - About Dan</title>}
      </Head>
      <TitleAndImage>
        <ContentImage src={danMic.src} height="80vh" position="-20px -40px" />
        <TitleText>{"About Dan"}</TitleText>
      </TitleAndImage>
      <p>{loremIpsumTwo}</p>
    </ImageAndCopy>
  );
};
