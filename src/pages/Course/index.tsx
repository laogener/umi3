import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios, { AxiosResponse } from 'axios';
const Index = () => {
  const columns = [
    {
      title: '课程类别',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '课程总价',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: '课程数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '课程地址',
      dataIndex: 'address',
      key: 'address',
      render: (text: string) => (
        <a target="_blank" href={text}>
          查看课程
        </a>
      ),
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (record: { id: string }) => (
        <>
          <a href="">编辑</a>
          <a href="">删除</a>
        </>
      ),
    },
  ];
  interface Data {
    id: string;
    type: string;
    name: string;
    totalPrice: string;
    amount: string;
    address: string;
  }
  const [datas, setDatas] = useState<Data[]>([] as Data[]);
  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = () => {
    axios.get('/api/courseList').then((res: AxiosResponse<Data[]>) => {
      // console.log(res)
      setDatas(res.data);
    });
  };
  return (
    <div>
      <Table
        dataSource={datas}
        columns={columns}
        rowKey={(datas: { id: string }) => datas.id}
      />
    </div>
  );
};

export default Index;
