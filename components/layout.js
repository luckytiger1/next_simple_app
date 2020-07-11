import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title = 'default title' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>

      <footer>This is footer</footer>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: darkblue;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }
          nav a {
            color: #fff;
            text-decoration: none;
          }

          main {
            margin-top: 60px;
            height: 80vh;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
