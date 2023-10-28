import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Add your registration logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#d3bd9e]">
      <div className="bg-[#eead174a] p-10 rounded-3xl shadow w-[35%] ">
        <h2 className="text-2xl mb-4 font-bold text-gray-800">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border p-2 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border p-2 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-[#7e5c0c] text-white p-2 rounded-xl">
            Register
          </button>
          <p className="mt-4 text-center">
            Already have an account? <Link to="/login" className="text-[#523d469b]">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
