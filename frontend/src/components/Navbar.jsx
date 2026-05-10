// src/components/Navbar.jsx

import { NavLink, Link } from "react-router-dom"

import {
  FaCompass,
} from "react-icons/fa"

function Navbar() {

  const navLinkStyle = ({ isActive }) =>

    `
      relative
      text-[15px]
      transition-all
      duration-300

      ${
        isActive
          ? "text-black font-semibold"
          : "text-gray-500 hover:text-black"
      }
    `

  return (

    <nav className="
      w-full
      h-[85px]
      bg-white
      border-b
      border-[#ececec]
      px-5
      sm:px-8
      lg:px-12
      flex
      items-center
      justify-between
      sticky
      top-0
      z-50
    ">

      {/* LEFT */}
      <div className="flex items-center gap-14">

        {/* LOGO */}
        <Link
          to="/home"
          className="
            flex
            items-center
            gap-3
          "
        >

          <div className="
            w-11
            h-11
            rounded-[12px]
            bg-black
            text-white
            flex
            items-center
            justify-center
          ">

            <FaCompass size={18} />

          </div>

          <div>

            <h1 className="
              text-2xl
              font-semibold
              tracking-tight
              text-[#111]
            ">
              Traveloop
            </h1>

          </div>

        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="
          hidden
          lg:flex
          items-center
          gap-8
        ">

          {/* HOME */}
          <NavLink
            to="/home"
            className={navLinkStyle}
          >
            Home
          </NavLink>

          {/* ACTIVITIES */}
          <NavLink
            to="/activities"
            className={navLinkStyle}
          >
            Activities
          </NavLink>

          {/* CREATE TRIP */}
          <NavLink
            to="/create-trip"
            className={navLinkStyle}
          >
            Create Trip
          </NavLink>

          {/* MY TRIPS */}
          <NavLink
            to="/my-trips"
            className={navLinkStyle}
          >
            My Trips
          </NavLink>

          {/* PROFILE */}
          <NavLink
            to="/profile"
            className={navLinkStyle}
          >
            Profile
          </NavLink>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* CREATE BUTTON */}
        <Link to="/create-trip">

          <button className="
            hidden
            sm:flex
            h-12
            px-6
            rounded-[12px]
            bg-black
            text-white
            items-center
            justify-center
            hover:bg-[#222]
            transition-all
          ">
            Plan Trip
          </button>

        </Link>

        {/* PROFILE IMAGE */}
        <Link to="/profile">

          <div className="
            w-12
            h-12
            rounded-full
            overflow-hidden
            border
            border-[#ececec]
            cursor-pointer
            hover:scale-105
            transition-all
          ">

            <img
              src="https://i.pravatar.cc/300?img=12"
              alt="profile"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </Link>

      </div>

    </nav>
  )
}

export default Navbar