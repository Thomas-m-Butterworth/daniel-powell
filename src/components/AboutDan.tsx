import { ImageAndCopy } from "@styles/GlobalStyles";
import danMic from "@images/danMic.png";
import styled, { css } from "styled-components";
import { copy } from "@lang";
import { CopyContainer } from "@components";
import Image from "next/image";
import { breakpoints } from "@utils";

export const CopyTitleText = styled.h2`
  text-transform: uppercase;

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.scale.h3};
  }
`;

const ImageContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  ${({ theme }) => theme.media.md} {
    width: 100%;
    margin-right: 0;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
`;

const ResponsiveImageWrapper = styled.div`
  position: relative;
  width: 10vw;
  height: 100%;
  overflow: hidden;

  ${({ theme }) => theme.media.md} {
    width: 100%;
    max-width: 486px;
    height: 100px;
    justify-self: center;
  }
`;

const ContentImage = styled(Image)`
  object-fit: cover;
  ${({ theme }) => theme.media.md} {
    object-position: 0px -100px;
    transform: scale(1.8);
  }
  ${({ theme }) => theme.media.sm} {
    object-position: 0px -50px;
  }
`;

export const CopyAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const AboutDan = () => {
  return (
    <ImageAndCopy>
      <ImageContainer>
        <ResponsiveImageWrapper>
          <ContentImage 
            src={danMic} 
            alt="An illustration by Robert Maltby of Dan holding a microphone" 
            placeholder="empty"
            fill
            priority
            sizes={`(max-width: ${breakpoints.md}) 80vw, 120px`}
          />
        </ResponsiveImageWrapper>
      </ImageContainer>
      <CopyContainer title={copy.home.title} copy={copy.test.loremIpsum} />
    </ImageAndCopy>
  );
};
