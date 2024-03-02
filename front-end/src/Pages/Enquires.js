import React from 'react'
import { Button, Table } from 'antd';

function Enquires() {
    const columns = [
        {
          title: 'No',
          dataIndex: 'key',
        },
        {
          title: 'Status',
          dataIndex: 'status',
        },
        {
          title: 'Customer Name',
          dataIndex: 'name',
        },
        {
          title: 'Date',
          dataIndex: 'date',
        },
        {
          title: 'Total',
          dataIndex: 'total',
        },
    
      ];
      const data1 = [];
      for (let i = 1; i < 46; i++) {
        data1.push({
          OrderNo: '#12122',
          status: 'pending',
          key: i,
          name: `Edward King ${i}`,
          total: 32,
          date: `09-12-2002`,
        });
      }    
  return (
    <div>
        <Table columns={columns} dataSource={data1} />
    </div>
  )
}

export default Enquires
