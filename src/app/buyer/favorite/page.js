"use client";
import SideNav from "@/components/SideNav";
import FavList from "@/components/FavList";



function Page() {
  

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation */}
      <SideNav
        option1={"Marketplace"}
        option2={"Purchase History"}
        option3={"Cart"}
        userType={"Buyer"}
      />

      {/* Main Content */}
      <FavList/>
    </div>
  );
}

export default Page;
