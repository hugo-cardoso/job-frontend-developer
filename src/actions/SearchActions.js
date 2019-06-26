const updateVideos = videos => ({
  type: 'UPDATE_VIDEOS',
  videos
});

const updateQuery = query => ({
  type: 'UPDATE_QUERY',
  query
});

export {
  updateVideos,
  updateQuery
};