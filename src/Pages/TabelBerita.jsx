import React, { useState, useEffect } from "react";
import axios from "axios";
import NavAdmin from "../components/NavAdmin";
import Side from "../components/Side";

// Imported Icons
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TabelBerita = () => {
  const [berita, setBerita] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    judul: "",
    tanggalPost: "",
    deskripsi: "",
    image: "",
  });
  const [editingBeritaId, setEditingBeritaId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/all-berita")
      .then((response) => setBerita(response.data))
      .catch((error) => console.error(error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredBerita = berita.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentBerita = filteredBerita.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleDelete = (id) => {
    // Kirim request DELETE ke backend
    axios
      .delete(`http://localhost:3000/berita/${id}`)
      .then((response) => {
        // Filter berita yang akan dihapus dari state
        setBerita(berita.filter((item) => item._id !== id));
        console.log(response.data); // Output: {_id: id}
        alert("Berita deleted successfully!");
      })
      .catch((error) => console.error(error));
  };

  const handleTambah = async () => {
    try {
      if (editingBeritaId) {
        // If editingBeritaId is available, it means we are updating an existing item
        const response = await axios.put(
          `http://localhost:3000/update-berita/${editingBeritaId}`,
          formData
        );
        console.log(response.data);
        alert("Berita updated successfully!");
      } else {
        // If editingBeritaId is not available, it means we are adding a new item
        const response = await axios.post(
          "http://localhost:3000/post-berita",
          formData
        );
        console.log(response.data);
        alert("Berita added successfully!");
      }

      setModalOpen(false);
      handleCloseModal();
      // Fetch updated data after adding/updating
      axios
        .get("http://localhost:3000/all-berita")
        .then((response) => setBerita(response.data))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
      alert("Error adding/updating berita!");
    }
  };

  // When the component mounts, retrieve data from localStorage
  useEffect(() => {
    const storedBerita = localStorage.getItem("berita");
    if (storedBerita) {
      setBerita(JSON.parse(storedBerita));
    }
  }, []);

  // When the component unmounts, clear localStorage
  useEffect(() => {
    return () => {
      localStorage.removeItem("berita");
    };
  }, []);

  const handleEdit = (item) => {
    setFormData({
      judul: item.judul,
      tanggalPost: item.tanggalPost,
      deskripsi: item.deskripsi,
      image: item.image,
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({
      judul: "",
      tanggalPost: "",
      deskripsi: "",
      image: "",
    });
    setEditingBeritaId(null);
  };

  return (
    <div>
      <NavAdmin />
      <Side />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10 p-5 mt-10 ml-52">
        <div className="pb-4 bg-white dark:bg-gray-900 mb-5">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative flex justify-between items-center mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:py-10"
              placeholder="Search for items"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              onClick={() => setModalOpen(true)}
              className="ml-2 px-4 py-2 text-sm font-medium bg-green-300 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700"
            >
              Tambah Berita
            </button>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="px-3 py-3">
                ID
              </th>
              <th scope="col" className="px-3 py-3">
                Judul
              </th>
              <th scope="col" className="px-3 py-3">
                Date
              </th>
              <th scope="col" className="px-3 py-3">
                Deskripsi
              </th>
              <th scope="col" className="px-3 py-3">
                Image
              </th>
              <th scope="col" className="px-3 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentBerita.map((item, index) => (
              <tr
                key={index}
                className="bg-blue-600 border-b border-blue-400 text-center"
              >
                <td className="px-3 py-4 bg-blue-500 flex gap-3 justify-center">
                  {index + 1}
                </td>
                <td className="px-3 py-4">{item.judul}</td>
                <td className="px-3 py-4 bg-blue-500">{item.tanggalPost}</td>
                <td className="px-3 py-4">{item.deskripsi}</td>
                <td className="px-3 py-4">
                  <img
                    src={item.image}
                    alt="Berita Image"
                    style={{ maxWidth: "100px", maxHeight: "100px" }} // Adjust the dimensions as needed
                  />
                </td>
                <td className="px-3 py-10 bg-blue-500 flex gap-3 justify-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="font-medium text-yellow-400 hover:underline"
                  >
                    <FaRegEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="font-medium text-red-500 hover:underline"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="mt-8 mb-4 flex justify-center text-black  ">
          {Array.from({
            length: Math.ceil(filteredBerita.length / itemsPerPage),
          }).map((item, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-3 py-2 text-sm font-medium bg-blue-300 rounded-md ${
                currentPage === index + 1
                  ? "bg-slate-400 text-black"
                  : "hover:bg-blue-400"
              } focus:outline-none focus:ring focus:border-blue-700`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {modalOpen && (
          <div className="">
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>
                  &times;
                </span>
                <form className="flex flex-col gap-4">
                  <label>Judul:</label>
                  <input
                    type="text"
                    value={formData.judul}
                    onChange={(e) =>
                      setFormData({ ...formData, judul: e.target.value })
                    }
                  />
                  <label>Tanggal Post:</label>
                  <input
                    type="date"
                    value={formData.tanggalPost}
                    onChange={(e) =>
                      setFormData({ ...formData, tanggalPost: e.target.value })
                    }
                  />
                  <label>Deskripsi:</label>
                  <input
                    type="text"
                    value={formData.deskripsi}
                    onChange={(e) =>
                      setFormData({ ...formData, deskripsi: e.target.value })
                    }
                  />
                  <label>Image:</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="bg-sky-400 w-48 text-center mx-auto p-2 font-medium rounded-md text-md"
                    onClick={handleTambah}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabelBerita;
