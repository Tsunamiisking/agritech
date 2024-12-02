"use client";
import { useAuthState } from "../utils/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./Loading";

// Fetch Type

const FetchType = async (type) => {
  const usersRef = collection(firestore, "Users");
  const q = query(usersRef, where("type", "==", type)); // Filter by type
  const snapshot = await getDocs(q);
  const buyers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return buyers;
};

// Compare current user with buyer list

const compCurrentUser = async (user, type) => {
  const userType = await FetchType(type);
  return userType.find((item) => {
    return user.email === item.email;
  });
};

const ProtectedRoute = ({ children, type }) => {
  const { user, loading } = useAuthState();
  const router = useRouter();

  useEffect( () => {
    // const matchedSeller = await compCurrentUser(user, "seller");
    // if (type === "buyer") {
    //   const matchedBuyer = await compCurrentUser(user, "buyer");

    //   if (!matchedBuyer) {
    //     router.push("/")
    //   }
    // }
    if (!loading && !user) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loading />;
  }

  return user ? children : null;
};

export default ProtectedRoute;
