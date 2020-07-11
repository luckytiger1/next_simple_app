import Router from 'next/router';
import Layout from '../components/layout';

const About = () => {
  const clickHandles = () => {
    Router.push('/');
  };

  return (
    // <>
    <Layout title="About page">
      <h1>About</h1>
      <button onClick={clickHandles}>Go back</button>
      <button onClick={() => Router.push('/posts')}>Go to Posts</button>
    </Layout>
  );
};

export default About;
