import React from 'react';

const Patner = ({data}) => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4 text-right p-4 ">Daftar Patner</h1>
      <div className="flex flex-wrap justify-end justify-right">
        <div className="w-1/3 md:w-400 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 ">
            <h2 className="text-xl font-bold mb-2">nama patner</h2> 
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>logo</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Patner;