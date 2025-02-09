import Layout from "@/components/Layout";
import SideNav from "@/components/SideNav";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function page() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuthState();
  const { role, loading: roleLoading } = useUserRole(user?.uid);

  useEffect(() => {
      if (role === "buyer") 
        router.push("/buyer/marketplace");
  }, [authLoading, roleLoading, role, router]);

  if (authLoading || roleLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <SideNav
        option1={"Dashboard"}
        option2={"Product management"}
        option3={"Order Management"}
        option4={"Payment Management"}
        userType={"Seller"}
      />
      <div>
        Payment Management
        {/* Summary of earnings and payouts.
	•	Withdrawal options (e.g., mobile money, bank transfer).
	•	Transaction history for tracking payments and fees. */}
      </div>
    </Layout>
  );
}

export default page;
