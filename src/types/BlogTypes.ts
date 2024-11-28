interface CategoriesType {
    node: {
        name: string
    }
}

export interface PostType {
  author: {
    node: {
      name: string;
      firstName: string;
      lastName: string;
      avatar: {
        url: string;
      };
    };
  };
  categories: {
    edges: CategoriesType[]
}
  date: string;
  excerpt: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
  slug: string;
  title: string;
  content: string;
}

interface PostsType {
  edges: PostType[];
}
export interface PostProps {
  post: PostType;
  posts: PostsType;
  preview: boolean;
}
