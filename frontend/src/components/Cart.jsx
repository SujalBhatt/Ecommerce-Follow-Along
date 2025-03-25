import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const userId = "67b5689b220a98f43212a3be"; // Replace with actual user ID
    const navigate = useNavigate();
    const userEmail = "vimlabhatt97@gmail.com"; // Replace with the actual user email

    useEffect(() => {
        fetch(`http://localhost:4000/api/cart/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch cart products: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setCartProducts(data);
                } else {
                    console.error("Unexpected response format:", data);
                    setCartProducts([]);
                }
            })
            .catch(error => {
                console.error("Error fetching cart products:", error);
                setCartProducts([]); // Fallback to an empty array
            });
    }, [userId]);

    const updateQuantity = (productId, quantity) => {
        fetch(`http://localhost:4000/api/cart/update-quantity`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, productId, quantity })
        })
        .then(response => response.json())
        .then(data => {
            setCartProducts(data);
        })
        .catch(error => console.error("Error updating quantity:", error));
    };

    const handlePlaceOrder = () => {
        navigate(`/select-address?email=${userEmail}&userId=${userId}`);
    };

    const validCartProducts = Array.isArray(cartProducts)
        ? cartProducts.filter(product => product.product && product.product.images)
        : [];

    return (
        <div
            className="w-screen min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-8"
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-photo/online-shopping-concept-3d-smartphone-with-cart-shopping-bag-digital-marketing-promotion-online-payment-3d-render-illustration_265427-805.jpg?semt=ais_hybrid')",
            }}
        >
            <header className="text-center mb-12 bg-purple-100 p-6 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-800">My Cart</h1>
            </header>
            {validCartProducts.length === 0 ? (
                <p className="text-gray-700">Your cart is empty</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                    {validCartProducts.map(product => (
                        <div key={product.product._id} className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] rounded-3xl p-4 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-shadow">
                            <img src={`http://localhost:4000/uploads/${product.product.images[0]}`} alt={product.product.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-xl font-semibold">{product.product.name}</h2>
                            <p className="text-lg font-bold text-gray-700">${product.product.price}</p>
                            <div className="flex items-center mt-4">
                                <button onClick={() => updateQuantity(product.product._id, product.quantity - 1)} className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l">-</button>
                                <span className="px-4">{product.quantity}</span>
                                <button onClick={() => updateQuantity(product.product._id, product.quantity + 1)} className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r">+</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {validCartProducts.length > 0 && (
                <button
                    onClick={handlePlaceOrder}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-200 mt-8"
                >
                    Place Order
                </button>
            )}
        </div>
    );
};

export default Cart;
