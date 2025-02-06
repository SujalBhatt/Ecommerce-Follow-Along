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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts(products.filter(product => product._id !== id));
        alert("Product deleted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred while deleting the product.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product._id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
