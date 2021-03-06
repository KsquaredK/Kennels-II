import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

   // adding an _expand for each animal's customer, like we just did for getting a single animal
//    In other situations ( like in the server side portion of NSS, or on the job ) you might not 
//    have a library like json-server, and will use vanilla js instead.
const getAnimals = () => {
    return fetch("http://localhost:8088/animals?_expand=location&_expand=customer")
    .then(res => res.json())
    .then(setAnimals)
  }


    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }
    
    const updateAnimal = animal => {
        return fetch(`https://localhost:8088.com/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }

      const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
          method: "DELETE"
        })
          .then(getAnimals)
    }
    

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById, updateAnimal, releaseAnimal
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}
