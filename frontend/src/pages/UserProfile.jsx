// src/pages/UserProfile.jsx

import Navbar from "../components/Navbar"
import ProfileTripCard from "../components/ProfileTripCard"

import {
  FaEdit,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"

function UserProfile() {

  const preplannedTrips = [
    {
      title: "Kyoto Escape",
      location: "Japan",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Swiss Nature",
      location: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Bali Summer",
      location: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const previousTrips = [
    {
      title: "Santorini Tour",
      location: "Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Tokyo Lights",
      location: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "African Safari",
      location: "Africa",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  return (

    <div className="min-h-screen bg-[#f5f5f3] p-3 sm:p-5">

      {/* MAIN CONTAINER */}
      <div className="
        min-h-screen
        bg-white
        rounded-[15px]
        overflow-hidden
        border
        border-[#ececec]
      ">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="p-5 sm:p-8 lg:p-10">

          {/* PROFILE SECTION */}
          <section className="
            bg-[#f7f7f5]
            border
            border-[#ececec]
            rounded-[15px]
            p-5
            sm:p-8
            mb-16
          ">

            <div className="
              flex
              flex-col
              lg:flex-row
              gap-8
              lg:items-center
            ">

              {/* PROFILE IMAGE */}
              <div className="
                flex
                justify-center
                lg:justify-start
              ">

                <div className="
                  w-[180px]
                  h-[180px]
                  rounded-full
                  overflow-hidden
                  border-[6px]
                  border-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                ">

                  <img
                    src="https://i.pravatar.cc/500?img=12"
                    alt="profile"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>

              </div>

              {/* USER INFO */}
              <div className="flex-1">

                {/* TOP */}
                <div className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-5
                ">

                  <div>

                    <p className="
                      uppercase
                      tracking-[5px]
                      text-gray-400
                      text-sm
                      mb-3
                    ">
                      Traveler Profile
                    </p>

                    <h1 className="
                      text-4xl
                      sm:text-5xl
                      font-semibold
                      text-[#111]
                    ">
                      Alex Volkov
                    </h1>

                  </div>

                  {/* EDIT BUTTON */}
                  <button className="
                    h-14
                    px-7
                    rounded-[15px]
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                    gap-3
                    hover:bg-[#222]
                    transition-all
                  ">

                    <FaEdit />

                    Edit Profile

                  </button>

                </div>

                {/* BIO */}
                <p className="
                  mt-6
                  text-gray-500
                  leading-relaxed
                  max-w-3xl
                ">
                  Passionate traveler exploring luxury destinations,
                  curated adventures, and unforgettable travel experiences
                  around the world.
                </p>

                {/* DETAILS */}
                <div className="
                  grid
                  sm:grid-cols-2
                  lg:grid-cols-3
                  gap-5
                  mt-8
                ">

                  {/* EMAIL */}
                  <div className="
                    h-14
                    bg-white
                    border
                    border-[#ececec]
                    rounded-[15px]
                    px-5
                    flex
                    items-center
                    gap-4
                  ">

                    <FaEnvelope className="text-gray-400" />

                    <span className="text-[#111]">
                      alex@example.com
                    </span>

                  </div>

                  {/* PHONE */}
                  <div className="
                    h-14
                    bg-white
                    border
                    border-[#ececec]
                    rounded-[15px]
                    px-5
                    flex
                    items-center
                    gap-4
                  ">

                    <FaPhoneAlt className="text-gray-400" />

                    <span className="text-[#111]">
                      +91 9876543210
                    </span>

                  </div>

                  {/* LOCATION */}
                  <div className="
                    h-14
                    bg-white
                    border
                    border-[#ececec]
                    rounded-[15px]
                    px-5
                    flex
                    items-center
                    gap-4
                  ">

                    <FaMapMarkerAlt className="text-gray-400" />

                    <span className="text-[#111]">
                      Russia
                    </span>

                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* PREPLANNED TRIPS */}
          <section className="mb-16">

            {/* TITLE */}
            <div className="mb-8">

              <p className="
                uppercase
                tracking-[5px]
                text-gray-400
                text-sm
                mb-4
              ">
                Future Journeys
              </p>

              <h2 className="
                text-4xl
                sm:text-5xl
                font-semibold
                text-[#111]
              ">
                Preplanned Trips
              </h2>

            </div>

            {/* GRID */}
            <div className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            ">

              {preplannedTrips.map((trip, index) => (

                <ProfileTripCard
                  key={index}
                  image={trip.image}
                  title={trip.title}
                  location={trip.location}
                />

              ))}

            </div>
          </section>

          {/* PREVIOUS TRIPS */}
          <section>

            {/* TITLE */}
            <div className="mb-8">

              <p className="
                uppercase
                tracking-[5px]
                text-gray-400
                text-sm
                mb-4
              ">
                Memories
              </p>

              <h2 className="
                text-4xl
                sm:text-5xl
                font-semibold
                text-[#111]
              ">
                Previous Trips
              </h2>

            </div>

            {/* GRID */}
            <div className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            ">

              {previousTrips.map((trip, index) => (

                <ProfileTripCard
                  key={index}
                  image={trip.image}
                  title={trip.title}
                  location={trip.location}
                />

              ))}

            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default UserProfile