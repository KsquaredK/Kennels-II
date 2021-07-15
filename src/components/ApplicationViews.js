import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationDetail} from "./location/LocationDetail"
import { LocationForm} from "./location/LocationForm"
import { LocationList} from "./location/LocationList"
import { LocationProvider} from "./location/LocationProvider"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerDetail } from "./customer/CustomerDetail"
import { CustomerForm } from "./customer/CustomerForm"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"


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
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                        <Route path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>


            {/* Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <EmployeeProvider>
                    <CustomerProvider>
                        <Route exact path="/locations">
                            <LocationList />
                        </Route>
                        <Route path="/locations/create">
                            <LocationForm />
                        </Route>
                        <Route path="/locations/edit/:locationId(\d+)">
                            <LocationForm />
                        </Route>
                        <Route path="/locations/detail/:locationId(\d+)">
                            <LocationDetail />
                        </Route>
                    </CustomerProvider>
                </EmployeeProvider>
            </LocationProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route path="/employees/detail/:employeeId(\d+)">
                        <EmployeeDetail />
                    </Route>
                    <Route path="/employees/create">
                        <EmployeeForm />
                    </Route>
                    <Route path="/employees/edit/:employeeId(\d+)">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            {/* Render the customer list when http://localhost:3000/customers */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/customers">
                            <CustomerList />
                        </Route>
                        <Route path="/customers/detail/:customerId(\d+)">
                            <CustomerDetail />  {/* */}
                        </Route>
                        <Route path="/customers/create">
                            <CustomerForm />   {/* */}
                        </Route>
                        <Route path="/customers/edit/:customerId(\d+)">
                            <CustomerForm />   {/* */}
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )

    /*  
   
    */

}


