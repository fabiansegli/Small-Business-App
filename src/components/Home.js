import React from 'react';
import { Card, CardContent, CardActions, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = ( props ) => {
    return (
        <div className="card-container">
            {props.restaurants.map((r, idx) => (
                <Card key={r.id} className="card">
                    <CardContent className="text-gray">
                        <span style={{ color: 'black' }}><b>{r.name}</b></span>
                        <ul>
                            <li>Address: {r["address"]}</li>
                            <li>Rating: {r["rating_text"]}</li>
                            <li>Cusine: {r["cuisines"]}</li>
                            <li>Cost for 2: {r["average_cost_for_two"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ backgroundColor: 'black', color: 'white' }}>
                        <Link to={`/restaurant/${r.id}`}>See More Details </Link>
                        <p>or</p>
                        {props.user.loggedIn ? <button onClick={() => props.removeRestaurant(r.id)}>Delete</button> : <Link to='/login'>Log in to edit</Link>}
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home