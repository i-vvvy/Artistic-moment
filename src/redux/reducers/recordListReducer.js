let initialState = {
  recordList: [],
};

function recordListReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_RECORD_LIST':
      return {
        ...state,
        recordList: [
          {
            concertInfo: payload.concertInfo,
            title: payload.title,
            date: payload.date,
            content: payload.content,
            id: payload.concertInfo.PERFORM_CODE,
            uid: payload.uid,
          },
          ...state.recordList,
        ],
      };
    case 'DELETE_RECORD_LIST':
      const newList = state.recordList.filter(it => it.id !== payload.id);

      return {
        ...state,
        recordList: newList,
      };
    case 'EDIT_RECORD_LIST':
      const editList = state.recordList.map(it =>
        it.id === payload.id
          ? {
              concertInfo: payload.concertInfo,
              title: payload.title,
              date: payload.date,
              content: payload.content,
              id: payload.concertInfo.PERFORM_CODE,
              uid: payload.uid,
            }
          : it,
      );
      return {
        ...state,
        recordList: editList,
      };
    default:
      return state;
  }
}

export default recordListReducer;
