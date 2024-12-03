import Link from 'next/link'
import styled from "styled-components";
import { SideImage } from "./SideImage";
import { ScriptLinkDescription, ScriptLinkItem } from "./ScriptLinkItem";
import { breakpoints } from '@utils';
import { sanitize } from 'isomorphic-dompurify';

interface ScriptContainerProps {
    imageSrc: string;
    imageAlt: string;
    href: string;
    title: string;
    content: string;
};

const ScriptContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ScriptDescription = styled.div`
    display: flex;
    flex-direction: column;
`
const ImageContainer = styled.div`
    position: relative;
`;

const ResponsiveImageWrapper = styled.div`
    position: relative;
    width: 115px; 
    height: 100%;
    overflow: hidden;
`;

export const ScriptContainer = ({imageSrc, imageAlt, href, title, content}: ScriptContainerProps) => {
    return (
        <ScriptContainerDiv>
            <ImageContainer>
                <ResponsiveImageWrapper>
                    <SideImage
                        fill
                        src={imageSrc}
                        alt={imageAlt}
                        priority
                        sizes={`115px`} />
                </ResponsiveImageWrapper>
            </ImageContainer>
            <ScriptDescription>
            <Link href={href}>
                <ScriptLinkItem>{title}</ScriptLinkItem>
            </Link>
            <ScriptLinkDescription dangerouslySetInnerHTML={{__html: sanitize(content)}} />
            </ScriptDescription>
        </ScriptContainerDiv>
    )
}