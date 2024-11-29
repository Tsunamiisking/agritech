"use client"
import { useAuthState }  from "../utils/auth"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthState();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);

  if (loading) {
    return (
        <Loading />
    );
  }

  return user ? children : null;
};

export default ProtectedRoute;