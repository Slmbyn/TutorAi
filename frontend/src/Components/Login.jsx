import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from './UserContext'
import '../index.css'; // Tailwind import

const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    async function handleSubmit (evt) {
        evt.preventDefault();
        // send a request to /Login
        const response = await axios.post('http://localhost:8000/login/', userData);
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
        <h1 className="text-2xl font-bold mb-6 text-center">Login Here:</h1>
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
            type="password" 
            name="password"
            placeholder="Password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
