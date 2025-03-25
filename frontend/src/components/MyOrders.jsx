import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyOrders = () => {
    const { email } = useParams();
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!email) {
            setError("Invalid email parameter.");
            return;
        }

        fetch(`http://localhost:4000/api/orders/user-orders/${email}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user orders.");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Orders data:", data); // Debugging log
                if (data.message === "User orders fetched successfully") {
                    setOrders(data.orders || []); // Ensure orders is an array
                } else {
                    setError("Error fetching user orders.");
                }
            })
            .catch((error) => {
                console.error("Error fetching user orders:", error);
                setError("Error fetching user orders.");
            });
    }, [email]);

    const handleCancelOrder = (orderId) => {
        fetch("http://localhost:4000/api/orders/cancel-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ orderId })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "Order canceled successfully") {
                    setOrders((prevOrders) =>
                        prevOrders.map((order) =>
                            order._id === orderId ? { ...order, status: "Canceled" } : order
                        )
                    );
                } else {
                    console.error("Error canceling order:", data.message);
                }
            })
            .catch((error) => console.error("Error canceling order:", error));
    };

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (orders.length === 0) {
        return <div className="text-center text-gray-500 mt-10">No orders found.</div>;
    }

    return (
        <div className="container mx-auto p-8 min-h-screen bg-purple-100 flex flex-col items-center">
            <header className="text-center mb-12 bg-purple-100 p-6 rounded-3xl shadow-md w-full max-w-3xl">
                <h1 className="text-4xl font-extrabold text-gray-800">My Orders</h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {orders.map((order, index) => (
                    <div key={index} className="bg-gray-100 shadow-md rounded-3xl p-6">
                        <h2 className="text-xl font-bold text-gray-700 mb-4 truncate">
                            <strong>Order ID:</strong>
                            <span className="block overflow-hidden text-ellipsis whitespace-nowrap">{order._id || "N/A"}</span>
                        </h2>
                        <p className="mb-2"><strong>Status:</strong> {order.status || "N/A"}</p>
                        <p className="mb-2"><strong>Total Amount:</strong> ${order.totalAmount || "N/A"}</p>
                        <h3 className="text-lg font-bold text-gray-600 mt-4 mb-2">Items:</h3>
                        {order.items?.length > 0 ? (
                            <ul className="list-disc pl-5 space-y-2">
                                {order.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="bg-white p-3 rounded-lg shadow-sm">
                                        <p><strong>Product:</strong> {item.product?.name || "N/A"}</p>
                                        <p><strong>Quantity:</strong> {item?.quantity || "N/A"}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No items found for this order.</p>
                        )}
                        {order.status !== "Canceled" && (
                            <button
                                onClick={() => handleCancelOrder(order._id)}
                                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all duration-200 mt-4"
                            >
                                Cancel Order
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
