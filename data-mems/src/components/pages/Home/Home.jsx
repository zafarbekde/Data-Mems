import React, { useState, useEffect, useRef } from 'react';
import Modal from '../Upload/Upload';
import './home.css';

function Home() {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('memes');
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [perPage] = useState(6);
    const [visiblePages] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        fetchImages();
    }, [selectedCategory, currentPage]);

    const fetchImages = async () => {
        try {
            const response = await fetch(
                `https://pixabay.com/api/?key=33822004-9d83312280bc95290f1335ddd&q=${selectedCategory}&per_page=${perPage}&page=${currentPage}`
            );
            const data = await response.json();
            setImages(data.hits);
            setTotalPages(Math.ceil(data.totalHits / perPage));
        } catch (error) {
            console.log(error);
        }
    };

    const getPageNumbers = () => {
        const halfVisiblePages = Math.floor(visiblePages / 2);
        let startPage = Math.max(1, currentPage - halfVisiblePages);
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);

        if (endPage - startPage + 1 < visiblePages) {
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        return [...Array(endPage - startPage + 1)].map((_, index) => startPage + index);
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
                <div className="left-logo">
                    <li>
                        <a href="/">Memes</a>
                    </li>
                </div>
                <ul>
                    <div className="right-menu">
                        <li className="dropdown" ref={dropdownRef}>
                            <button className="dropdown-btn" onClick={toggleDropdown}>
                                Categories
                            </button>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'memes' ? 'active' : ''
                                                }`}
                                            onClick={() => handleCategoryChange('memes')}
                                        >
                                            Memes
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'nature' ? 'active' : ''
                                                }`}
                                            onClick={() => handleCategoryChange('nature')}
                                        >
                                            Nature
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'animals' ? 'active' : ''
                                                }`}

                                            onClick={() => handleCategoryChange('animals')}
                                        >
                                            Animals
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'girls' ? 'active' : ''
                                                }`}
                                            onClick={() => handleCategoryChange('girls')}
                                        >
                                            Girls
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'games' ? 'active' : ''
                                                }`}
                                            onClick={() => handleCategoryChange('games')}
                                        >
                                            Games
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'cute' ? 'active' : ''
                                                }`}
                                            onClick={() => handleCategoryChange('cute')}
                                        >
                                            Cute
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'cars' ? 'active' : ''
                                                }`}
                                            onClick={() => handleCategoryChange('cars')}
                                        >
                                            Cars
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            className={`category-item ${selectedCategory === 'sci-fi' ? 'active' : ''
                                                }`}
                                            onClick={() => handleCategoryChange('sci-fi')}
                                        >
                                            Sci-Fi
                                        </button>
                                    </li>
                                    {/* Add more categories as needed */}
                                </ul>
                            )}
                        </li>

                        <li>
                            <button className="upload-btn" id="upload" onClick={openModal}>
                                + Upload
                            </button>

                            {isModalOpen && <Modal closeModal={closeModal} />}
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
                    </div>
                </ul>
            </nav>

            <div className="image-container">
                {images.map((image) => (
                    <img className='image-api' key={image.id} src={image.webformatURL} alt={image.tags} />
                ))}
            </div>

            <div className="pagination">
                <button
                    className="pagination-item"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                {getPageNumbers().map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`pagination-item ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    className="pagination-item"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;