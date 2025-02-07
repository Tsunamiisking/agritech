"use client";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";
import SideNavSeller from "@/components/SideNavSeller";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useUserRole } from "@/utils/CustomerType";

import { useAuthState } from "@/utils/auth";
import SellersDashboard from "@/components/SellersDashboard";
import Layout from "@/components/Layout";
import SideNav from "@/components/SideNav";

const Page = () => {
  const router = useRouter();

  const { user, loading: authLoading } = useAuthState();
  const { role, loading: roleLoading } = useUserRole(user?.uid);
  console.log(role);
  if (authLoading && roleLoading) {
    return <Loading />;
  }
  if (role === "buyer") {
    router.push("/buyer/marketplace");
  }

  return (
    <Layout>
      <SideNav
        option1={"Dashboard"}
        option2={"Products"}
        option3={"Orders"}
        option4={"Settings"}
        userType={"Seller"}
      />
      <SellersDashboard />
    </Layout>
  );
};

export default function ProtectedDashboard() {
  return (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  );
}
