import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
  }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <h4 className="location__employees">Employees</h4>
      <div className="location__employee__list">{location.employees?.map(employee =>
       <div className="location__employee">{employee.name} </div> )}
       </div>
      <h4 className="location__animals">Current Residents</h4>
      <div className="location__animal__list">{location.animals?.map(animal =>
       <div className="location__animal">{animal.name} </div> )}
       </div>
       
    </section>
  )
}

/*// re "?" in the render return statement:
// Immediate properties of an empty object will not break, however nested properties 
// of an empty object will. Use Optional chaining (?.) operator to prevent nested values 
// from breaking the code. Try with and without the ?.*/



/* <div className="location__info">
                    <div>{location.address}</div></div>
                    
                    
                    
                    <div className="location__address">{location.address}</div>
                {location.employee.map(employee => (
            <div className="location__employee">Our staff at 
                {location.name}: {employee.name}</div>))}
            <div >{location.employee.name}</div> */
            /* <div className="location__animal">Current Residents: {location.customer?.name}</div> */