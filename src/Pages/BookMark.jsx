// BookMark.js
import React from "react";
import NavSub from "../components/NavSub";
import Won from "../../public/images/wonu.png";
import { Link } from "react-router-dom";
import Whatsapp from "../components/Whatsapp";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const BookMark = () => {
  const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

  return (
    <div>
      <Navbar />
      <NavSub />
      <div
        className={`default h-screen w-full flex items-center justify-center ${
          storedBookmarks.length > 0 ? "hidden" : ""
        }`}
      >
        <div className="text-center">
          <img src={Won} alt="wonwoo" className="w-80 mx-auto mt-20" />
          <h3 className="text-3xl font-bold">
            {storedBookmarks.length > 0
              ? "Your Bookmarked Jobs"
              : "Oooppss...Belum ada apapun disini..."}
          </h3>
          {storedBookmarks.length === 0 && (
            <p className="text-xl">
              Kamu belum menyimpan lowongan apapun. Cari lowongan pekerjaan dan
              simpan lowongan yang menarik untukmu!
            </p>
          )}
          {storedBookmarks.length === 0 && (
            <Link to="/home">
              <button className="px-12 py-2 bg-blue text-lg text-white mt-8 hover:bg-blue/85">
                Cari lowongan sekarang!
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {storedBookmarks.map((bookmark) => (
          <Card key={bookmark._id} data={bookmark} inBookmarkSection />
        ))}
      </div>
      <Whatsapp />
    </div>
  );
};

export default BookMark;
