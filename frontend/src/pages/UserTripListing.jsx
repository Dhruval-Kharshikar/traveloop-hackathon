// src/pages/UserTripListing.jsx

import Navbar from "../components/Navbar"
import TripOverviewCard from "../components/TripOverviewCard"

import {
  FaSearch,
} from "react-icons/fa"

import {
  FiSliders,
} from "react-icons/fi"

function UserTripListing() {

  const ongoingTrips = [
    {
      title: "Bali Summer Escape",
      location: "Indonesia",
      days: "8 Days Journey",
      status: "Ongoing",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const upcomingTrips = [
    {
      title: "Kyoto Autumn Loop",
      location: "Japan",
      days: "10 Days Journey",
      status: "Upcoming",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
    },
  ]

  const completedTrips = [
    {
      title: "Santorini Luxury Tour",
      location: "Greece",
      days: "6 Days Journey",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Swiss Mountain Retreat",
      location: "Switzerland",
      days: "12 Days Journey",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
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

          {/* HEADER */}
          <div className="mb-10">

            <p className="
              uppercase
              tracking-[5px]
              text-gray-400
              text-sm
              mb-4
            ">
              My Journeys
            </p>

            <h1 className="
              text-4xl
              sm:text-5xl
              font-semibold
              text-[#111]
            ">
              My Trip List
            </h1>

          </div>

          {/* SEARCH */}
          <div className="
            flex
            flex-col
            lg:flex-row
            gap-4
            mb-14
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
                placeholder="Search your trips..."
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

          {/* ONGOING */}
          <section className="mb-16">

            <h2 className="
              text-3xl
              font-semibold
              text-[#111]
              mb-7
            ">
              Ongoing
            </h2>

            <div className="space-y-6">

              {ongoingTrips.map((trip, index) => (

                <TripOverviewCard
                  key={index}
                  image={trip.image}
                  title={trip.title}
                  location={trip.location}
                  days={trip.days}
                  status={trip.status}
                />

              ))}

            </div>
          </section>

          {/* UPCOMING */}
          <section className="mb-16">

            <h2 className="
              text-3xl
              font-semibold
              text-[#111]
              mb-7
            ">
              Upcoming
            </h2>

            <div className="space-y-6">

              {upcomingTrips.map((trip, index) => (

                <TripOverviewCard
                  key={index}
                  image={trip.image}
                  title={trip.title}
                  location={trip.location}
                  days={trip.days}
                  status={trip.status}
                />

              ))}

            </div>
          </section>

          {/* COMPLETED */}
          <section>

            <h2 className="
              text-3xl
              font-semibold
              text-[#111]
              mb-7
            ">
              Completed
            </h2>

            <div className="space-y-6">

              {completedTrips.map((trip, index) => (

                <TripOverviewCard
                  key={index}
                  image={trip.image}
                  title={trip.title}
                  location={trip.location}
                  days={trip.days}
                  status={trip.status}
                />

              ))}

            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default UserTripListing