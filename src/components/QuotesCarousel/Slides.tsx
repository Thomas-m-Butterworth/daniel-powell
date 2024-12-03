import styled from "styled-components";
import { SlideProps, SlidesProps } from "./types";
import { AccoladeText, QuoteText } from "@styles/GlobalStyles";
import { addLineBreak } from "@utils";

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
  return (
    <SlideDiv>
        <QuoteText dangerouslySetInnerHTML={{__html: addLineBreak(quote.accolade)}}/>
        <AccoladeText dangerouslySetInnerHTML={{__html: addLineBreak(quote.source)}} />
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