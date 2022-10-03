function addRecordList(concertInfo, title, date, content, id) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_RECORD_LIST',
      payload: { concertInfo, title, date, content, id },
    });
  };
}

function deleteRecordList(id) {
  return (dispatch, getState) => {
    dispatch({
      type: 'DELETE_RECORD_LIST',
      payload: { id },
    });
  };
}

function editRecordList(concertInfo, title, date, content, id) {
  return (dispatch, getState) => {
    dispatch({
      type: 'EDIT_RECORD_LIST',
      payload: { concertInfo, title, date, content, id },
    });
  };
}

export const recordListAction = {
  addRecordList,
  deleteRecordList,
  editRecordList,
};
