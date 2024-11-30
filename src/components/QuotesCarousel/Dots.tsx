import styled from "styled-components";
import { DotsProps } from "./types";

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

export const Dots = ({quotes, setCurrentSlide, currentSlideIndex}: DotsProps) => (
    <DotContainer>
          {quotes.map((_, index) => (
            <Dot
              key={index}
              active={currentSlideIndex === index}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </DotContainer>
  )