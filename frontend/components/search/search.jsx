import React from 'react';
import FilterForm from './filter_form';
import BusinessIndex from './business_index';
import BusinessMap from '../business_map/business_map';

const Search = ({ businesses, category, updateFilter }) => (
  <div className="user-pane">
    <div className="upper-bar">
      <FilterForm category={category} updateFilter={updateFilter} />
    </div>
    <div className="main-content">
      <BusinessIndex businesses={businesses} />
      <div className="right-map">
        <div className="map-box">
          <BusinessMap businesses={businesses} updateFilter={updateFilter} singleBusiness={false} />
        </div>
      </div>
    </div>
  </div>
);

export default Search;
