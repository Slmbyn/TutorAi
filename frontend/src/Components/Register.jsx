import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../index.css'; // Tailwind import
import { UserContext } from './UserContext'

const Register = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    async function handleSubmit (evt) {
        evt.preventDefault();
        // send a request to /register
        const response = await axios.post('http://localhost:8000/register/', userData);
        // store token in local storage
        console.log('reg response:', response)
        setUser({
            username: response.data.username,
            email: response.data.email,
            user_id: response.data.user_id
        })
        localStorage.setItem('token', response.data.token);
        // redirect to /home
        navigate('/');
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Register Here:</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            onChange={handleChange}
            type="text" 
            name="username"
            placeholder="Username" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input 
            onChange={handleChange}
            type="email" 
            name="email"
            placeholder="Email" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input 
            onChange={handleChange}
            type="password" 
            name="password"
            placeholder="Password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input 
            onChange={handleChange}
            type="password" 
            name="password2"
            placeholder="Confirm Password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
