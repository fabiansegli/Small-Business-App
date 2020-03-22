import React, {useState} from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from 'react-router-dom'


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
            <Paper className="restaurant-paper">
                <h2>{restaurant.name}</h2>
                {
                    Object.keys(restaurant).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${restaurant[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
        <br />
        <Container style={{ height: "400px", width: "550px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
                center={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                <LocationOnIcon lat={restaurant.latitude} lng={restaurant.longitude} />
            </GoogleMapReact>
            <Link to='/'>
                <button>Back</button>
            </Link>
            <br />
            </Container>
            </Container>
        :
            <div>Sorry, more details coming soon!</div>
        }
    </>
  
    )
}

export default Restaurant;