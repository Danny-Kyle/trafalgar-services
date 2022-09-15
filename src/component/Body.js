import React from 'react'
import VirtualHealthcare from './virtualHealthcare'
import OurServices from './OurServices'
import LeadingHealthcareProviders from './LeadingHealthcareProviders'
import CustomerFeedback from './CustomerFeedback'
import MobileApp from './MobileApp'
import Articles from './Articles'

const Body = () => {
  return (
    <div>
        <VirtualHealthcare />
        <OurServices />
        <LeadingHealthcareProviders />
        {/* <MobileApp /> */}
        <CustomerFeedback />
        {/* <Articles /> */}
    </div>
  )
}

export default Body