// src/components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const userData = {
      email, 
      password
    }
    
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })

      const data = await response.json()
      console.log(data)
      alert(data.message)

    } catch (err) {
      setError(err.message)
      console.error(err.message)
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: "url('https://www.godaddy.com/resources/wp-content/uploads/2025/02/ecommerce-featured-aO3ClS.tmp_.jpeg?size=3840x0')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-96"
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center">Login</h2>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full py-3 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l">
          Login
        </button>
        <div className="text-center mt-4">
          <Link to="/signup" className="text-purple-600 hover:underline">
            Don't have an account? Sign up here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
