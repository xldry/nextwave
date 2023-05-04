import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import Image from 'next/image';

import * as S from '../../styles/posts/styles'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <S.TitleContainer>
        <h1>{postData.title}</h1>
        <h2>{postData.excerpt}</h2>
        <Image
          src={postData.banner}
          height={440}
          width={800}
        />
      </S.TitleContainer>
      <S.PostInfo>
        <S.PostDate>
          <p>Por {postData.author}</p>
          <Date dateString={postData.date} />
        </S.PostDate>
        <div className="separator" />
      </S.PostInfo>
      <S.PostContent>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </S.PostContent>
    </Layout>
  );
}