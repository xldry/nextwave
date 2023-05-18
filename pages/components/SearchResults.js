import { useRouter } from 'next/router';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Image from 'next/image';

import * as S from '../../styles/pages/search.js';

export default function SearchResults({ searchResults }) {
  const router = useRouter();
  
  return (
    <S.SearchResult>
      <h1>Resultados da sua pesquisa:</h1>
      <button onClick={() => router.back()}>Voltar</button>
        {searchResults.map((post) => (
          <>
            <div className="all-posts" key={post.id}>
              <Link className="post-link" href={`/posts/${post.id}`}>
                <Image
                  src={post.banner}
                  height={186}
                  width={280}
                />
                <h3 className="post-title">{post.title}</h3>
              </Link>
            </div>
          </>
        ))}
    </S.SearchResult>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}