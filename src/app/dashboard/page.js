"use client";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";
import SideNav from "@/components/SideNavSeller";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/utils/CustomerType";


import { useAuthState } from "@/utils/auth";
import SellersDashboard from "@/components/SellersDashboard";



const Page = () => {
  
  const router = useRouter();

  const { user, loading: authLoading } = useAuthState();
  const { role, loading: roleLoading } = useUserRole(user?.uid);
  console.log(role)
  if (authLoading && roleLoading) {
    return <Loading />;
  } 
  if (role === "buyer") {
    router.push('/buyer/marketplace')
  }

  return (
    <>
      <div className="flex px-5 lg:px-0 font-roboto">
        <SideNav
          option1={"Dashboard"}
          option2={"Item History"}
          option3={"Add Item"}
          userType={role}
        />
        <SellersDashboard/>
        </div>
    </>
  );
};

export default function ProtectedDashboard() {
  return (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  );
}
