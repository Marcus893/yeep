import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};

class BusinessMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if(this.props.singleBusiness) {
      this.props.fetchBusiness(this.props.businessId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentDidUpdate() {
    if(this.props.singleBusiness) {
      const targetBusinessKey = Object.keys(this.props.businesses)[0];
      const targetBusiness = this.props.businesses[targetBusinessKey];
      this.MarkerManager.updateMarkers([targetBusiness]);
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(business) {
    this.props.history.push(`businesses/${business.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'businesses/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div className="map-container" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(BusinessMap);
