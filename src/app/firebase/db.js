
import { doc, setDoc, updateDoc  } from "firebase/firestore";
import { auth, firestore } from "../firebase/config"


// Add user to fire store

export const addUserToFirestore = async (user, type) => {
  const userRef = doc(firestore, "Users", user.uid); // Use UID as document ID
  await setDoc(userRef, {
    email: user.email,
    username: user.displayName || "Anonymous",
    created_at: new Date(),
    user_authenticated:  false,
    user_type: type,

  });
};


// Update User Data

export const updateUserData = async (uid, updatedFields) => {
    const userRef = doc(db, "Users", uid);
    await updateDoc(userRef, updatedFields);
  };




// Example usage after sign-up

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     addUserToFirestore(user);
//   }
// });

// Example: Update the user's display name
// updateUserData(auth.currentUser.uid, { displayName: "New Name" });