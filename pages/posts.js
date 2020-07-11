import Layout from '../components/layout';
import Link from 'next/link';

export default function posts(params) {
  return (
    <Layout title="Posts page">
      <h1>Posts Page</h1>
      <Link href="/post/32">
        <a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vel
            quos ab accusamus, illo cum.
          </p>
        </a>
      </Link>
    </Layout>
  );
}
