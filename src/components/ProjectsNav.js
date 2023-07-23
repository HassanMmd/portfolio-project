import { Route, Routes, Link } from "react-router-dom";
import './ProjectNav.css';
import Games from "./Games";
import AllProjects from "./AllProjects";
import Flutter from "./Flutter";
import React from "react";

function ProjectsNav() {
    const [underLine1, setUnderLine1] = React.useState({
        textDecoration: "none"
    })
    const [underLine2, setUnderLine2] = React.useState({
        textDecoration: "none"
    })
    const [underLine3, setUnderLine3] = React.useState({
        textDecoration: "none"
    })
    function Checked1() {
        setUnderLine1({ textDecoration: "underline" })
        setUnderLine2({ textDecoration: "none" })
        setUnderLine3({ textDecoration: "none" })
    }
    function Checked2() {
        setUnderLine2({ textDecoration: "underline" })
        setUnderLine1({ textDecoration: "none" })
        setUnderLine3({ textDecoration: "none" })
    }
    function Checked3() {
        setUnderLine3({ textDecoration: "underline" })
        setUnderLine1({ textDecoration: "none" })
        setUnderLine2({ textDecoration: "none" })
    }
    return (
        <div>
            <div className="project-nav">
                <Link onClick={Checked1} style={underLine1} to="/" className="pro-nav-item">All</Link>
                <Link onClick={Checked2} style={underLine2} to="Games" className="pro-nav-item">Games</Link>
                <Link onClick={Checked3} style={underLine3} to="Flutter" className="pro-nav-item">Flutter</Link>
            </div>
            <Routes>
                <Route path="/" element={<AllProjects />}></Route>
                <Route path="/Games" element={<Games />}></Route>
                <Route path="/Flutter" element={<Flutter />}></Route>
            </Routes>
        </div>
    );
}

export default ProjectsNav;