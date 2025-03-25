import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Profile = () => {
    const { email } = useParams();
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!email) {
            setError("Invalid email parameter.");
            return;
        }

        fetch(`http://localhost:4000/api/users/${email}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user data.");
                }
                return response.json();
            })
            .then((data) => {
                console.log("User data:", data);
                setUser(data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                setError("Error fetching user data.");
            });

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

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-8">
            <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* User Info Section */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-700 mb-6">
                        User Information
                    </h2>
                    <p className="mb-4 text-lg"><strong>Name:</strong> {user?.name || "N/A"}</p>
                    <p className="mb-4 text-lg"><strong>Email:</strong> {user?.email || "N/A"}</p>
                    <h3 className="text-2xl font-bold text-gray-600 mb-4">Addresses</h3>
                    {user?.addresses?.length > 0 ? (
                        <ul className="list-disc pl-5 space-y-4">
                            {user.addresses.map((address, index) => (
                                <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                                    <p><strong>Country:</strong> {address?.country || "N/A"}</p>
                                    <p><strong>City:</strong> {address?.city || "N/A"}</p>
                                    <p><strong>Address 1:</strong> {address?.address1 || "N/A"}</p>
                                    <p><strong>Address 2:</strong> {address?.address2 || "N/A"}</p>
                                    <p><strong>Zip Code:</strong> {address?.zipCode || "N/A"}</p>
                                    <p><strong>Address Type:</strong> {address?.addressType || "N/A"}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No addresses found.</p>
                    )}
                    <Link to={`/add-address?email=${email}`}>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 mt-6">
                            Add Address
                        </button>
                    </Link>
                </div>

                {/* Orders Section */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-700 mb-6">
                        Orders
                    </h2>
                    {orders.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {orders.map((order, index) => (
                                <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6">
                                    <p className="text-lg font-bold mb-2 truncate">
                                        <strong>Order ID:</strong>
                                        <span className="block overflow-hidden text-ellipsis whitespace-nowrap">{order._id || "N/A"}</span>
                                    </p>
                                    <p className="text-lg mb-2"><strong>Status:</strong> {order.status || "N/A"}</p>
                                    <p className="text-lg mb-2"><strong>Total Amount:</strong> ${order.totalAmount || "N/A"}</p>
                                    <h3 className="text-xl font-bold text-gray-600 mt-4 mb-2">Items:</h3>
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
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No orders found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
