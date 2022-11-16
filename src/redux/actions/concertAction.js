import api from '../api';

const API_KEY = `61724c7344656d6d3839656170564a`;

function getConcert() {
  return async dispatch => {
    try {
      dispatch({ type: 'GET_CONCERT_REQUEST' });

      const concertApi = await api.get(
        `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/SJWPerform/22/81`,
      );

      dispatch({
        type: 'GET_CONCERT_SUCCESS',
        payload: { concert: concertApi.data.SJWPerform.row },
      });
    } catch (error) {
      // 에러 핸들링 하는 곳
      dispatch({ type: 'GET_CONCERT_FAILURE' });
    }
  };
}

export const concertAction = {
  getConcert,
};
