import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
// import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)
  // const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
//   upon page load, call getEmployees once to populate Employees array
  useEffect(() => {
    console.log("EmployeeList: initial render before data - getEmployees")
    getEmployees()
    // .then(getLocations)
  }, [])


return (
    <>
      <h2>Employees</h2>
      <button onClick={() => {history.push("/employees/create")}}>
          New Employee
      </button>

      <div className="employees">
      {
        employees.map(employee => {
            return <EmployeeCard key={employee.id}
            employee={employee}/>
    })
            }
      </div>
    </>
)}

/*=========== CONTEXT VS. EXPANDED FETCH ============
On the commented-out lines above is the code necessary to extract the same data via the 
Context hook. Live code uses an expanded URL in the fetch GET request to access the same resources.*/
