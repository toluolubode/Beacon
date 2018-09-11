import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const SchoolList = ({ onDelete, schools }) => {
  const columns = [{
    title: 'Name of School',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Contact</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={schools}
      columns={columns}
    />
  );
};

SchoolList.proptypes = {
  onDelete: PropTypes.func.isRequired,
  schools: PropTypes.array.isRequired,
};

export default SchoolList;
