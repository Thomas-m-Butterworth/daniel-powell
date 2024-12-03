import styled from "styled-components";
import { SlideProps, SlidesProps } from "./types";
import { AccoladeText, QuoteText } from "@styles/GlobalStyles";
import { addLineBreak } from "@utils";
import { sanitize } from "isomorphic-dompurify";

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
  padding-left: 50px;
  padding-right: 50px;
`;

const Slide = ({quote}: SlideProps) => {
 const sanitizedQuote = sanitize(addLineBreak(quote.accolade))
 const sanitizedSource = sanitize(addLineBreak(quote.source))
  return (
    <SlideDiv>
        <QuoteText dangerouslySetInnerHTML={{__html: sanitizedQuote}}/>
        <AccoladeText dangerouslySetInnerHTML={{__html: sanitizedSource}} />
    </SlideDiv>
)};

export const Slides = ({quotes, currentSlideIndex}: SlidesProps) => (
    <SlideContainer offset={-currentSlideIndex * 100}>
    {quotes.map((item, index) => {
      return (
      <Slide quote={item} key={`quote-slide-${index}`}/>
    )})}
  </SlideContainer>
);