import React from "react";
import Head from "next/head";
import Image from "next/image";
import Date from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getAllPostIds,
  getSortedPostsData,
  getPostData,
} from "../../lib/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { TwitterShareButton, FacebookShareButton } from "react-share";

import * as S from "../../styles/posts/styles";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();

  return {
    props: {
      postData,
      allPostsData,
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

export default function PostLayout({ postData, allPostsData }) {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");
  const currentPostId = postData.id;
  const tags = postData.tags;
  const isReview = postData.type === "review";

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, [router.asPath]);

  return (
    <Layout>
      <Head>
        <title>
          {postData.title} | {siteTitle}
        </title>
      </Head>
      {isReview ? (
        <>
          <S.ReviewHeader>
            <S.AlbumInfo>
              <h2>{postData.album}</h2>
              <h3>{postData.artist}</h3>
              <span>{postData.release}</span>
            </S.AlbumInfo>
            <S.AlbumScore>
              <Image src={postData.cover} width={300} height={300} />
              <div>
                <p>{postData.score}</p>
              </div>
            </S.AlbumScore>
          </S.ReviewHeader>
          <S.Review>
            <ul>
              <li>GÊNERO: {postData.genre}</li>
              <li>GRAVADORA: {postData.label}</li>
            </ul>
            <S.ReviewTitle>
              <h1>{postData.title}</h1>
              <h2>{postData.excerpt}</h2>
            </S.ReviewTitle>
            <S.PostContent>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              <S.Tags>
                <span>Tags: </span>
                {tags.map((string, index) => (
                  <Link key={index} href={`/search?term=${string}`}>
                    {string}
                  </Link>
                ))}
              </S.Tags>
            </S.PostContent>
          </S.Review>
        </>
      ) : (
        <>
          <S.TitleContainer>
            <h1>{postData.title}</h1>
            <h2>{postData.excerpt}</h2>
            <Image src={postData.banner} height={440} width={800} />
          </S.TitleContainer>
          <S.PostInfo>
            <S.AuthorAvatar>
              <Image src="/images/profile.jpg" width={56} height={56} />
            </S.AuthorAvatar>
            <S.PostDate>
              <p>{postData.author}</p>
              <Date dateString={postData.date} />
            </S.PostDate>
            <S.SocialShare>
              <TwitterShareButton url={currentUrl} title={postData.title}>
                <FontAwesomeIcon icon={faTwitter} />
              </TwitterShareButton>
              <FacebookShareButton url={currentUrl} title={postData.title}>
                <FontAwesomeIcon icon={faFacebook} />
              </FacebookShareButton>
            </S.SocialShare>
          </S.PostInfo>
          <S.PostContent>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <S.Tags>
              <span>Tags: </span>
              {tags.map((string, index) => (
                <Link key={index} href={`/search?term=${string}`}>
                  {string}
                </Link>
              ))}
            </S.Tags>
          </S.PostContent>
          <S.ReadNext>
            <div className="separator" />
            <h3>Continue lendo</h3>
            <S.ReadNextPosts>
              {allPostsData
                .filter((post) => post.id !== currentPostId)
                .map(({ id, title, banner }) => (
                  <div key={id}>
                    <Link className="post-link" href={`/posts/${id}`}>
                      <Image src={banner} height={186} width={280} />
                      <h3 className="post-title">{title}</h3>
                    </Link>
                  </div>
                ))}
            </S.ReadNextPosts>
          </S.ReadNext>
        </>
      )}
    </Layout>
  );
}
