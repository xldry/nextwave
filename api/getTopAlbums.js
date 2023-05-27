export default async (req, res) => {
  try {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jumiknight&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&period=1month&limit=6`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data from Last.fm API');
    }
    
    const data = await response.json();
    const { topalbums } = data;
    const { album } = topalbums;
    
    res.status(200).json({ recentArtists: album });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data from Last.fm API' });
  }
};