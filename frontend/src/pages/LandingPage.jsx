import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import RegionCard from "../components/RegionCard"
import TripCard from "../components/TripCard"

import { useNavigate } from "react-router-dom"

import {
  FaSearch,
  FaPlus,
  FaMapMarkedAlt,
} from "react-icons/fa"

import { FiSliders } from "react-icons/fi"

import toast from "react-hot-toast"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function LandingPage() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")

  const [user, setUser] = useState(null)

  const [regions] = useState([
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
  ])

  const [trips] = useState([
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
  ])

  // FAKE BACKEND FETCH
  useEffect(() => {

    setTimeout(() => {

      const storedUser =
        JSON.parse(
          localStorage.getItem(
            "traveloop_user"
          )
        )

      setUser(storedUser)

      setLoading(false)

    }, 1500)

  }, [])

  // SEARCH
  const handleSearch = () => {

    if (!search) {

      toast.error(
        "Please enter destination"
      )

      return
    }

    toast.success(
      `Searching trips for "${search}"`
    )
  }

  return (

    <div className="
      min-h-screen
      bg-[#f5f5f3]
      p-3
      sm:p-5
    ">

      {/* MAIN */}
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

        {/* CONTENT */}
        <div className="
          p-5
          sm:p-8
          lg:p-10
        ">

          {/* HERO */}
          <section className="
            relative
            h-[350px]
            sm:h-[450px]
            lg:h-[550px]
            rounded-[15px]
            overflow-hidden
          ">

            {/* IMAGE */}
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
              bg-black/50
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

                

                  <>
                    Welcome Back,
                    <br />
                    Traveler
                  </>

              </h1>

              <p className="
                text-white/80
                text-lg
                mt-6
                max-w-2xl
              ">
                Discover premium experiences,
                curated destinations, and
                unforgettable journeys around
                the world.
              </p>

            </div>

          </section>

          {/* SEARCH */}
          <div className="
            flex
            flex-col
            lg:flex-row
            gap-4
            mt-6
          ">

            {/* SEARCH BAR */}
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
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  flex-1
                  bg-transparent
                  outline-none
                "
              />

            </div>

            {/* SEARCH BUTTON */}
            <button
              onClick={handleSearch}
              className="
                h-14
                px-8
                rounded-[15px]
                bg-black
                text-white
                hover:bg-[#222]
                transition-all
              "
            >
              Search
            </button>

            {/* FILTER */}
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

          </div>

          {/* AI RECOMMENDATION */}
          <div className="
            mt-8
            bg-black
            text-white
            rounded-[15px]
            p-6
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
          ">

            <div className="
              flex
              items-start
              gap-4
            ">

              <div className="
                w-14
                h-14
                rounded-[12px]
                bg-white/10
                flex
                items-center
                justify-center
              ">

                <FaMapMarkedAlt size={20} />

              </div>

              <div>

                <p className="
                  uppercase
                  tracking-[4px]
                  text-white/50
                  text-xs
                  mb-2
                ">
                  AI Recommendation
                </p>

                <h3 className="
                  text-2xl
                  font-semibold
                ">
                  Kyoto Is Trending This Week
                </h3>

              </div>

            </div>

            <button
              onClick={() =>
                toast.success(
                  "AI itinerary generated"
                )
              }
              className="
                h-14
                px-7
                rounded-[15px]
                bg-white
                text-black
                hover:bg-[#efefef]
                transition-all
              "
            >
              Generate AI Trip
            </button>

          </div>

          {/* REGIONS */}
          <section className="mt-16">

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

              {loading ? (

                [...Array(4)].map((_, index) => (

                  <Skeleton
                    key={index}
                    height={220}
                    borderRadius={15}
                  />

                ))

              ) : (

                regions.map((region, index) => (

                  <RegionCard
                    key={index}
                    image={region.image}
                    title={region.title}
                  />

                ))

              )}

            </div>

          </section>

          {/* TRIPS */}
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
                onClick={() => {

                  toast.success(
                    "Opening Trip Planner"
                  )

                  setTimeout(() => {

                    navigate("/create-trip")

                  }, 800)
                }}
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

              {loading ? (

                [...Array(3)].map((_, index) => (

                  <Skeleton
                    key={index}
                    height={420}
                    borderRadius={15}
                  />

                ))

              ) : (

                trips.map((trip, index) => (

                  <TripCard
                    key={index}
                    image={trip.image}
                    title={trip.title}
                    days={trip.days}
                  />

                ))

              )}

            </div>

          </section>

        </div>

      </div>

    </div>
  )
}

export default LandingPage