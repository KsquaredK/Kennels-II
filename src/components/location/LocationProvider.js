import React, { useState, createContext} from "react"

// The context is imported and used by individual components that need data
export const LocationContext = createContext()

// This component establishes what data can be used.
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations/?_embed=employees&_embed=animals")
        .then(res => res.json())
        .then(setLocations)
    }

    const getLocationById = (locationId) => {
        return fetch(`http://localhost:8088/locations/${locationId}?_embed=employees&_embed=animals`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }
    

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    const updateLocation = location => {
        return fetch(`https://localhost:8088.com/locations/${location.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(location)
        })
          .then(getLocations)
      }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocation, getLocationById, updateLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}