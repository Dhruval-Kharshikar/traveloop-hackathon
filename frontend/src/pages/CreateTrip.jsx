import { useState } from "react"

import Navbar from "../components/Navbar"
import ActivityCard from "../components/ActivityCard"

import { useNavigate } from "react-router-dom"

import {
  FaPlaneDeparture,
  FaUsers,
  FaCalendarAlt,
  FaMagic,
} from "react-icons/fa"

import toast from "react-hot-toast"

import { ClipLoader } from "react-spinners"

function CreateTrip() {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [destination, setDestination] =
    useState("")

  const [travelers, setTravelers] =
    useState("")

  const [startDate, setStartDate] =
    useState("")

  const [endDate, setEndDate] =
    useState("")

  const [budget, setBudget] =
    useState("Luxury")

  const suggestions = [
    {
      title: "Temple Visit",
      location: "Kyoto",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Beach Escape",
      location: "Bali",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Mountain Adventure",
      location: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "City Lights",
      location: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Santorini Sunset",
      location: "Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Safari Journey",
      location: "Africa",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  // GENERATE TRIP
  const handleGenerateTrip = () => {

    // VALIDATIONS
    if (
      !destination ||
      !travelers ||
      !startDate ||
      !endDate
    ) {

      toast.error(
        "Please fill all fields"
      )

      return
    }

    // TRAVELER VALIDATION
    if (travelers < 1) {

      toast.error(
        "Travelers must be at least 1"
      )

      return
    }

    // DATE VALIDATION
    if (
      new Date(endDate) <
      new Date(startDate)
    ) {

      toast.error(
        "End date cannot be before start date"
      )

      return
    }

    // START LOADING
    setLoading(true)

    toast.loading(
      "AI is generating your trip...",
      {
        id: "trip-loader",
      }
    )

    // FAKE API
    setTimeout(() => {

      // CREATE TRIP DATA
      const tripData = {
        id: Date.now(),
        destination,
        travelers,
        startDate,
        endDate,
        budget,
        createdAt:
          new Date().toISOString(),
      }

      // GET OLD TRIPS
      const existingTrips =
        JSON.parse(
          localStorage.getItem(
            "traveloop_trips"
          )
        ) || []

      // SAVE NEW TRIP
      localStorage.setItem(
        "traveloop_trips",
        JSON.stringify([
          tripData,
          ...existingTrips,
        ])
      )

      // SAVE ACTIVE TRIP
      localStorage.setItem(
        "active_trip",
        JSON.stringify(tripData)
      )

      // REMOVE LOADING
      toast.dismiss("trip-loader")

      // SUCCESS
      toast.success(
        "AI Trip Generated Successfully"
      )

      // STOP LOADING
      setLoading(false)

      // NAVIGATE
      navigate("/build-itinerary")

    }, 2500)
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

          {/* HEADER */}
          <div className="mb-10">

            <p className="
              uppercase
              tracking-[5px]
              text-gray-400
              text-sm
              mb-4
            ">
              AI Trip Planner
            </p>

            <h1 className="
              text-4xl
              sm:text-5xl
              font-semibold
              text-[#111]
            ">
              Create A New Trip
            </h1>

          </div>

          {/* FORM */}
          <div className="
            bg-[#f7f7f5]
            border
            border-[#ececec]
            rounded-[15px]
            p-5
            sm:p-8
            lg:p-10
          ">

            {/* AI BANNER */}
            <div className="
              mb-8
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

                  <FaMagic size={20} />

                </div>

                <div>

                  <p className="
                    uppercase
                    tracking-[4px]
                    text-white/50
                    text-xs
                    mb-2
                  ">
                    Smart Planning
                  </p>

                  <h3 className="
                    text-2xl
                    font-semibold
                  ">
                    AI Powered Itinerary
                  </h3>

                </div>

              </div>

              <div className="
                text-white/70
                max-w-md
              ">
                Personalized travel planning,
                budget estimation, activities,
                and recommendations instantly.
              </div>

            </div>

            {/* GRID */}
            <div className="
              grid
              lg:grid-cols-2
              gap-6
            ">

              {/* DESTINATION */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  Destination
                </label>

                <div className="relative">

                  <FaPlaneDeparture
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) =>
                      setDestination(
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      h-14
                      pl-14
                      pr-5
                      rounded-[15px]
                      border
                      border-[#e5e5e5]
                      bg-white
                      outline-none
                      focus:border-black
                      transition-all
                    "
                  />

                </div>

              </div>

              {/* TRAVELERS */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  Travelers
                </label>

                <div className="relative">

                  <FaUsers
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="number"
                    placeholder="Number of travelers"
                    value={travelers}
                    onChange={(e) =>
                      setTravelers(
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      h-14
                      pl-14
                      pr-5
                      rounded-[15px]
                      border
                      border-[#e5e5e5]
                      bg-white
                      outline-none
                      focus:border-black
                      transition-all
                    "
                  />

                </div>

              </div>

              {/* START DATE */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  Start Date
                </label>

                <div className="relative">

                  <FaCalendarAlt
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) =>
                      setStartDate(
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      h-14
                      pl-14
                      pr-5
                      rounded-[15px]
                      border
                      border-[#e5e5e5]
                      bg-white
                      outline-none
                      focus:border-black
                      transition-all
                    "
                  />

                </div>

              </div>

              {/* END DATE */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  End Date
                </label>

                <div className="relative">

                  <FaCalendarAlt
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) =>
                      setEndDate(
                        e.target.value
                      )
                    }
                    className="
                      w-full
                      h-14
                      pl-14
                      pr-5
                      rounded-[15px]
                      border
                      border-[#e5e5e5]
                      bg-white
                      outline-none
                      focus:border-black
                      transition-all
                    "
                  />

                </div>

              </div>

            </div>

            {/* BUDGET */}
            <div className="mt-6">

              <label className="
                block
                text-sm
                text-gray-500
                mb-3
              ">
                Budget Preference
              </label>

              <div className="
                flex
                gap-4
                flex-wrap
              ">

                {[
                  "Budget",
                  "Standard",
                  "Luxury",
                ].map((item) => (

                  <button
                    key={item}
                    onClick={() =>
                      setBudget(item)
                    }
                    className={`
                      h-12
                      px-6
                      rounded-[12px]
                      transition-all

                      ${
                        budget === item
                          ? "bg-black text-white"
                          : "bg-white border border-[#e5e5e5]"
                      }
                    `}
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

            {/* BUTTONS */}
            <div className="
              flex
              flex-wrap
              gap-4
              mt-10
            ">

              {/* GENERATE */}
              <button
                onClick={handleGenerateTrip}
                disabled={loading}
                className="
                  h-14
                  px-8
                  rounded-[15px]
                  bg-black
                  text-white
                  hover:bg-[#222]
                  transition-all
                  flex
                  items-center
                  justify-center
                  gap-3
                  min-w-[220px]
                "
              >

                {loading ? (

                  <ClipLoader
                    color="#ffffff"
                    size={22}
                  />

                ) : (

                  <>
                    <FaMagic />
                    Generate AI Trip
                  </>

                )}

              </button>

              {/* BACK */}
              <button
                onClick={() =>
                  navigate("/home")
                }
                className="
                  h-14
                  px-8
                  rounded-[15px]
                  border
                  border-[#dcdcdc]
                  hover:bg-[#efefef]
                  transition-all
                "
              >
                Back To Home
              </button>

            </div>

          </div>

          {/* RECOMMENDATIONS */}
          <section className="mt-16">

            {/* TITLE */}
            <div className="mb-8">

              <p className="
                uppercase
                tracking-[5px]
                text-gray-400
                text-sm
                mb-4
              ">
                AI Recommendations
              </p>

              <h2 className="
                text-4xl
                sm:text-5xl
                font-semibold
                text-[#111]
              ">
                Suggested Activities
              </h2>

            </div>

            {/* GRID */}
            <div className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            ">

              {suggestions.map(
                (item, index) => (

                  <ActivityCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    location={item.location}
                  />

                )
              )}

            </div>

          </section>

        </div>

      </div>

    </div>
  )
}

export default CreateTrip