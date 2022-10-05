import { useState , useEffect } from 'react'
import  axios  from "axios";


function LocationCard({name, type, dimension, residents}) {

    const [characters, setCharacters] = useState()

    

    return(
        <div className="location_card">
            <div className="title">
                <div className="top">
                    <h1>Location: {name}</h1>
                </div>
                <div className="bottom">
                    <h3>Type: {type}</h3>
                    <h3>Dimension: {dimension}</h3>
                </div>
            </div>
           
        </div>
    )
}

export default LocationCard