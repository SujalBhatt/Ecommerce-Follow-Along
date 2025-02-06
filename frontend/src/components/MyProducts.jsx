import React, { useState, useEffect } from 'react';
import Card from './Card';

const MyProducts = ({ email }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching products for email:", email); // Debugging line
    fetch(`http://localhost:4000/api/products/user/${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products:", data); // Debugging line
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, [email]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
