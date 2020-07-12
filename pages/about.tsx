import Router from 'next/router';
import Layout from '../components/layout';
import { NextPage } from 'next';

interface IAbout {
  title: string;
}
const About: NextPage<IAbout> = ({ title }) => {
  const clickHandles = () => {
    Router.push('/');
  };

  return (
    // <>
    <Layout title="About page">
      <h1>{title}</h1>
      <button onClick={clickHandles}>Go back</button>
      <button onClick={() => Router.push('/posts')}>Go to Posts</button>
    </Layout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about');
  const data = await response.json();

  return {
    title: data.title,
  };
};

export default About;
