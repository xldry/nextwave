export default async (req, res) => {
  try {
    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jumiknight&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}format=json&limit=1`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data from Last.fm API');
    }
    
    const data = await response.json();
    const { recenttrack } = data;
    const { track } = recenttrack;

    res.status(200).json({ recentTracks: track });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data from Last.fm API' });
  }
};