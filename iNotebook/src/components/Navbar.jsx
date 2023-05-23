import React from "react";
import "./../index.css"

export default function Navbar() {
    const navElements = [
        {tabName: "Home"},
        {tabName: "About Us"},
        {tabName: "Services"},
        {tabName: "Contact"},
        {tabName: "My Profile"},
      ]
    return (
      <div className="flex justify-between items-center ml-5">
        <div>logo</div>
        <div className="flex items-center justify-around mr-5">
        <ul className="flex gap-8 p-4 justify-end mr-5">{navElements.map((element)=> <li className="text-blue-500">{element.tabName}</li>)}</ul>
        <div>Profile logo</div>
        </div>
      </div>

    );
}
