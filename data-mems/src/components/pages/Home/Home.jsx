import React, { useState, useEffect, useRef } from 'react';
import './home.css';

function Home() {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('memes');
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetchImages();
  }, [selectedCategory, currentPage]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=33822004-9d83312280bc95290f1335ddd&q=${selectedCategory}&per_page=6&page=${currentPage}`
      );
      const data = await response.json();
      setImages(data.hits);
      setTotalPages(Math.ceil(data.totalHits / 6));
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="container">
      <nav className="menu">
        <ul>
          <div className="left-logo">
            <li>
              <a href="/">Memes</a>
            </li>
          </div>
          <div className="right-menu">
            <li>
              <button className="upload-btn" id="upload">
                + Upload
              </button>
            </li>
            <li className="menu-profile">
              <a href="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </a>
            </li>
            <li className="dropdown" ref={dropdownRef}>
              <button className="dropdown-btn" onClick={toggleDropdown}>
                Categories
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className={`category-item ${
                        selectedCategory === 'memes' ? 'active' : ''
                      }`}
                      onClick={() => handleCategoryChange('memes')}
                    >
                      Memes
                    </button>
                  </li>
                  <li>
                    <button
                      className={`category-item ${
                        selectedCategory === 'nature' ? 'active' : ''
                      }`}
                      onClick={() => handleCategoryChange('nature')}
                    >
                      Nature
                    </button>
                  </li>
                  <li>
                    <button
                      className={`category-item ${
                        selectedCategory === 'animals' ? 'active' : ''
                      }`}
                      onClick={() => handleCategoryChange('animals')}
                    >
                      Animals
                    </button>
                  </li>
                  {/* Add more categories as needed */}
                </ul>
              )}
            </li>
          </div>
        </ul>
      </nav>

      {/* Rest of the component code */}
    </div>
  );
}

export default Home;
