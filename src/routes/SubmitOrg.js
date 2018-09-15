import React from 'react';
import { connect } from 'dva';
import SubmitForm from '../components/SubmitForm';

const Submit = ({ dispatch, studentorgs}) => {
  function handleDelete(id) {
    dispatch({
      type: 'studentorgs/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>Submit your student organisation</h2>
      <SubmitForm onDelete={handleDelete} studentorgs={studentorgs} />
    </div>
  );
};

// export default Submit;
export default connect(({ submit }) => ({
  submit,
}))(Submit);
