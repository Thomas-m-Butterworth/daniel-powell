import styled, { css } from "styled-components";

type ButtonStyleType = "primary" | "secondary" | "tertiary";
type ButtonSizeType = "default" | "large" | "small";

interface ButtonProps {
  buttonStyle?: ButtonStyleType;
  buttonSize?: ButtonSizeType;
}

const styleVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.text};
    border: none;
    color: ${({ theme }) => theme.colors.textInverted};
        &:hover {
            background-color: ${({ theme }) => theme.colors.textInverted};
            border: solid 3px;
            color: ${({ theme }) => theme.colors.text};
            border-color: ${({ theme }) => theme.colors.text};
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        &:focus {
            background-color: ${({ theme }) => theme.colors.text};
            border: solid 3px;
            border-color: ${({ theme }) => theme.colors.text};
            color: ${({ theme }) => theme.colors.textInverted};
            filter: none;
        }
        &:active {
            background-color: ${({ theme }) => theme.colors.text};
            color: ${({ theme }) => theme.colors.textInverted};
            border: none;
        }
        &:disabled {
            background-color: ${({ theme }) => theme.colors.disabled};
            border: none;
        }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.yellow};
    border: none;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
            border: solid 3px;
            border-color: ${({ theme }) => theme.colors.yellow};
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        &:focus {
            border: solid 3px;
            border-color: ${({ theme }) => theme.colors.yellow};
            filter: none;
        }
        &:active {
            border: solid 3px;
            border-color: ${({ theme }) => theme.colors.orange};
        }
        &:disabled {
            background-color: ${({ theme }) => theme.colors.disabled};
            border: none;
        }
  `,
  tertiary: css`
    background-color: ${({ theme }) => theme.colors.background};
    border: solid 3px;
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
  `,
};

const sizeVariants = {
  default: css`
    width: 182px;
    height: 51px;
    font-size: ${({ theme }) => theme.typography.scale.paragraph};
  `,
  large: css`
    width: 220px;
    height: 60px;
    font-size: ${({ theme }) => theme.typography.scale.h5};
  `,
  small: css`
    width: 140px;
    height: 40px;
    font-size: ${({ theme }) => theme.typography.scale.copyrightText};
  `,
};

export const Button = styled.button<ButtonProps>`
  border-radius: ${({ theme }) => theme.borderRadii.xLarge};
  font-family: ${({ theme }) => theme.typography.fonts.primaryFont};
  margin-top: ${({ theme }) => theme.spacing.sm};
  ${({ buttonStyle = "primary" }) => styleVariants[buttonStyle]};
  ${({ buttonSize = "default" }) => sizeVariants[buttonSize]};
`;
