// src/pages/ActivitySearch.jsx

import Navbar from "../components/Navbar"
import ActivitySearchCard from "../components/ActivitySearchCard"

import {
  FaSearch,
} from "react-icons/fa"

import {
  FiSliders,
} from "react-icons/fi"

function ActivitySearch() {

  const activities = [
    {
      title: "Paragliding Adventure",
      location: "Manali, India",
      rating: "4.9",
      description:
        "Experience breathtaking mountain views and thrilling aerial adventures with professional guides and premium safety equipment.",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Scuba Diving Experience",
      location: "Bali, Indonesia",
      rating: "4.8",
      description:
        "Explore crystal-clear underwater worlds, vibrant marine life, and unforgettable diving experiences.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Luxury Desert Safari",
      location: "Dubai, UAE",
      rating: "4.7",
      description:
        "Enjoy premium desert adventures, sunset photography, cultural performances, and luxury dining experiences.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Skyline Helicopter Tour",
      location: "New York, USA",
      rating: "5.0",
      description:
        "Witness stunning skyline views and iconic landmarks with an unforgettable helicopter ride experience.",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Snow Mountain Trek",
      location: "Switzerland",
      rating: "4.9",
      description:
        "Explore beautiful snowy mountains, scenic hiking routes, and peaceful alpine experiences.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Temple Cultural Tour",
      location: "Kyoto, Japan",
      rating: "4.8",
      description:
        "Discover historic temples, traditional streets, and authentic Japanese cultural experiences.",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
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
              Discover Experiences
            </p>

            <h1 className="
              text-4xl
              sm:text-5xl
              font-semibold
              text-[#111]
            ">
              Activity Search
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
                placeholder="Search activities or cities..."
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

          {/* RESULTS */}
          <section>

            {/* TITLE */}
            <div className="mb-8">

              <h2 className="
                text-3xl
                font-semibold
                text-[#111]
              ">
                Results
              </h2>

            </div>

            {/* LIST */}
            <div className="space-y-6">

              {activities.map((activity, index) => (

                <ActivitySearchCard
                  key={index}
                  image={activity.image}
                  title={activity.title}
                  location={activity.location}
                  rating={activity.rating}
                  description={activity.description}
                />

              ))}

            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default ActivitySearch