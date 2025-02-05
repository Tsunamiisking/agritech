import SideNav from "@/components/SideNav";
import React from "react";

function pages() {
  return (
    <>
      <SideNav />
      <div className="lg:ml-64 md:ml-64">
        profile & Settings
        {/* todo
     
        •	Policies: Add return, refund, and shipping policies.
        •	Account Settings: Update personal  information.
        Help and Support
        •	Access to FAQs and guides for troubleshooting.
        •	Contact support for technical or operational issues.
        •	Live chat or ticketing system for resolving disputes. */}
      </div>
    </>
  );
}

export default pages;
