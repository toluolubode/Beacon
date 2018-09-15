import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const SubmitForm = ({ onDelete, studentorgs }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={studentorgs}
      columns={columns}
    />
  );
};

SubmitForm.proptypes = {
  onDelete: PropTypes.func.isRequired,
  studentorgs: PropTypes.array.isRequired,
};

export default SubmitForm;
