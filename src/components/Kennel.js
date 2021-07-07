import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

// a container component
export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)
