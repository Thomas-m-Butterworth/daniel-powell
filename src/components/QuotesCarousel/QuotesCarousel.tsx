import { quotes } from "@lang";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Dots } from "./Dots";
import { Slides } from "./Slides";
import { ArrowButton } from "./ArrowButton";

const CarouselWrapper = styled.div`
  width: 100%;
  align-content: center;
  max-width: 800px;
  position: relative;
  overflow: hidden;
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
      <Slides
        quotes={quotes}
        currentSlideIndex={currentSlide}
      />
      <ArrowButton className="right" onClick={nextSlide}>
        &gt;
      </ArrowButton>
      <Dots
        quotes={quotes}
        setCurrentSlide={setCurrentSlide}
        currentSlideIndex={currentSlide}
      />
    </CarouselWrapper>
  );
};

export default QuotesCarousel;
