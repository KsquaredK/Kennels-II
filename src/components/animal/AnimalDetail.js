import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
  const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

	const [animal, setAnimal] = useState({})

	const {animalId} = useParams()
  const history = useHistory()

  const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        history.push("/animals")
      })
  }

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
  }, [])

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={handleRelease}>Release Animal</button>
    </section>
  )
}

// re "?" in the render return statement:
// Immediate properties of an empty object will not break, however nested properties 
// of an empty object will. Use Optional chaining (?.) operator to prevent nested values 
// from breaking the code. Try with and without the ?.

