import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
//   upon page load, call getAnimals once to populate animals array
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
  }, [])
  const history = useHistory()


  return (
    <>
        <h2>Animals</h2>
		<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
        <div className="animals">
        {
			animals.map(animal => {
				return <AnimalCard key={animal.id} animal={animal} />
			})
        }
        </div>
    </>
)
}
// re the return statement, the key and animal arguments look like HTML attributes 
// here, but they actually become properties on an object that gets passed as an argument.
/* equivalent vanilla js:
const properties = {
    key: animal.id,
    animal: animal

    Animal(properties)
} */

