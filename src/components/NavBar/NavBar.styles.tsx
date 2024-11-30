import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: ${({ theme }) => theme.typography.scale.h4};
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.nav.bg};
  padding-top: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  z-index: 100;

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.typography.scale.h5};
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
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const NavLinks = styled.ul`
  background: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-transform: lowercase;
  font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
  margin: 0;
  padding: 0;
  background: none;
  z-index: 95;
`;

export const NavItem = styled.li`
  list-style: none;
  height: 30px;
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.fonts.genericHeader};
  color: ${({ theme }) => theme.colors.textInverted};
  margin-right: ${({ theme }) => theme.spacing.sm};
  margin-left: ${({ theme }) => theme.spacing.sm};
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

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`