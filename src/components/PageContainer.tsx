import { PageContent } from "@styles/GlobalStyles";
import Head from "next/head";
import React, { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    head: string;
};

export const PageContainer = ({children, head}: PageContainerProps) => {
    return (
        <PageContent>
            <Head>
                <title>{head}</title>
            </Head>
            {children}
        </PageContent>
    )

}