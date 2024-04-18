import React from 'react';

const Testimoni = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Testimoni
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Windya A."
              className="rounded-full w-24 h-24 mb-2"
            />
            <p className="text-xl font-bold"> RIZKY.</p>
            <p className="text-gray-600">15 tahun</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-center">
              "Glints jadi platform cari kerja yang paling mudah & cepat buatku.
              Aku berhasil career switch ke bidang yang jadi passion-ku dan
              dapat kerja cuma dalam 4 hari."
            </p>
            <p className="text-blue-500 font-bold text-center mt-2">
              Content Strategist
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Dimas B Wicaksono"
              className="rounded-full w-24 h-24 mb-2"
            />
            <p className="text-xl font-bold">PUTRA</p>
            <p className="text-gray-600">26 tahun</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-center">
              "Lewat Glints, aku bisa dapat pekerjaan yang bikin aku puas dan
              orang tua bangga. Prosesnya cepat, cuma 4 hari aku langsung
              dihubungi rekruter."
            </p>
            <p className="text-blue-500 font-bold text-center mt-2">
              Seniorccount Executive
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mb-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Ashalia T. Tasha"
              className="rounded-full w-24 h-24 mb-2"
            />
            <p className="text-xl font-bold">Ashalia T. Tasha</p>
            <p className="text-gray-600">21 tahun</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-center">
              "Lewat Glints, aku berhasil mematahkan stigma jurusanku &
              berhasil dapat kerja sebelum lulus. Prosesnya cepat, aku
              diterima seminggu setelah interview."
            </p>
            <p className="text-blue-500 font-bold text-center mt-2">
              Marketing Communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;