import Layout from "@/components/Layout";
import UserProfile from "@/components/UserProfile";
import React from "react";

function pages() {
  return (
   <Layout>
    <UserProfile/>
    {/* todo
     
        •	Policies: Add return, refund, and shipping policies.
        •	Account Settings: Update personal  information.
        Help and Support
        •	Access to FAQs and guides for troubleshooting.
        •	Contact support for technical or operational issues.
        •	Live chat or ticketing system for resolving disputes. */}
   </Layout>
  );
}

export default pages;