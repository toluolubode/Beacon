import React from 'react';
import { connect } from 'dva';
import SchoolList from '../components/SchoolList';

const Schools = ({ dispatch, schools }) => {
  function handleDelete(id) {
    dispatch({
      type: 'schools/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Schools 🚀</h2>
      <SchoolList onDelete={handleDelete} schools={schools} />
    </div>
  );
};

export default connect(({ schools }) => ({
  schools,
}))(Schools);
