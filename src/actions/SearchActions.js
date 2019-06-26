const updateVideos = videos => ({
  type: 'UPDATE_VIDEOS',
  videos
});

const updateQuery = query => ({
  type: 'UPDATE_QUERY',
  query
});

const updateArtistInfo = infos => ({
  type: 'UPDATE_ARTIST_INFOS',
  infos:!Object.keys(infos).includes('_embedded') ? null : infos["_embedded"]["attractions"][0]
});

export {
  updateVideos,
  updateQuery,
  updateArtistInfo
};