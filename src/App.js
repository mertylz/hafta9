import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[data, setData] =useState([]);
  
  useEffect(()=>{
 async function fetchData(){
  const response = await fetch('https://jsonplaceholder.org/users')
  const jsObjectData = await response.json();
  setData(jsObjectData);
 }


 setTimeout(fetchData, 2000)


  },[])
 console.log(data);
  return (
    <>
    {data.length=== 0 &&<p>YÜKLENİYOR...</p>}
     { data.map(   kisi =><p key={kisi.id}>{kisi.firstname}</p>)        }
    </>
  );
}

export default App;
