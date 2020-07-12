import Router, { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { useState, useEffect } from 'react';
import { MyPost } from '../../types/types';

interface IPost {
  post: MyPost;
}

const Post: React.FC<IPost> = ({ post }) => {
  const router = useRouter();
  const [newPost, setNewPost] = useState(post);

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await res.json();
      setNewPost(data);
    }
    if (!post) {
      load();
    }
  }, [post]);

  if (!newPost) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <h1>Post {router.query.id}</h1>
      <p>{newPost.body}</p>
      <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  );
};

// This also gets called at build time
// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null };
//   }
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await res.json();

//   // Pass post data to the page via props
//   return {
//     post,
//   };
// };

export async function getServerSideProps({ query, req }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.BASE_URL}/posts/${query.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return {
    props: {
      post,
    },
  };
}

export default Post;
