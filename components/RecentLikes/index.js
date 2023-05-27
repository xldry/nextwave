import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styles'

const RecentLikes = () => {
  const [recentArtists, setRecentArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getTopAlbums');
        const { recentArtists } = response.data;
        setRecentArtists(recentArtists);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.RecentLikesContainer>
      <h2>Obsessões recentes</h2>
      <p className="latest-post-excerpt">O que estou mais ouvindo nos últimos 30 dias</p>
      <S.TopAlbumsContainer>
        {recentArtists.map((artist) => (
          <S.AlbumContainer key={artist.name}>
            <img src={artist.image[2]['#text']} alt="Album Art" />
            <a className="desktop-link" href={artist.url} target='no-follow'>
              <p>{artist.artist.name}</p>
              <p>{artist.name}</p>
            </a>
            <a className="mobile-link" href={artist.url} target='no-follow'>
              <p>{artist.artist.name}</p>
              <p>{artist.name}</p>
            </a>
          </S.AlbumContainer>
        ))}
      </S.TopAlbumsContainer>
    </S.RecentLikesContainer>
  );
}
 
export default RecentLikes;