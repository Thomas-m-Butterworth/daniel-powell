import styled from "styled-components";
import { SlideProps, SlidesProps } from "./types";
import { AccoladeText, QuoteText } from "@styles/GlobalStyles";

const SlideContainer = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.offset}%);
`;

const SlideDiv = styled.div`
  flex: 0 0 100%;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 35px;
  padding-right: 35px;
`;

const SlideTitle = styled.h3`
    ${({ theme }) => theme.media.md} {
        font-size: ${({ theme }) => theme.typography.scale.h4};
    }
`

const Slide = ({quote, key}: SlideProps) => (
    <SlideDiv key={key}>
        <QuoteText>{quote.accolade}</QuoteText>
        <AccoladeText>{quote.source}</AccoladeText>
    </SlideDiv>
);

export const Slides = ({quotes, currentSlideIndex}: SlidesProps) => (
    <SlideContainer offset={-currentSlideIndex * 100}>
    {quotes.map((item, index) => (
      <Slide quote={item} key={index}/>
    ))}
  </SlideContainer>
);