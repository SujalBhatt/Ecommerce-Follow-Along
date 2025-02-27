import React, { useEffect, useState } from "react";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        console.log("Fetching cart products..."); // Debugging line
        fetch("http://localhost:4000/api/cart/67b5689b220a98f43212a3be") // Replace USER_ID with actual user ID
            .then(response => {
                console.log("Response received:", response); // Debugging line
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched cart products:", data); // Debugging line
                setCartProducts(data);
            })
            .catch(error => console.error("Error fetching cart products:", error));
    }, []);

    const validCartProducts = cartProducts.filter(product => product.product && product.product.images);

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">My Cart</h1>
            {validCartProducts.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {validCartProducts.map(product => (
                        <div key={product.product._id} className="bg-white shadow-lg rounded-lg p-4">
                            <img src={`http://localhost:4000/uploads/${product.product.images[0]}`} alt={product.product.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-semibold">{product.product.name}</h2>
                            <p className="text-lg font-bold text-gray-700">${product.product.price}</p>
                            <p className="text-gray-600">Quantity: {product.quantity}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
