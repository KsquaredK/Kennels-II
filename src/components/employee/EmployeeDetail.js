import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
  }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <h4 className="employee__employees">Employees</h4>
      <div className="employee__employee__list">{employee.employees?.map(employee =>
       <div className="employee__employee">{employee.name} </div> )}
       </div>
      <h4 className="employee__animals">Current Residents</h4>
      <div className="employee__animal__list">{employee.animals?.map(animal =>
       <div className="employee__animal">{animal.name} </div> )}
       </div>
       
    </section>
  )
}