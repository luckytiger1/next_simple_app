import Layout from '../components/layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Post } from '../types/types';
import { NextPage } from 'next';

interface IPosts {
  posts: Post[];
}

const Posts: NextPage<IPosts> = ({ posts: serverPost }) => {
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch('http://localhost:4200/posts');
      const res = await data.json();
      setPosts(res);
    };
    if (!serverPost) {
      fetchPosts();
    }
  }, []);

  if (!posts) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout title="Posts page">
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/[id]`} as={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
      {/* <Link href="/post/32">
        <a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vel
            quos ab accusamus, illo cum.
          </p>
        </a>
      </Link> */}
    </Layout>
  );
};

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return {
      posts: null,
    };
  }
  const data = await fetch('http://localhost:4200/posts');
  const posts = await data.json();

  return {
    posts,
  };
};

export default Posts;
