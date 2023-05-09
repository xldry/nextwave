import Head from 'next/head';
import Image from 'next/image';
import Date from '../../components/date';
import Layout from '../../components/layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAllPostIds, getSortedPostsData, getPostData } from '../../lib/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { TwitterShareButton, FacebookShareButton } from 'react-share';

import * as S from '../../styles/posts/styles'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData,
      allPostsData
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

export default function Post({ postData, allPostsData }) {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');
  const currentPostId = postData.id;

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
      <S.ReadNext>
        <Image
          src="/images/readnext.png"
          width={41}
          height={32}
        />
        <div className="separator" />
        <h3>Continue lendo</h3>
        <S.ReadNextPosts>
          {allPostsData.filter(post => post.id !== currentPostId)
            .map(({ id, title, banner }) => (
              <div key={id}>
                <Link className="post-link" href={`/posts/${id}`}>
                  <Image
                    src={banner}
                    height={186}
                    width={280}
                  />
                  <h3 className="post-title">{title}</h3>
                </Link>
              </div>
            ))
          }
        </S.ReadNextPosts>
      </S.ReadNext>
    </Layout>
  );
}