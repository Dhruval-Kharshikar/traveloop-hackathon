// src/pages/LandingPage.jsx
import Navbar from "../components/Navbar"
import RegionCard from "../components/RegionCard"
import TripCard from "../components/TripCard"
import { useNavigate } from "react-router-dom"

import {
  FaSearch,
  FaPlus,
} from "react-icons/fa"

import { FiSliders } from "react-icons/fi"

function LandingPage() {
    const navigate = useNavigate()

  const regions = [
    {
      title: "Santorini",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Bali",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Kyoto",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Swiss Alps",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const trips = [
    {
      title: "Kyoto Autumn Loop",
      days: "8 Days",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Santorini Escape",
      days: "6 Days",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Swiss Nature",
      days: "10 Days",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
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

          {/* HERO SECTION */}
          <section className="
            relative
            h-[300px]
            sm:h-[400px]
            lg:h-[500px]
            rounded-[15px]
            overflow-hidden
          ">

            {/* BACKGROUND IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2200&auto=format&fit=crop"
              alt="banner"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            {/* OVERLAY */}
            <div className="
              absolute
              inset-0
              bg-black/40
            "></div>

            {/* CONTENT */}
            <div className="
              relative
              z-10
              h-full
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-6
            ">

              <p className="
                uppercase
                tracking-[5px]
                text-white/70
                text-xs
                sm:text-sm
                mb-5
              ">
                Premium Travel Experience
              </p>

              <h1 className="
                text-white
                text-4xl
                sm:text-6xl
                lg:text-7xl
                font-semibold
                leading-tight
                max-w-5xl
              ">
                Discover Beautiful
                <br />
                Places Around
                <br />
                The World.
              </h1>

            </div>
          </section>

          {/* SEARCH BAR */}
          <div className="
            flex
            flex-col
            lg:flex-row
            gap-4
            mt-6
          ">

            {/* SEARCH */}
            <div className="
              flex-1
              flex
              items-center
              gap-4
              h-14
              px-5
              bg-[#f7f7f5]
              rounded-[15px]
              border
              border-[#ececec]
            ">

              <FaSearch className="text-gray-400" />

              <input
                type="text"
                placeholder="Search destinations, cities..."
                className="
                  flex-1
                  bg-transparent
                  outline-none
                "
              />

            </div>

            {/* FILTERS */}
            <div className="flex gap-3 flex-wrap">

              <button className="
                h-14
                px-6
                rounded-[15px]
                bg-[#f7f7f5]
                border
                border-[#ececec]
                hover:bg-[#efefef]
                transition-all
              ">
                Group By
              </button>

              <button className="
                h-14
                px-6
                rounded-[15px]
                bg-[#f7f7f5]
                border
                border-[#ececec]
                hover:bg-[#efefef]
                transition-all
                flex
                items-center
                gap-3
              ">

                <FiSliders />

                Filter

              </button>

              <button className="
                h-14
                px-6
                rounded-[15px]
                bg-[#f7f7f5]
                border
                border-[#ececec]
                hover:bg-[#efefef]
                transition-all
              ">
                Sort By
              </button>

            </div>
          </div>

          {/* TOP REGIONS */}
          <section className="mt-14">

            {/* TITLE */}
            <div className="
              flex
              items-center
              justify-between
              mb-7
            ">

              <h2 className="
                text-3xl
                sm:text-4xl
                font-semibold
                text-[#111]
              ">
                Top Regional Selections
              </h2>

            </div>

            {/* GRID */}
            <div className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-5
            ">

              {regions.map((region, index) => (

                <RegionCard
                  key={index}
                  image={region.image}
                  title={region.title}
                />

              ))}

            </div>
          </section>

          {/* PREVIOUS TRIPS */}
          <section className="mt-16">

            {/* TOP */}
            <div className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-5
              mb-7
            ">

              <h2 className="
                text-3xl
                sm:text-4xl
                font-semibold
                text-[#111]
              ">
                Previous Trips
              </h2>

              {/* BUTTON */}
             <button
                onClick={() => navigate("/create-trip")}
                className="
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
                "
            >

                <FaPlus />
                Plan A Trip
            </button>

            </div>

            {/* GRID */}
            <div className="
              grid
              lg:grid-cols-3
              gap-6
            ">

              {trips.map((trip, index) => (

                <TripCard
                  key={index}
                  image={trip.image}
                  title={trip.title}
                  days={trip.days}
                />

              ))}

            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default LandingPage