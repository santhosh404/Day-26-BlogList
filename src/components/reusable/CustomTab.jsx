import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CustomTab({ allLength,fullStackLength, dataScienceLength, cyberSecurityLength, uiUxLength }) {

    return (
        <>
            <div className='flex gap-2 justify-center flex-wrap md:flex-nowrap'>
                <NavLink style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive && "rgb(198, 246, 213)",
                        color: isActive && "#000",
                        padding: "10px",
                        borderRadius: "30px"
                    };
                }} to={"/"}>All ({allLength})</NavLink>
                <NavLink style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive && "rgb(198, 246, 213)",
                        color: isActive && "#000",
                        padding: "10px",
                        borderRadius: "30px"
                    };
                }} to={"/full-stack-development"}>Full Stack Development ({fullStackLength})</NavLink>
                <NavLink style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive && "rgb(198, 246, 213)",
                        color: isActive && "#000",
                        padding: "10px",
                        borderRadius: "30px"
                    };
                }} to={"/data-science"}>Data Science ({dataScienceLength})</NavLink>
                <NavLink style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive && "rgb(198, 246, 213)",
                        color: isActive && "#000",
                        padding: "10px",
                        borderRadius: "30px"
                    };
                }} to={"/cyber-security"}>Cyber Security ({cyberSecurityLength})</NavLink>
                <NavLink style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                        backgroundColor: isActive && "rgb(198, 246, 213)",
                        color: isActive && "#000",
                        padding: "10px",
                        borderRadius: "30px"
                    };
                }} to={"/ui-ux"}>UI / UX ({uiUxLength})</NavLink>
            </div>
        </>
    )
}
