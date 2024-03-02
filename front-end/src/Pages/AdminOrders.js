import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig';
function AdminOrders() {
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
          title: 'Customer Id',
          dataIndex: 'orderBy',
        },
        {
          title:"Date",
          dataIndex:'date'
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
        {
          title: 'Total',
          dataIndex: 'total',
        },
    
      ];
      const [orders,setOrders] = useState([]);

  const getOrders = async()=>{
    const response = await axios.get(`${base_url}/order/getOrders`, config);
    const responseOrder = await response.data.map((ele,ind)=>{
      return {key:ind+1, status:ele.orderStatus, orderBy:ele.orderBy, address: ele.address, total:ele.PaymentIntent.amount, date:ele.PaymentIntent.created}
    })
    setOrders(responseOrder)
  }
  useEffect(()=>{
    getOrders();
  },[])
  return (
    <div className='mt-10'>
        <Table columns={columns} dataSource={orders} />
    </div>
  )
}

export default AdminOrders
