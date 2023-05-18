import { useRouter } from 'next/router';
import { getSortedPostsData } from '../lib/posts';
import SearchResults from './components/SearchResults';
import Layout, { siteTitle } from '../components/layout';

export default function Search({ allPostsData }) {
  const router = useRouter();
  const { term } = router.query;

  let filteredPosts = [];
  if (term) {
    filteredPosts = allPostsData.filter((post) =>
      post.title.toLowerCase().includes(term.toLowerCase())
    );
  }

  return (
    <Layout search>
      <SearchResults searchResults={filteredPosts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}