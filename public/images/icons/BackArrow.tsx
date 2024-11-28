import React from "react";

interface BackArrowIconType {
    colour?: string;
    hoverColor?: string;
  }
  
  const BackArrowIcon = ({ colour, hoverColor }: BackArrowIconType) => {
    const [isHovered, setIsHovered] = React.useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const fillColor = isHovered ? hoverColor : colour;
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="none"
        viewBox="0 0 24 24"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <path
          fill={fillColor ? `${fillColor}` : "#000"}
          fillRule="evenodd"
          d="M11.707 4.293a1 1 0 010 1.414L6.414 11H20a1 1 0 110 2H6.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  };  

export default BackArrowIcon;
