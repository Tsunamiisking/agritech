"use client";
import Marketplace from "@/components/Marketplace";
import ProtectedRoute from "@/components/ProtectedRoutes";
import Layout from "@/components/Layout";


const Page = () => {
  return (
    <Layout>
      <Marketplace />
    </Layout>
  );
};

export default function ProtectedMarketPlace() {
  return (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  );
}
