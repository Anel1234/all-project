import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import logo from "../../public/images/Notion.png"
import kota from "../../public/images/kota.png"
const Footer = () => {
  const footerStyle = {
    backgroundImage: `url(${kota})`, // Gunakan path gambar sebagai URL
    backgroundSize: "cover", // Untuk menyesuaikan ukuran gambar dengan ukuran footer
    backgroundRepeat: "no-repeat", // Agar gambar tidak diulang
    backgroundPosition: "center", // Menentukan posisi gambar di tengah footer
  };


  // Mendapatkan tahun saat ini
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-8 bg-slate-800 mt-28">
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 gap-8 px-7 py-5">
        {/* Kolom 1: Logo dan Deskripsi */}
        <div className="flex flex-col items-center md:items-start mr-10">
          <img src={logo} alt="Company Logo" className="w-28 h-28 mb-4" />
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis dolorem 
            incidunt similique alias labore in nihil nemo quisquam fugiat quibusdam quas itaque molestiae, 
            doloribus debitis exercitationem eius ex. Perspiciatis.  
          </p>
        </div>

        {/* Kolom 2: List Pekerjaan */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">Untuk Pencari Kerja</h3>
          <ul>
            <li><a href="#">Lokasi Pekerjaan</a></li>
            <li><a href="#">Nama Perusahaan</a></li>
            <li><a href="#">Kategori Pekerjaan</a></li>
            <li><a href="#">Posisi Pekerjaan</a></li>
            <li><a href="#">Pencarian Terpopuler</a></li>
            <li><a href="#">Help Center</a></li>
            {/* Tambahkan daftar pekerjaan sesuai kebutuhan */}
          </ul>
        </div>

        {/* Kolom 3: List Pekerjaan (lanjutan) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
          <ul>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Tim Kami</a></li>
            <li><a href="#">Karir</a></li>
            <li><a href="#">Inside Inotal</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Tech Blog</a></li>
            <li><a href="#">Pejranian Pengguna</a></li>
            <li><a href="#">Kebijakan Privasi</a></li>
            <li><a href="#">Syarat dan Ketentuan</a></li>
            <li><a href="#">Layanan</a></li>
            
            {/* Tambahkan daftar pekerjaan sesuai kebutuhan */}
          </ul>
        </div>

        {/* Kolom 4: Logo dan Link Sosial Media */}
        <div className="flex justify-center md:justify-start ">
          <div className="mr-4 flex gap-6 flex-col">
            <div className="flex">

            <FaFacebook size={24} className="text-white mr-2 hover:text-blue-500" />
            <p className="text-sm   items-center"><a href="#">inotalwork.tech.www.facebook.com</a></p>
            </div>
            <div className="flex">

            <FaTwitter size={24} className="text-white mr-2 hover:text-blue-500" />
            <p className="text-sm   items-center"><a href="#">inotalwork.tech.www.facebook.com</a></p>
            </div>
            <div className="flex">

            <FaInstagram size={24} className="text-white mr-2 hover:text-blue-500" />
            <p className="text-sm   items-center"><a href="#">inotalwork.tech.www.facebook.com</a></p>
            </div>
            <div className="flex">

            <FaTelegram size={24} className="text-white mr-2 hover:text-blue-500" />
            <p className="text-sm   items-center"><a href="#">inotalwork.tech.www.facebook.com</a></p>
            </div>

            
          </div>
          
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10">
        <p>&copy; {currentYear} InotalWork-tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
