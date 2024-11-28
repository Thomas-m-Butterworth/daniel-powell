import { useDarkMode } from "@store/useDarkMode";
import { primary } from "@utils";
import React, { useEffect } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div<{ isOn: boolean }>`
  width: 20px;
  height: 50px;
  background-color: ${(props) =>
    props.isOn ? primary.primaryBlack : primary.primaryGrey};
  border-radius: 30px;
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.isOn ? primary.primaryGrey : primary.primaryBlack)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
`;

const ToggleButton = styled.div<{ isOn: boolean }>`
  width: 12px;
  height: 12px;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isOn ? primary.primaryGrey : primary.primaryBlack};
  transition: transform 0.8s ease;
  transform: translateY(${(props) => (props.isOn ? "27px" : "0")});
`;

export const DarkModeToggle: React.FC = () => {
  const { isDarkMode, setDarkMode } = useDarkMode();

  useEffect(() => {
    console.log({ isDarkMode });
  }, [isDarkMode]);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ToggleContainer isOn={isDarkMode} onClick={handleToggle}>
      <ToggleButton isOn={isDarkMode} />
    </ToggleContainer>
  );
};
