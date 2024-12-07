import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/app/firebase/config";
import { useState, useEffect } from "react";

export const useUserRole = (uid) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!uid) {
        setLoading(false); // No user, stop loading
        return;
      }

      try {
        const userDoc = doc(firestore, "Users", uid);
        const userSnap = await getDoc(userDoc);
        if (userSnap.exists()) {
          setRole(userSnap.data().type); // Assume "type" stores the role
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [uid]);

  return { role, loading };
};
