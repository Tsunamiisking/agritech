"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/config";
import { useRouter } from "next/navigation";
import { addUserToFirestore } from "../firebase/db";
import { updateProfile } from "firebase/auth";
import Loading from "@/components/Loading";
import { addDoc, collection } from "firebase/firestore";

const Page = () => {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [CreateUserWithEmailAndPassword, authUser, loading] =
    useCreateUserWithEmailAndPassword(auth);
  // console.log(useCreateUserWithEmailAndPassword(auth))
  const router = useRouter();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation example
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    // Reset messages
    setError("");
    setSuccess("");

    try {
      // Create user with email and password
      const res = await CreateUserWithEmailAndPassword(
        formData.email,
        formData.password
      );
      
      //  console.log(res)

      // Update user's display name
      await updateProfile(res.user, {
        displayName: formData.username,
      });

      // Add user to Firestore
      const userDoc = await addDoc(collection(firestore, "Users"), {
        uid: res.user.uid,
        displayName: formData.username,
        email: formData.email,
        type: formData.role,
      });

      //  console.log("User added to Firestore:", userDoc.id);

      // Success feedback
      setSuccess("Successfully signed up!");

      // Redirect based on role
      if (formData.role === "seller") {
        router.push("/marketPlace");
      } else if (formData.role === "buyer") {
        router.push("/dashboard");
      } else {
        router.push("/"); // Optional fallback route
      }

      // Clear form data
      setFormData({ email: "", password: "", username: "", role: "" });
    } catch (error) {
      // Error handling for Authentication or Firestore
      let errorMessage;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use. Please try another.";
      } else if (error.codewha === "auth/weak-password") {
        errorMessage = "Password is too weak. Please use a stronger password.";
      } else {
        errorMessage = "An error occurred. Please try again.";
      }
      console.error("Error during signup:", error);
      setError(errorMessage);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const img = {
    backgroundImage: `url('/images/open-farm.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "20rem",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-2 w-full max-w-5xl px-8">
        <div
          className="flex flex-col align-middle justify-center rounded-l-lg w-full bg-cover bg-center min-h-[30rem] shadow-md"
          style={img}
        >
          <div>
            <h2 className="text-white text-3xl font-bold text-center mb-2">
              Create an account!
            </h2>
          </div>
        </div>
        <div className="bg-white rounded-r-lg shadow-md p-8 flex items-center justify-center min-h-[30rem]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Display error or success messages */}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

            {/* Email input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Enter your Username"
              />
            </div>

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
            {/* Select option */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              >
                <option disabled value="">
                  Select your role
                </option>
                <option value="seller">Seller</option>
                <option value="buyer">Buyer</option>
              </select>
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
              Sign Up
            </button>
            <p className="text-center text-sm pt-2">
              {" "}
              Already have an account
              <a href="/login" className="text-green-600">
                {" "}
                Log in{" "}
              </a>{" "}
            </p>
            <div className="text-center">
              <hr />
              <p className="mt-4">
                <a href="/sign-up" className="text-sm text-green-600">
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
