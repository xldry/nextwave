import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jumiknight&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json&period=1month&limit=6`
    );
    const { topalbums } = response.data;
    const { album } = topalbums;
    res.status(200).json({ recentArtists: album });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
};