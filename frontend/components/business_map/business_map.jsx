import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    let mapOptions;
    if(this.props.singleBusiness) {
      mapOptions = {
        center: {lat: this.props.business.lat, lng: this.props.business.lng},
        zoom: 14
      };
    } else {
      mapOptions = {
        center: {lat: 40.748493, lng: -73.985950},
        zoom: 12
      };
    }
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
    if(this.props.match.path == "/search"){
      this.props.history.push(`businesses/${business.id}`);
    } else {
      window.open(`https://www.google.com/maps/place/${business.address}`);
    }
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
