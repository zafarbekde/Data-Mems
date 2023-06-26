import React from 'react';
import { useQuery } from 'react-query';
import './home.css';

function Home() {
  const selectedCategory = 'memes'; // Set your desired category here

  const fetchImages = async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=563492ad6f91700001000001a9f2c1745627440f86cd94bd8aa19fed&q=${selectedCategory}&per_page=6&page=1`
    );
    const data = await response.json();
    return data.hits;
  };

  const { data: images, isLoading, isError } = useQuery('images', fetchImages);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching images.</div>;
  }

  return (
    <div className="container">
      <nav className="menu">
        {/* Menu code */}
      </nav>

      <div className="content-upload">
        <h2>Welcome!</h2>
        <div className="image-grid">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              className="image-item"
            />
          ))}
        </div>
        {/* Pagination code */}
      </div>

      <div className="profile">
        <h3>Профиль</h3>
      </div>
    </div>
  );
}

export default Home;
