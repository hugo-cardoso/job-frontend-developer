const initialState = {
  videos: [],
  query: ''
}

const SearchReducer = (state = initialState, action) => {
  switch( action.type ) {
    case 'UPDATE_VIDEOS':
      return { ...state, videos: action.videos };
    case 'UPDATE_QUERY':
        return { ...state, query: action.query };
    default: {
      return state;
    }
  }
}

export default SearchReducer;