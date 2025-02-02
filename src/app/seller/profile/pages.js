import SideNavSeller from '@/components/SideNavSeller'
import React from 'react'

function pages() {
  return (
    <>
    <SideNavSeller/>
    <div className='lg:ml-64 md:ml-64'>profile & Settings
        {/* todo
        Store Details: Add or update store name, location, and contact details. Upload store logo or banner.
        •	Policies: Add return, refund, and shipping policies.
	•	Account Settings: Update personal or store profile information.
  Help and Support
	•	Access to FAQs and guides for troubleshooting.
	•	Contact support for technical or operational issues.
	•	Live chat or ticketing system for resolving disputes. */}
    </div>
  </>
  )
}

export default pages