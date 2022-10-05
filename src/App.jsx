import { useState , useEffect } from 'react'
import LocationCard from "./components/LocationCard"
import './App.css'
import  axios  from "axios"
import Characters from "./components/Characters"


function App() {
  const [randlocation, setRandlocation] = useState(Math.floor(Math.random()*125)+1)
  const [textSearch, setTextSearch] = useState("")
  const [location, setLocation] = useState(randlocation)
 

  useEffect(()=>{
      let URL = ``
      if(textSearch){
        URL = `https://rickandmortyapi.com/api/location/${textSearch}`
        
      }else{URL = `https://rickandmortyapi.com/api/location/${randlocation}`}
      
      console.log(URL)

     
      axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(error => console.log(error))
      
  },[textSearch])
  const searchById = (event) => {
    event.preventDefault()
    setTextSearch(event.target.search.value)
  }

  return (
    <div className="App">

     <div className="main">
          <h1>Rick and Morty Card API </h1>

            <div className="search">
            <form onSubmit={searchById}>
              <input id='search' type="text" />
              <button>Search</button>
            </form>
            </div>

          <LocationCard
            name = {location?.name}
            type = {location?.type}
            dimension = {location?.dimension}
        
          />
          <div className="characters">
          {location?.residents?.map(charactersUrl => 
            <Characters
              key = {charactersUrl}
              charactersUrl = {charactersUrl}
            />
            )}
          </div>

     </div>
      
    </div>
  )
}

export default App
