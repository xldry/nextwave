import Head from 'next/head';
import MainHeader from './Header';
import Footer from './Footer';

import styles from './styles.module.css'

export const siteTitle = 'NextWave';

export default function Layout({ children }) {
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log('Search term:', searchTerm);
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MainHeader onSearch={handleSearch}/>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}