import React, { useEffect, useState } from 'react';
// import './App.css';

function App() {
  const [ des, setDes ] = useState('');

  useEffect(()=>{
    const getDes = async () => {
      const response = await fetch('http://localhost:5000',{
        headers: {'Content-Type': 'Application/json'}
      })
      const data = await response.json();
      setDes(data.message);
    }
    getDes();
  })
  return (
    <>
      <h1 className="text-[10rem]">{des}</h1>
    </>
  );
}

export default App;
