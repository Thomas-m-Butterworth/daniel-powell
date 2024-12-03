import { PageContent } from "@styles/GlobalStyles";
import Head from "next/head";
import React, { ReactNode } from "react";
import { NinetyBullet } from "./CusackMode/NinetyBullet";

interface PageContainerProps {
    children: ReactNode;
    head: string;
    justify?: 'start' | 'between'
};

export const PageContainer = ({children, head, justify}: PageContainerProps) => {
    return (
        <PageContent justify={justify}>
            <Head>
                <title>{head}</title>
            </Head>
            {children}
        </PageContent>
    )

}