// src/pages/ItineraryView.jsx

import Navbar from "../components/Navbar"
import ItineraryBudgetCard from "../components/ItineraryBudgetCard"

import {
  FaSearch,
} from "react-icons/fa"

import {
  FiSliders,
} from "react-icons/fi"

function ItineraryView() {

  const dayOne = [
    {
      time: "08:00 AM",
      activity: "Temple Visit",
      location: "Kyoto, Japan",
      expense: "$120",
    },

    {
      time: "12:00 PM",
      activity: "Luxury Lunch",
      location: "Downtown Kyoto",
      expense: "$80",
    },

    {
      time: "05:00 PM",
      activity: "Garden Walk",
      location: "Imperial Garden",
      expense: "$40",
    },
  ]

  const dayTwo = [
    {
      time: "09:00 AM",
      activity: "Mountain Cable Ride",
      location: "Swiss Alps",
      expense: "$220",
    },

    {
      time: "01:00 PM",
      activity: "Lake Side Café",
      location: "Lucerne",
      expense: "$60",
    },

    {
      time: "06:00 PM",
      activity: "Night City Tour",
      location: "Zurich",
      expense: "$140",
    },
  ]

  return (

    <div className="min-h-screen bg-[#f5f5f3] p-3 sm:p-5">

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

        {/* PAGE */}
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
              Travel Timeline
            </p>

            <h1 className="
              text-4xl
              sm:text-5xl
              font-semibold
              text-[#111]
            ">
              Itinerary View
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
                placeholder="Search itinerary..."
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

          {/* TITLE */}
          <div className="
            text-center
            mb-16
          ">

            <p className="
              uppercase
              tracking-[5px]
              text-gray-400
              text-sm
              mb-4
            ">
              Premium Travel Plan
            </p>

            <h2 className="
              text-4xl
              sm:text-5xl
              font-semibold
              text-[#111]
            ">
              Kyoto Luxury Journey
            </h2>

          </div>

          {/* DAY 1 */}
          <section className="mb-20">

            {/* DAY BADGE */}
            <div className="mb-8">

              <div className="
                inline-flex
                h-12
                px-6
                rounded-[12px]
                bg-black
                text-white
                items-center
                justify-center
                text-lg
                font-medium
              ">
                Day 1
              </div>

            </div>

            {/* TIMELINE */}
            <div className="space-y-0">

              {dayOne.map((item, index) => (

                <ItineraryBudgetCard
                  key={index}
                  time={item.time}
                  activity={item.activity}
                  location={item.location}
                  expense={item.expense}
                />

              ))}

            </div>

          </section>

          {/* DAY 2 */}
          <section>

            {/* DAY BADGE */}
            <div className="mb-8">

              <div className="
                inline-flex
                h-12
                px-6
                rounded-[12px]
                bg-black
                text-white
                items-center
                justify-center
                text-lg
                font-medium
              ">
                Day 2
              </div>

            </div>

            {/* TIMELINE */}
            <div className="space-y-0">

              {dayTwo.map((item, index) => (

                <ItineraryBudgetCard
                  key={index}
                  time={item.time}
                  activity={item.activity}
                  location={item.location}
                  expense={item.expense}
                />

              ))}

            </div>

          </section>

        </div>
      </div>
    </div>
  )
}

export default ItineraryView