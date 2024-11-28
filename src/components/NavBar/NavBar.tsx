import Link from "next/link"
import { Nav, NavItem, NavLinks, SiteSubtitle, SiteTitle } from "./NavBar.styles"
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
        <Link href={href} style={{ textDecoration: 'none' }}>
            <NavItem>{text}</NavItem>
        </Link>
    )
}

export const NavBar = () => {
    return (
        <Nav>
            <NavContent>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <SiteTitle>Daniel Powell</SiteTitle>
                    <SiteSubtitle>writer | comedian | twat</SiteSubtitle>
                </Link>
                <NavLinks>
                    <PageLink href="/" text="Home" />
                    <PageLink href="/scripts" text="Scripts" />
                    <PageLink href="/blog" text="Blog" />
                    <PageLink href="/contact" text="Contact" />
                </NavLinks>
            </NavContent>
            <ToggleWrapper>
                <DarkModeToggle />
            </ToggleWrapper>
        </Nav>
    )
};