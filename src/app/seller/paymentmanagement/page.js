import Layout from "@/components/Layout";
import SideNav from "@/components/SideNav";
import React from "react";

function page() {
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
