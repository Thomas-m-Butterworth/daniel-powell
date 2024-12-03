import { ImageAndCopy } from "@styles/GlobalStyles";
import danMic from "@images/danMic.png";
import styled from "styled-components";
import { copy } from "@lang";
import { CopyContainer } from "@components";

export const CopyTitleText = styled.h2`
  text-transform: uppercase;

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.scale.h3};
  }
`;

const ImageContainer = styled.div`
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

export const CopyAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
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
      <ImageContainer>
        <ContentImage src={danMic.src} width="10vw" alt="An illustration by Robert Maltby of Dan holding a microphone" />
      </ImageContainer>
      <CopyContainer title={copy.home.title} copy={copy.test.loremIpsum} />
    </ImageAndCopy>
  );
};
