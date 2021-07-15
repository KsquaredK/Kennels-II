import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"
import { useParams } from "react-router-dom"

export const CustomerDetail = () => {
  const { getCustomerById } = useContext(CustomerContext)

  const [customer, setCustomer] = useState({})

    const {customerId} = useParams();

    useEffect(() => {
    console.log("useEffect", customerId)
    getCustomerById(customerId)
    .then((response) => {
      setCustomer(response)
    })
  }, [])

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <h4 className="customer__animal">{customer.animal}</h4>
      <div className="customer__employee__list">{customer.animals?.map(animal =>
       <div className="customer__animal">{animal.name} </div> )}
       </div>
             <h4 className="customer__locations">Current Location</h4>
      <div className="customer__location__list">{customer.locations?.map(location =>
       <div className="customer__location">{location.name}</div> )}
       </div>

    </section>
  )
}