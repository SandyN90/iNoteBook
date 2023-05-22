import React from "react";
import "./../index.css"

export default function Navbar() {
    const navElements = [
        {tabName: "Home"},
        {tabName: "About Us"},
        {tabName: "Services"},
        {tabName: "Contact"},
      ]
    return (
       <ul>{navElements.map((element)=> <li className="text-red-200">{element.tabName}</li>)}</ul>

    );
}
