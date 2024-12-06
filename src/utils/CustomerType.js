import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "@/app/firebase/config";
import { useAuthState } from "./auth";
import { useEffect, useState } from "react";

// Fetch Type
const FetchType = async (type) => {
  try {
    const usersRef = collection(firestore, "Users");
    const q = query(usersRef, where("type", "==", type));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching users by type:", error);
    return [];
  }
};

// Compare current user with fetched type list
const compCurrentUser = async (user, type) => {
  const userType = await FetchType(type);
  return !!userType.find((item) => user.email === item.email);
};

export const CustomerType = async (type) => {
  const { user, loading } = useAuthState();
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        console.error("No authenticated user found.");
        return false;
      }
      const runFunc = async () => {
        // Compare current user with fetched type list
        const isFound = await compCurrentUser(user, type);
        return isFound;
      };

      runFunc();
    }
  }, [user, loading]);

};

export default CustomerType;
