import React from 'react'

const Pageheader = ({tittle, path, backgroundImage}) => {

  const headerStyle = {
    backgroundImage: `url(${'https://i.pinimg.com/564x/ce/18/64/ce1864306697888602ce47940b22746b.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', // Sesuaikan tinggi header sesuai kebutuhan Anda
    position: 'relative',
  };
  return (
    <div style={headerStyle} className='py-24 mt-3 rounded flex items-center justify-center'>
        <div>
            <h2 className='text-4xl text-black font-bold mb-1 text-center bg-white p-2'>{tittle}</h2>
            <p className='text-center text-xl font-bold'><a href="/"></a>{path}</p>
        </div>
    </div>
  )
}

export default Pageheader