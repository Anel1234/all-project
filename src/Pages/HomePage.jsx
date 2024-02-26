// ... (import statements remain unchanged)
import React, { useState, useEffect } from "react";
import axios from "axios";
import HomePageJob from "../components/HomePageJob";

const HomePage = () => {
  const [berita, setBerita] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Ambil data berita dari backend saat komponen di-mount
    axios
      .get("http://localhost:3000/all-berita")
      .then((response) => setBerita(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Auto slide effect
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % berita.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [berita]);

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + berita.length) % berita.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % berita.length);
  };

  return (
    <div className="mx-10">
      <div className="slider relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-md"
          onClick={nextSlide}
        >
          Next
        </button>
        <div className="text-center w-full bg-red-500 h-72 mt-20">
          <img
            src={berita.length > 0 ? berita[currentSlide].image : ""}
            className="Carouselsc__BannerImage-sc-1ru8kk7-0 fVKcQA object-cover w-full h-full "
            alt={berita.length > 0 ? berita[currentSlide].judul : ""}
          />{" "}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl font-bold mb-4 mt-32 ">
          Berita Lowongan Terbaru
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {berita.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
            >
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt={item.judul}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.judul}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  Tanggal Post: {item.tanggalPost}
                </p>
                <p className="text-gray-800">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HomePageJob />
    </div>
  );
};

export default HomePage;
