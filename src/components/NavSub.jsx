import React from 'react';
import { FcIdea } from 'react-icons/fc';
import { MdExplore } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const NavSub = () => {
  const location = useLocation();

  return (
    <div className="max-w-screen-2xl mx-auto container my-20 xl:px-24 px-4 fixed bg-white z-10 p-5">
      <nav className="">
        <ul className="flex space-x-10">
          <Link to="/home" className={`link ${location.pathname === '/home' ? 'border-b-4 border-blue' : ''}`}>
            <li className="flex items-center gap-2 hover:text-blue/85">
              <MdExplore />EXPLORE
            </li>
          </Link>
          <Link to="/fyp" className={`link ${location.pathname === '/fyp' ? 'border-b-4 border-blue' : ''}`}>
            <li className="flex items-center gap-2 hover:text-blue/85">
              <FcIdea />FOR YOU
            </li>
          </Link>
          <Link to="/book-mark" className={`link ${location.pathname === '/book-mark' ? 'border-b-4 border-blue' : ''}`}>
            <li className="flex items-center gap-2 hover:text-blue/85">
              <FaBookmark />BOOKMARK
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavSub;
