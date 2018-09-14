import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({category, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>
    <label>Categories</label>
    <input type="text" value={category} onChange={handleChange('category', updateFilter)} />
    <br/>

  </div>
);

export default FilterForm;
