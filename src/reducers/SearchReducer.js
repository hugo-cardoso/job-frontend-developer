const initialState = {
  videos: [],
  query: '',
  artist_infos: {}
}

const SearchReducer = (state = initialState, action) => {
  switch( action.type ) {
    case 'UPDATE_VIDEOS':
      return { ...state, videos: action.videos };
    case 'UPDATE_QUERY':
      return { ...state, query: action.query };
    case 'UPDATE_ARTIST_INFOS':
      return { ...state, artist_infos: action.infos };
    default: {
      return state;
    }
  }
}

export default SearchReducer;