import React from "react";
import "./../index.css"
import { HiPhotograph } from 'react-icons/all';
import { Link } from 'react-router-dom'

export default function Navbar() {
  const navElements = [
    {
      tabName: "Home",
      path: '/'
    },
    {
      tabName: "About Us",
      path: '/aboutus'
    },
    {
      tabName: "Services",
      path: '/services'
    },
    {
      tabName: "Contact",
      path: '/contact'
    },
    {
      tabName: "My Profile",
      path: '/user'
    },
  ]
  return (
    <div className="flex justify-between items-center ml-5">
      <div><HiPhotograph className="h-6 w-6" /></div>
      <div className="flex items-center justify-around mr-5">
        <ul className="flex gap-8 p-4 justify-end mr-5">{navElements.map((element) => <li className="text-blue-500" key={element.tabName}><Link to={element.path}>{element.tabName}</Link></li>)}</ul>
        <HiPhotograph className="h-10 w-10" />
      </div>
    </div>

  );
}
