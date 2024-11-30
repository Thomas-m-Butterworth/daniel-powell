import { quotes } from "@lang";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 100%;
  align-content: center;
  max-width: 800px;
  position: relative;
  overflow: hidden;
`;

const SlideContainer = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.offset}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 35px;
  padding-right: 35px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const Dot = styled.span<{ active: boolean }>`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.active ? "#333" : "#bbb")};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
`;

const QuotesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide, prevSlide]);

  return (
    <CarouselWrapper>
      <ArrowButton className="left" onClick={prevSlide}>
        &lt;
      </ArrowButton>
      <SlideContainer offset={-currentSlide * 100}>
        {quotes.map((item, index) => (
          <Slide key={index}>
            <h3>{item.accolade}</h3>
            <p>{item.source}</p>
          </Slide>
        ))}
      </SlideContainer>
      <ArrowButton className="right" onClick={nextSlide}>
        &gt;
      </ArrowButton>
      <DotContainer>
        {quotes.map((_, index) => (
          <Dot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotContainer>
    </CarouselWrapper>
  );
};

export default QuotesCarousel;
