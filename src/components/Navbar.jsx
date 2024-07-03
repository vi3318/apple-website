import React, { useState } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import './Navbar.css'; // Import your custom CSS for styling

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className="flex w-full screen-max-width">
        <a href='#'> <img src={appleImg} alt="Apple" width={14} height={18} /></a>
        
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav)=> (
            <div key={nav} className='px-5 text-sm cursor-pointer text-white hover:text-underline transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} onClick={toggleSearch} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>

      {isSearchOpen && (
        <div className="search-modal">
          <div className="search-backdrop" onClick={closeSearch}></div>
          <div className="search-box">
            <button className="close-button" onClick={closeSearch}>Close</button>
            <input type="text" placeholder="Search..." className="border border-gray-300 p-2 rounded-md" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
