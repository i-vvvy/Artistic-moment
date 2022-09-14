let initialState = {
  concert: {},
  loading: true,
};

function concertReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_CONCERT_REQUEST':
      return { ...state, loading: true };
    case 'GET_CONCERT_SUCCESS':
      return {
        ...state,
        concert: payload.concert,
        loading: false,
      };
    case 'GET_CONCERT_FAILURE':
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}

export default concertReducer;
