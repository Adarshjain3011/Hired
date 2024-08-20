import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { supabase } from './supabaseClient';

function App() {

  const [data,setData] = useState([]);
  

  async function getProductData() {

    try {


      let { data: product, error } = await supabase
        .from('product')
        .select('*') ;


      console.log("data is ",product);

      setData(product);


    } catch (e) {

      console.log(e);

    }
  }

  useEffect( ()=>{

    getProductData();

  },[])

  

  return (

    <div>

      <h1>helllow vite with the supsbase </h1>

      {

        data.length > 0 && data.map((val,index)=>(

          <div>

              <p>{val.title}</p>
              <p>{val.price}</p>


          </div>
        ))
      }

    </div>
  )
}

export default App ;




