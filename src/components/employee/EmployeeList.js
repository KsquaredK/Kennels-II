import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
//   upon page load, call getEmployees once to populate Employees array
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])
  const history = useHistory()


  return (
    <>
        <h2>Employees</h2>
		<button onClick={() => {history.push("/employees/create")}}>
            New Employee
        </button>
        <div className="employees">
        {
			employees.map(employee => {
				return <EmployeeCard key={employee.id} employee={employee} />
			})
        }
        </div>
    </>
)
}
// re the return statement, the key and Employee arguments look like HTML attributes 
// here, but they actually become properties on an object that gets passed as an argument.
/* equivalent vanilla js:
const properties = {
    key: Employee.id,
    Employee: Employee

    Employee(properties)
} */

