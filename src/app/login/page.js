"use client";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/config";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import Loading from "@/components/Loading";

const Page = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const [role, setRole] = useState(null);
  const [authError, setAuthError] = useState("");
  const [success, setSuccess] = useState("");
  const [isClient, setIsClient] = useState(false); // NEW FIX ✅

    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

  // Ensure this runs only on the client to prevent SSR mismatches
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!user?.user) return;

    const fetchUserRole = async () => {
      const userDoc = doc(firestore, "Users", user.user.uid);
      const userSnap = await getDoc(userDoc);
      if (userSnap.exists()) {
        setRole(userSnap.data().type);
      }
    };

    fetchUserRole();
  }, [user]);

  useEffect(() => {
    if (!role) return;

    if (role === "buyer") {
      router.push("/buyer/marketplace");
    } else if (role === "seller") {
      router.push("/seller/dashboard");
    }
  }, [role, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setAuthError("All fields are required");
      return;
    }

    setAuthError("");
    setSuccess("");

    const res = await signInWithEmailAndPassword(
      formData.email,
      formData.password
    );

    if (res?.user) {
      setSuccess("Successfully signed in!");
    } else if (error) {
      let customMessage;
      switch (error.code) {
        case "auth/user-not-found":
          customMessage = "No account found with this email. Please sign up.";
          break;
        case "auth/wrong-password":
          customMessage = "Incorrect password. Try again.";
          break;
        default:
          customMessage = "Something went wrong. Please try again later.";
      }
      setAuthError(customMessage);
    }
  };

  if (loading) {
    return <Loading />;
  }

  // Prevent hydration errors by delaying rendering until useEffect runs
  if (!isClient) return null; // NEW FIX ✅

  const img = {
    backgroundImage: `url('/images/open-farm.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "20rem",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 w-full max-w-5xl px-8">
        <div
          className="hidden md:flex lg:flex flex-col align-middle justify-center rounded-l-lg w-full bg-cover bg-center min-h-[30rem] shadow-md"
          style={img}
        >
          <h2 className="text-white text-3xl font-bold text-center mb-2">
            Welcome Back!
          </h2>
        </div>

        <div className="bg-white rounded-r-lg shadow-md p-8 flex items-center justify-center min-h-[30rem]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {authError && <p className="text-red-500 text-center">{authError}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}

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

            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:bg-green-400 transition duration-300"
            >
              Sign in
            </button>

            <p className="text-center text-sm pt-2">
              Forgot your password?
              <a className="text-green-600"> Reset Password. </a>
            </p>
            <div className="text-center">
              <hr />
              <p className="mt-4">
                <a href="/sign-up" className="text-sm text-green-600">
                  Create new account
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
