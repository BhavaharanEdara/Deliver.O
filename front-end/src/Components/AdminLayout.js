import { Outlet, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

import {  MenuFoldOutlined,  MenuUnfoldOutlined,} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { BsCartPlus,BsCartFill } from "react-icons/bs";
import { TbBrandBootstrap } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { LuClipboardList } from "react-icons/lu";
import { CiUser} from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoIosColorPalette } from "react-icons/io";

const { Header,Sider, Content } = Layout;

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  
  const user = JSON.parse(localStorage.getItem('user'));
  
  const navigate = useNavigate();
  return (
    <Layout className='h-full min-h-screen '>
      <Sider  trigger={null} collapsible collapsed={collapsed} >
        {collapsed ? <h1 className='py-3 pl-4 text-2xl text-white bg-yellow-500 font-bold w-full fixed z-50'>D.o</h1>: <h1 className='py-3 pl-4 text-2xl text-white bg-yellow-500 font-bold fixed z-50 w-full'>Deliver.o <span className='text-[50%] px-[1%] ml-1 bg-white font-normal text-black'>Admin</span></h1> }
        <div className=" w-1/4 demo-logo-vertical" />
        <Menu
          className="pt-16"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          onClick={({key})=>{
            if(key!=="signout"){
              navigate(key);
            }
          }

          }
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard />,
              label: 'DashBoard',
            },
            {
              key: 'customers',
              icon: <FaUsers />,
              label: 'Customers',
            },
            {
              key: 'Catalog',
              icon: <AiOutlineShoppingCart />,
              label: 'Catalog',
              children:[
                {
                  key: 'product',
                  icon: <BsCartPlus />,
                  label: 'Add Product',
                },{
                  key: 'product-list',
                  icon: <BsCartFill />,
                  label: 'Product List',
                },{
                  key: 'add-color',
                  icon: <IoIosColorPalette />,
                  label: 'Add colour',
                },{
                  key: 'color-list',
                  icon: <IoIosColorPalette />,
                  label: 'Colour List',
                },
              ]
            },
            {
              key: 'orders',
              icon: <GrDeliver />,
              label: 'Orders',
            },{
              key: 'enquiries',
              icon: <LuClipboardList /> ,
              label :"Enquiries"
            }
          ]}
        />
      </Sider>
      <Layout className='py-4 bg-white'>
        <Header className='pl-2 fixed z-50 w-[90%] top-0 bg-white flex justify-between ' >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className='text-base h-16 w-16 p-4'
          />
          <Link to={`${user ? "/profile" : "/login"}`} className='flex flex-col justify-center items-center hover:text-green-400 mr-10'>
            <CiUser className='text-3xl ' />
            {user ? <h3 className='text-sm font-medium' >{user.findUser.firstname+" "+user.findUser.lastname}</h3> : <h3 className='text-sm font-medium' >Login/SignUp</h3>}
          </Link>
          
        </Header>
        <Content className=' min-h-[200px] bg-gray-100 '>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}
