import React, {useState} from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";


const Restaurant = (props) => {
    
    const id = props.match.params.id;

    let restaurant = props.restaurants.find(r => r.id === id);

    if(!restaurant){
        restaurant = {
            latitude: 30.2672,
            
            longitude: -97.7431
        };
    }
    
    const [center] = useState({ lat: parseFloat(restaurant.latitude), lng: parseFloat(restaurant.longitude)});
    

    const [zoom] = useState(14);

    return (
        <>
        {restaurant.id ? 
        <Container>
        <Container maxWidth="sm" className="restaurant-container">
                <h2>{restaurant.name}</h2>
                <h3>{restaurant.address}</h3>
                <p>{restaurant.hour}</p>
                <p>{restaurant.description}</p>
                <img style={{ height: "400px", width: "550px" }} src={restaurant.featured_image}></img>
        </Container>
        <br />
        <Container style={{ height: "400px", width: "550px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDwdmXtYRsz1v2GXB47rJ7sHJZ__lmiMto' }}
                center={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <LocationOnIcon lat={restaurant.latitude} lng={restaurant.longitude} />
            </GoogleMapReact>
            <br />
            </Container>
            </Container>
        :
            <div>More details coming soon!</div>
        }
    </>
  
    )
}

export default Restaurant;