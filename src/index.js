import React from "react"
import ReactDOM from "react-dom"
// this root component of <Router /> gets imported from the React Router package
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from "./components/Kennel.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Kennel />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)