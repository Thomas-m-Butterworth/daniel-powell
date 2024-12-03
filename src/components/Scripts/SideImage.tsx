import Image from "next/image";
import styled from "styled-components";

export const SideImage = styled(Image)`
  object-fit: cover;
  padding-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`;  