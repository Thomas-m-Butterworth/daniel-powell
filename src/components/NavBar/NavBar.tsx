import Link from "next/link"
import { Nav, NavItem, NavLinkContainer, NavLinks, SiteSubtitle, SiteTitle } from "./NavBar.styles"
import { DarkModeToggle } from "@components/DarkModeToggle"
import styled from "styled-components"

interface PageLinkType {
    href: string,
    text: string
}

export const ToggleWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const PageLink = ({ href, text }: PageLinkType) => {
    return (
        <Link href={href} style={{ textDecoration: 'none', display: 'block' }}>
            <NavItem>{text}</NavItem>
        </Link>
    )
}
const ExternalPageLink = ({ href, text }: PageLinkType) => {
    return (
        <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }}
    >
            <NavItem>{text}</NavItem>
        </a>
    )
}

export const NavBar = () => {
    return (
        <Nav>
            <NavContent>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <SiteTitle>Daniel Powell</SiteTitle>
                    <SiteSubtitle>writer | comedian | performer</SiteSubtitle>
                </Link>
                <NavLinkContainer>
                <NavLinks>
                    <PageLink href="/" text="Home" />
                    <PageLink href="/scripts" text="Scripts" />
                    <ExternalPageLink href="https://danielpowellcomedy.substack.com/" text="Blog" />
                    <PageLink href="/contact" text="Contact" />
                </NavLinks>
                </NavLinkContainer>
            </NavContent>
            <ToggleWrapper>
                <DarkModeToggle />
            </ToggleWrapper>
        </Nav>
    )
};