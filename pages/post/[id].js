import Router, { useRouter } from 'next/router';
import Layout from '../../components/layout';

const Post = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>Post {router.query.id}</h1>
      <button onClick={() => Router.back()}>Go back</button>
    </Layout>
  );
};

export default Post;
