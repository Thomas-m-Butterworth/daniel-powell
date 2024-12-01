import React from "react";
import { CopyAndTitle, CopyTitleText } from "./AboutDan";

interface CopyContainerProps {
    title: string;
    copy: string;
}

export const CopyContainer = ({ title, copy}: CopyContainerProps) => {
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
