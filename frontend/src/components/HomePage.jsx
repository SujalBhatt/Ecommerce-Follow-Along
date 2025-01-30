import React, { useState, useEffect } from 'react';
import Card from './Card';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching products from the backend API
    fetch('http://localhost:4000/api/products/products')  // Adjust the URL to your backend's URL
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
