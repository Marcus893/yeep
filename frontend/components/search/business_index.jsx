import React from 'react';
import BusinessIndexItem from './business_index_item';

const BusinessIndex = ({ businesses }) => (
  <div className="business-list">

    {businesses.map(business => (
      <BusinessIndexItem business={business} key={business.id} />
    ))}
  </div>
);

export default BusinessIndex;
