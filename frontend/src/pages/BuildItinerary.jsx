// src/pages/BuildItinerary.jsx

import Navbar from "../components/Navbar"
import ItinerarySection from "../components/ItinerarySection"

import {
  FaPlus,
  FaArrowLeft,
} from "react-icons/fa"

import { useNavigate } from "react-router-dom"

function BuildItinerary() {

  const navigate = useNavigate()

  const sections = [
    {
      sectionNumber: 1,
      title: "Arrival & City Exploration",
      description:
        "Check into your luxury hotel, explore the city streets, visit nearby cafes, and enjoy a relaxing evening experience.",
      date: "12 May - 14 May",
      budget: "$450",
    },

    {
      sectionNumber: 2,
      title: "Beach & Adventure Activities",
      description:
        "Experience water sports, private beach tours, sunset dining, and premium outdoor activities.",
      date: "15 May - 17 May",
      budget: "$780",
    },

    {
      sectionNumber: 3,
      title: "Mountain Retreat & Departure",
      description:
        "Relax in scenic mountain resorts, enjoy nature experiences, and prepare for departure with local shopping.",
      date: "18 May - 20 May",
      budget: "$620",
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

        {/* PAGE */}
        <div className="p-5 sm:p-8 lg:p-10">

          {/* HEADER */}
          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
            mb-12
          ">

            <div>

              <p className="
                uppercase
                tracking-[5px]
                text-gray-400
                text-sm
                mb-4
              ">
                Travel Planner
              </p>

              <h1 className="
                text-4xl
                sm:text-5xl
                font-semibold
                text-[#111]
              ">
                Build Your Itinerary
              </h1>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">

              <button
                onClick={() => navigate("/create-trip")}
                className="
                  h-14
                  px-7
                  rounded-[15px]
                  border
                  border-[#dcdcdc]
                  hover:bg-[#efefef]
                  transition-all
                  flex
                  items-center
                  gap-3
                "
              >

                <FaArrowLeft />

                Back

              </button>

              <button className="
                h-14
                px-7
                rounded-[15px]
                bg-black
                text-white
                hover:bg-[#222]
                transition-all
              ">
                Save Itinerary
              </button>

            </div>
          </div>

          {/* ITINERARY LIST */}
          <div className="space-y-6">

            {sections.map((section, index) => (

              <ItinerarySection
                key={index}
                sectionNumber={section.sectionNumber}
                title={section.title}
                description={section.description}
                date={section.date}
                budget={section.budget}
              />

            ))}

          </div>

          {/* ADD SECTION */}
          <div className="
            flex
            justify-center
            mt-12
          ">

            <button className="
              h-16
              px-10
              rounded-[15px]
              bg-[#111]
              text-white
              text-lg
              font-medium
              flex
              items-center
              gap-4
              hover:bg-[#222]
              transition-all
            ">

              <FaPlus />

              Add Another Section

            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default BuildItinerary