import { Key, ReactNode } from "react";
import Link from 'next/link'
import styled from "styled-components";
import { SideImage } from "./SideImage";
import { ScriptLinkDescription, ScriptLinkItem } from "./ScriptLinkItem";

interface ScriptContainerProps {
    imageSrc: string;
    imageAlt: string;
    href: string;
    key: Key;
    title: string;
    content: string | TrustedHTML;
};

const ScriptContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ScriptContainer = ({imageSrc, imageAlt, key, href, title, content}: ScriptContainerProps) => {
    return (
        <ScriptContainerDiv key={key}>
            <SideImage src={imageSrc} alt={imageAlt} />
            <Link href={href}>
                <ScriptLinkItem>{title}</ScriptLinkItem>
            </Link>
            <ScriptLinkDescription dangerouslySetInnerHTML={{__html: content}} />
        </ScriptContainerDiv>
    )
}