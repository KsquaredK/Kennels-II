import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
//   upon page load, call getLocations once to populate Locations array
  useEffect(() => {
    console.log("LocationList: initial render before data - getLocations")
    getLocations()
  }, [])


  return (
    <> 
    <h2>Locations</h2>
    <button onClick={() => {history.push("/locations/create")}}>
          New Location
      </button>
      
      <div className="locations">
      {
        locations.map(location => {
            return <LocationCard key={location.id}
            location={location}/>
        })
      }
      </div>
    </>
)}
