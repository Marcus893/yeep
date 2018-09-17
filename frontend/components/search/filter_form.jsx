import React from 'react';


class FilterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: props.category,
    };
  }

  handleChange(filter, updateFilter) {
    return e => (
      updateFilter(filter, e.currentTarget.value)
    );
  }

 render() {
    return (<div>
      <span className="filter">Filter results:</span>
      <br/>
      <label>Categories</label>
      <input type="text" value={this.props.category} onChange={this.handleChange('category', this.props.updateFilter)} />
      <br/>

     </div>);
  }
}

export default FilterForm;
