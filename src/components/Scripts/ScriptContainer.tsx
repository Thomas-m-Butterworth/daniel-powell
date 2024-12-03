import Link from 'next/link'
import styled from "styled-components";
import { SideImage } from "./SideImage";
import { ScriptLinkDescription, ScriptLinkItem } from "./ScriptLinkItem";

interface ScriptContainerProps {
    imageSrc: string;
    imageAlt: string;
    href: string;
    title: string;
    content: string | TrustedHTML;
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

export const ScriptContainer = ({imageSrc, imageAlt, href, title, content}: ScriptContainerProps) => {
    return (
        <ScriptContainerDiv>
            <SideImage src={imageSrc} alt={imageAlt} />
            <ScriptDescription>
            <Link href={href}>
                <ScriptLinkItem>{title}</ScriptLinkItem>
            </Link>
            <ScriptLinkDescription dangerouslySetInnerHTML={{__html: content}} />
            </ScriptDescription>
        </ScriptContainerDiv>
    )
}