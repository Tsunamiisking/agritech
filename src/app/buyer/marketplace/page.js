"use client";
import Marketplace from "@/components/Marketplace";
import SideNav from "@/components/SideNav";
import ProtectedRoute from "@/components/ProtectedRoutes";


const Page = () => {
  return (
    <>
      <div className="flex px-5 lg:px-0">
        <SideNav />
        <Marketplace />
      </div>
    </>
  );
};

export default function ProtectedMarketPlace() {
  return (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  );
}
