import React, { ReactNode } from "react";
import { CopyAndTitle, CopyTitleText } from "./AboutDan";

interface CopyContainerProps {
    title: string;
    copy: string;
    cta?: string;
    children?: ReactNode;
}

export const CopyContainer = ({ title, copy, cta, children}: CopyContainerProps) => {
    return (
        <CopyAndTitle>
            <CopyTitleText>{title}</CopyTitleText>
            <p
                dangerouslySetInnerHTML={{
                    __html: copy.replace(/\n/g, '<br />'),
                }}
            />
        </CopyAndTitle>
    )
};
