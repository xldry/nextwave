export default async function handler(req, res) {
  try {
    // Replace this with your logic to fetch the current track from Last.fm API
    const track = await fetchCurrentTrack();

    res.status(200).json({ currentTrack: track });
  } catch (error) {
    console.error('Error fetching current track:', error);
    res.status(500).json({ error: 'Error fetching current track' });
  }
}

// Example function to fetch the current track from Last.fm API
async function fetchCurrentTrack() {
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jumiknight&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}format=json&limit=1`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data from Last.fm API');
  }

  const data = await response.json();
  const { recenttracks } = data;
  const { track } = recenttracks;
  
  // Return the current track information
  return track;
}