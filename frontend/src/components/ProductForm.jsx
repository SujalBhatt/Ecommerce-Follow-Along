import React, { useState } from 'react';

const ProductForm = ({ email }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        images: [],
        email: email // Initialize email from props
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            images: [...e.target.files]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData?.name || ""); // Ensure name is not null
        data.append('description', formData?.description || "");
        data.append('price', formData?.price || "");
        data.append('email', formData?.email || ""); // Ensure email is not null
        formData?.images?.forEach((image, index) => {
            data.append('images', image);
        });

        console.log("Form data:", formData);

        try {
            const response = await fetch("http://localhost:4000/api/products", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                alert("Product added successfully!");
                // Reset form
                setFormData({
                    name: '',
                    description: '',
                    price: '',
                    images: [],
                    email: email // Reset email field
                });
            } else {
                const errorData = await response.json();
                console.error("Error response:", errorData);
                alert(errorData.message);
            }
        } catch (error) {
            console.error("Error:", error.message);
            alert("An error occurred while adding the product.");
        }
    };

    return (
        <div
            className="w-screen min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center"
            style={{
                backgroundImage: "url('https://img.freepik.com/premium-photo/bill-shopping-cart-floating-purple-background-with-smartphone-shop-store-online-concept-cartoon-minimal-discount-promotion-sale-banner-website-3d-render-illustration_598821-1257.jpg?semt=ais_hybrid')",
            }}
        >
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] w-full max-w-3xl mt-10">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 claymorphism-input"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="description"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 claymorphism-input"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="price"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 claymorphism-input"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 claymorphism-input"
                        />
                    </div>
                    <div className="mb-8">
                        <label
                            htmlFor="images"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Product Images
                        </label>
                        <input
                            type="file"
                            id="images"
                            name="images"
                            multiple
                            onChange={handleImageChange}
                            required
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 claymorphism-input"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
