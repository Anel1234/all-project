import React from 'react'
import NavSub from '../components/NavSub'
import Won from '../../public/images/wonu.png'
import { Link } from 'react-router-dom'

const BookMark = () => {
  return (
    <div>
        <NavSub/>
        <div className='h-screen w-full flex items-center justify-center'>
          <div className='text-center'>
            <img src={Won} alt="wonwoo" className='w-80 mx-auto mt-20' />
            <h3 className='text-3xl font-bold'>Oooppss...Belum ada apapun disini...</h3>
            <p className='text-xl'>Kamu belum menyimpan lowongan apapun. Cari lowongan pekerjaan dan simpan lowongan yang menarik untukmu!</p>
            <Link to="/">
            <button className='px-12 py-2 bg-blue text-lg text-white mt-8 hover:bg-blue/85'>Cari lowongan sekarang!</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default BookMark