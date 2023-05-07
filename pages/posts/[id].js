import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import Image from 'next/image';
import Twitter from 'twitter-lite';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

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

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function shareOnTwitter() {
  const text = 'Check out my new blog post!';
  const url = 'https://example.com/blog/my-post';

  try {
    const tweet = await client.post('statuses/update', {
      status: `${text} ${url}`,
    });

    console.log('Tweet posted:', tweet.text);
  } catch (err) {
    console.error('Error posting tweet:', err);
  }
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
          <button onClick={shareOnTwitter}>
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
            <FontAwesomeIcon icon={faFacebook} />
          </button>
        </S.SocialShare>
      </S.PostInfo>
      <S.PostContent>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </S.PostContent>
    </Layout>
  );
}