import React, { ReactNode } from "react";
import { CopyAndTitle, CopyTitleText } from "./AboutDan";
import { sanitize } from 'isomorphic-dompurify';

import { addLineBreak } from "@utils";

interface CopyContainerProps {
    title: string;
    copy: string;
    cta?: string;
    children?: ReactNode;
}

export const CopyContainer = ({ title, copy, cta, children}: CopyContainerProps) => {
    const sanitizedCopy = sanitize(addLineBreak(copy));
    return (
        <CopyAndTitle>
            <CopyTitleText>{title}</CopyTitleText>
            <p
                dangerouslySetInnerHTML={{
                    __html: sanitizedCopy,
                }}
            />
        </CopyAndTitle>
    )
};
