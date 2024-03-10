import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[paragraftGoster, paragraftIslem]=useState(true)
  const[sayac, sayacGuncelle] = useState(0)

  useEffect( ()=> {console.log("1. efect çalıştı");},[] )


   useEffect(()=>{console.log("2. efect calıştı");})
 
  return (
    <>
     sayac:{sayac}
     
    </>
  );
}

export default App;
