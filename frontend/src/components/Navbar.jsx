// src/components/Navbar.jsx

import { FaPlaneDeparture } from "react-icons/fa"

function Navbar() {

  return (

    <nav className="
      h-20
      border-b
      border-[#e8e8e8]
      flex
      items-center
      justify-between
      px-5
      sm:px-8
      lg:px-10
      bg-white
    ">

      {/* LOGO */}
      <div className="flex items-center gap-3">

        <div className="
          w-11
          h-11
          rounded-[15px]
          bg-black
          text-white
          flex
          items-center
          justify-center
        ">
          <FaPlaneDeparture size={17} />
        </div>

        <h1 className="
          text-2xl
          font-semibold
          tracking-wide
          text-[#111]
        ">
          TRAVELOOP
        </h1>

      </div>

      {/* PROFILE */}
      <div className="
        w-11
        h-11
        rounded-full
        overflow-hidden
      ">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="w-full h-full object-cover"
        />

      </div>

    </nav>
  )
}

export default Navbar