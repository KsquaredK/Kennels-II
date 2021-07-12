import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { EmployeeCard } from "./employee/EmployeeCard"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerCard } from "./customer/CustomerCard"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationCard} from "./location/LocationCard"
import { LocationProvider } from "./location/LocationProvider"


// a Controller Component
export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>

            <CustomerProvider>
                <LocationProvider>
                    <Route exact path="/animals/create">
                        <AnimalForm />
                    </Route>
                </LocationProvider>
            </CustomerProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                    <Route path="/employees">
                        <EmployeeCard />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>




            {/* Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the employee list when http://localhost:3000/employees */}
           

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomerCard />
            </Route>
        </>
    )
}
