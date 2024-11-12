'use client'
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

const page = () => {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [SignInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)
  const router = useRouter();
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation example
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    // Reset messages, and simulate form submission
    setError("");
    setSuccess("Successfully signed up!");
    
    // Additional sign-up logic here
    try {
      const res = await SignInWithEmailAndPassword(formData.email, formData.password)
      console.log('Signed in')
      formData.email = ''
      formData.password = ''
      router.push('/dashboard')

    } catch (e) {
      console.error(e)
    }
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
        
        {/* Display error or success messages */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Password input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:bg-green-400 transition duration-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
