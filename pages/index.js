import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import RecentLikes from '../components/RecentLikes';
import { getSortedPostsData } from '../lib/posts';

import * as S from '../styles/pages/home.js'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <S.LatestPost>
        {allPostsData.slice(0,1).map(({ id, title, excerpt, banner }) => (
          <div key={id}>
            <Link href={`/posts/${id}`}>
              <Image
                src={banner}
                width={800}
                height={400}
              />
              <h2 className="latest-post-title">{title}</h2>
              <p className="latest-post-excerpt">
                {excerpt}
              </p>
              <S.Separator />
            </Link>
          </div>
        ))}
      </S.LatestPost>
      <S.AllPosts>
        <h2>Todos os posts</h2>
        {allPostsData.slice(1).map(({ id, title, banner }) => (
          <div className="all-posts" key={id}>
            <Link className="post-link" href={`/posts/${id}`}>
              <Image
                src={banner}
                height={186}
                width={280}
              />
              <h3 className="post-title">{title}</h3>
            </Link>
          </div>
        ))}
        <S.Separator />
      </S.AllPosts>
      <RecentLikes />
      <S.Separator />
    </Layout>
  );
}