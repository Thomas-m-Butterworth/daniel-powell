import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100%%;
  flex-direction: column;
  font-size: ${({ theme }) => theme.typography.scale.h4};
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.nav.bg};
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 100;
  position: relative;

  ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.typography.scale.h5};
  }
  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.scale.paragraph};
    text-align: center;
  }
`;

export const SiteTitle = styled.h3`
  color: ${({ theme }) => theme.colors.nav.siteTitle};
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeights.heading};
`;

export const SiteSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textInverted};
  font-size: ${({ theme }) => theme.typography.scale.paragraph};
  margin-bottom: 0.75rem;
`;

export const NavLinks = styled.ul`
  background: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.typography.fonts.genericHeader};

  background: none;
  z-index: 95;
`;

export const NavItem = styled.li`
  list-style: none;
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.fonts.genericHeader};

  color: ${({ theme }) => theme.colors.textInverted};
  margin-right: 24px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.nav.linkHover};
  }
  &:focus {
    filter: none;
  }
  &:active {
    filter: none;
    color: ${({ theme }) => theme.colors.textInverted};
  }
`;
