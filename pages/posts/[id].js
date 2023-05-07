import Head from 'next/head';
import Image from 'next/image';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { TwitterShareButton, FacebookShareButton } from 'react-share';

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
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [router.asPath]);

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
        <S.AuthorAvatar>
          <Image
            src="/images/profile.jpeg"
            width={56}
            height={56}
          />
        </S.AuthorAvatar>
        <S.PostDate>
          <p>{postData.author}</p>
          <Date dateString={postData.date} />
        </S.PostDate>
        <S.SocialShare>
          <TwitterShareButton
            url={currentUrl}
            title={postData.title}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </TwitterShareButton>
          <FacebookShareButton
            url={currentUrl}
            title={postData.title}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </FacebookShareButton>
        </S.SocialShare>
      </S.PostInfo>
      <S.PostContent>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </S.PostContent>
    </Layout>
  );
}