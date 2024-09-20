import React from 'react'

const Cartas = ({item}) => {
  return (
    <div className="card card-side bg-neutral shadow-xl">
    <figure className=' p-3'>
      {/* <img
        src={item.strSportThumb}
        alt="Movie" /> */}
    </figure>
    <div className="card-body">
      <h2 className="card-title">{item.nombre}</h2>
      <h2 className="card-title">{item.edad}</h2>
      <h2 className="card-title">{item.equipo}</h2>
      <p>Click en el boton para ver los resultados mas recientes</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Ver estadisticas</button>
      </div>
    </div>
  </div>
  )
}

export default Cartas