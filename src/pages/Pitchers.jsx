import React, { useEffect, useState } from 'react'
import Cartas from '../components/Cartas';
const API="http://localhost:3000/pitchers"

const Pitchers = () => {
    const [datos, setDatos] = useState([]);
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data);
      setDatos(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDatos();
  }, []);
  return (
    <div className="container">
    <h3 className="text-center py-4">Pitchers ({datos.length})</h3>
        <div className="row ">
            {datos && datos.map((item)=>(
              <Cartas key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Pitchers