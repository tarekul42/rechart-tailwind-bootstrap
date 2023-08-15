import { useEffect, useState } from 'react';
import './App.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function App() {

  const studentsData = [
    {
      name: "John Doe",
      bangla: 0,
      english: 50,
      ict: 50,
      physics: 100,
      chemistry: 79,
      biology: 91,
    },
    {
      name: "Jane Smith",
      bangla: 100,
      english: 50,
      ict: 50,
      physics: 0,
      chemistry: 85,
      biology: 83,
    },
    {
      name: "Md. Rahman",
      bangla: 0,
      english: 50,
      ict: 50,
      physics: 100,
      chemistry: 80,
      biology: 89,
    },
    {
      name: "Ayesha Khan",
      bangla: 100,
      english: 50,
      ict: 50,
      physics: 0,
      chemistry: 83,
      biology: 88,
    },
    {
      name: "Ali Hassan",
      bangla: 0,
      english: 50,
      ict: 50,
      physics: 100,
      chemistry: 91,
      biology: 87,
    },
  ];
  
  

  
  return (
    <>
      <LineChart width={1000} height={300} data={studentsData}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="bangla" stroke="#8884d8" />
    <Line type="monotone" dataKey="english" stroke="#82ca9d" />
    <Line type="monotone" dataKey="physics" stroke="#bbbbf8" />
    <Tooltip></Tooltip>
  </LineChart>
    </>
  )
}

export default App
