import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Characters({charactersUrl}){

    const [character, setCharacter] = useState()
    useEffect(()=>{
        axios.get(charactersUrl)
            .then(res => setCharacter(res.data))
            .catch(error => console.log(error))
    },[])

    console.log(character)

   return(
    
        <div className="characters_card">
            <div className="name">
                <h1>{character?.name}</h1>
            </div>
            <div className="image">
                <img src={character?.image} alt={character?.name} />
            </div>
            <div className="species">
                <h2>Species: {character?.species}</h2>
            </div>
            <div className="status">
                <h2>Status: {character?.status}</h2>
            </div>
        </div>
    
   ) 
}

export default Characters