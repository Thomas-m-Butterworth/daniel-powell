import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { P, PageContent } from "../../src/styles/GlobalStyles";
import { PostProps } from "../../src/types/BlogTypes";
import styled, { keyframes } from "styled-components";
import BackArrowIcon from "@images/icons/BackArrow";
import { primary } from "@utils";
import { useEffect, useRef, useState } from "react";
import { copy } from "@lang";
import { Button } from "@components";
import { sanitize } from "isomorphic-dompurify";

const { primaryOrange, primaryOffWhite } = primary;

interface ProgressBarProps {
  progress: number;
}

const bounceKeyframes = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-5px); }
`;

const PageTitle = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  flex-direction: row;
  margin-bottom: 8px;
  width: 100%;
  padding-bottom: 4px;
`;

const IconWrapper = styled.div`
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    animation: ${bounceKeyframes} 1s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const PageTitleText = styled.h3`
  text-align: center;
`;

const ScriptContent = styled.div`
  overflow-y: scroll;
  height: 55vh;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ScriptPreview = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProgressBar = styled.div.attrs<ProgressBarProps>(({ progress }) => ({
  style: {
    width: `${progress}%`,
  },
}))<ProgressBarProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: ${primaryOrange};
  transition: width 0.3s ease-out;
`;

export default function Post({ post, posts, preview }: PostProps) {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const scriptContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scriptContent = scriptContentRef.current;
      if (scriptContent) {
        const { scrollTop, scrollHeight, clientHeight } = scriptContent;
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(scrollPercentage);
      }
    };

    const scriptContent = scriptContentRef.current;
    if (scriptContent) {
      scriptContent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scriptContent) {
        scriptContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  if (!router.isFallback && !post?.slug) {
    return <h1>404</h1>;
  }

  return (
      <div>
        {router.isFallback ? (
          <h3>Loading…</h3>
        ) : (
          <PageContent>
            <ScriptPreview>
              <PageTitle>
                <IconWrapper onClick={() => router.back()}>
                  <BackArrowIcon hoverColor={primaryOrange} />
                </IconWrapper>
                <PageTitleText>{post.title}</PageTitleText>
                <ProgressBar progress={scrollProgress} />
              </PageTitle>
              <ScriptContent
                ref={scriptContentRef}
                dangerouslySetInnerHTML={{ __html: sanitize(post.content) }}
              />
            </ScriptPreview>
              <P dangerouslySetInnerHTML={{ __html: copy.scripts.cta }} />
              <Button buttonStyle="tertiary" onClick={() => router.push('/contact')}>Get in Touch</Button>
          </PageContent>
        )}
      </div>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/scripts/${node.slug}`) || [],
    fallback: true,
  };
};
