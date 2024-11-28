import React from 'react';
import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllPostsForHome } from "../../lib/api";
import Link from "next/link";
import danOverwhelmed from "@images/danOverwhelmed.png";
import styled from 'styled-components';
import { useTheme } from "@theme/theme";
import { BlogText, Container, P, TitleText } from "@styles/GlobalStyles";

const BlogContainer = styled(Container)`
  max-width: 800px;
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const HeroPost = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadii.medium};
`;

const HeroTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.scale.h2};
  margin: ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.text};
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.xs} {
    grid-template-columns: 1fr;
  }
`;

const PostPreview = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  border-radius: ${({ theme }) => theme.borderRadii.medium};
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const HeroContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const PostTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.scale.h3};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const PostExcerpt = styled(P)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ReadMore = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const BlogPage = ({ allPosts: { edges }, preview }) => {
  const theme = useTheme();

  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <BlogContainer>
      <Head>
        {<title>Daniel Powell - Blog</title>}
      </Head>
      
      <TitleText>Blog</TitleText>
      {heroPost && (
        <HeroPost>
          <Link href={`/blog/${heroPost.slug}`}>
            <HeroImage src={heroPost.featuredImage?.node.sourceUrl || danOverwhelmed.src} alt={heroPost.title} />
            <HeroContent>
            <HeroTitle>{heroPost.title}</HeroTitle>
            <BlogText dangerouslySetInnerHTML={{ __html: heroPost.excerpt }} />
            <ReadMore>Read more...</ReadMore>
            </HeroContent>
          </Link>
        </HeroPost>
      )}
      
      <PostGrid>
        {morePosts.map((post) => (
          <PostPreview key={post.node.slug}>
            <Link href={`/blog/${post.node.slug}`}>
              <PostImage src={post.node.featuredImage?.node.sourceUrl || danOverwhelmed.src} alt={post.node.title} />
              <PostContent>
                <PostTitle>{post.node.title}</PostTitle>
                <BlogText dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                <ReadMore>Read more...</ReadMore>
              </PostContent>
            </Link>
          </PostPreview>
        ))}
      </PostGrid>
    </BlogContainer>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  
  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default BlogPage;
