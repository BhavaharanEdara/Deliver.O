import React, { useEffect, useState } from 'react'
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { Chart } from "react-google-charts";
import { Button, Table } from 'antd';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { config } from '../Utils/headerConfig';

function Dashboard() {
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
  ]
const [orders,setOrders] = useState([]);
  
const [monthlyData, setMonthlyData] = useState([
  ['Month', 'Income'],
  ['Jan', 0],
  ['Feb', 0],
  ['Mar', 0],
  ['Apr', 0],
  ['May', 0],
  ['Jun', 0],
  ['Jul', 0],
  ['Aug', 0],
  ['Sep', 0],
  ['Oct', 0],
  ['Nov', 0],
  ['Dec', 0],
]);
  const options = {
    chart: {
      colors: ['#ffd333'],
    },
  };
  const getOrders = async()=>{
    const response = await axios.get(`${base_url}/order/getOrders`, config);
    const responseOrder = await response.data.map((ele,ind)=>{
      return {key:ind+1, status:ele?.orderStatus, orderBy:ele?.orderBy, address: ele?.address, total:ele.PaymentIntent?.amount, date:ele.PaymentIntent?.created}
    }); 
    const cumulativeData = [...monthlyData];
    await response.data.forEach((order) => {
      const monthIndex = new Date(order.PaymentIntent.created).getMonth() + 1;
      cumulativeData[monthIndex][1] += parseInt(order.PaymentIntent?.amount,10);
    });
    setMonthlyData(cumulativeData);
    setOrders(responseOrder)
  }
  useEffect(()=>{
    getOrders();
  },[])

  return (
    <div className='p-7'>
      <h3 className='font-semibold text-2xl py-5'>Dashboard</h3>
      {/**<div className='flex justify-between w-full gap-3'>
        <div className='bg-white p-4 flex justify-between items-end flex-grow rounded-md shadow-lg '>
            <div ><p className='text-base font-[450]'>Total :</p><h3 className='text-3xl'>$1100</h3></div>
            <div className='text'>
              <div className='flex w-full justify-end items-center'>
                <GoArrowUpRight className='text-green-600'/>
                <h6>32%</h6>
              </div>
              <p>Compared to April</p>
            </div>
        </div>
        <div className='bg-white p-4 flex justify-between items-end flex-grow rounded-md shadow-lg '>
            <div ><p className='text-base font-[450]'>Total :</p><h3 className='text-3xl'>$1100</h3></div>
            <div className='text'>
              <div className='flex w-full justify-end items-center'>
                <GoArrowUpRight className='text-green-500'/>
                <h6>32%</h6>
              </div>
              <p>Compared to April</p>
            </div>
        </div>
        <div className='bg-white p-4 flex justify-between items-end flex-grow rounded-md shadow-lg '>
            <div ><p className='text-base font-[450]'>Total :</p><h3 className='text-3xl'>$1100</h3></div>
            <div className='text'>
              <div className='flex w-full justify-end items-center'>
                <GoArrowUpRight className='text-green-500'/>
                <h6>32%</h6>
              </div>
              <p>Compared to April</p>
            </div>
        </div>
      </div>**/}
      <div>
      <h3 className='font-semibold text-2xl py-5 text-center'>Income Stats</h3>
      <div className='bg-white shadow-lg p-5'>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={monthlyData}
        options={options}
        className='rounded-md  bg-white'
      />
      </div>
      <div>
        <Table columns={columns} dataSource={orders} />
      </div>
      </div>
    </div>
  )
}

export default Dashboard
