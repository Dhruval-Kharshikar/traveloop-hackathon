import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import ItinerarySection from "../components/ItinerarySection"

import {
  FaPlus,
  FaArrowLeft,
  FaMagic,
  FaSave,
  FaPlaneDeparture,
} from "react-icons/fa"

import { useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

import { ClipLoader } from "react-spinners"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function BuildItinerary() {

  const navigate = useNavigate()

  const [loading, setLoading] =
    useState(true)

  const [saving, setSaving] =
    useState(false)

  const [trip, setTrip] =
    useState(null)

  const [sections, setSections] =
    useState([])

  // FETCH TRIP
  useEffect(() => {

    setTimeout(() => {

      const activeTrip =
        JSON.parse(
          localStorage.getItem(
            "active_trip"
          )
        )

      setTrip(activeTrip)

      // FAKE AI GENERATED ITINERARY
      setSections([
        {
          sectionNumber: 1,
          title:
            "Arrival & City Exploration",
          description:
            "Check into your luxury hotel, explore the city streets, visit nearby cafes, and enjoy a relaxing evening experience.",
          date: "12 May - 14 May",
          budget: "$450",
        },

        {
          sectionNumber: 2,
          title:
            "Beach & Adventure Activities",
          description:
            "Experience water sports, private beach tours, sunset dining, and premium outdoor activities.",
          date: "15 May - 17 May",
          budget: "$780",
        },

        {
          sectionNumber: 3,
          title:
            "Mountain Retreat & Departure",
          description:
            "Relax in scenic mountain resorts, enjoy nature experiences, and prepare for departure with local shopping.",
          date: "18 May - 20 May",
          budget: "$620",
        },
      ])

      setLoading(false)

    }, 1800)

  }, [])

  // SAVE ITINERARY
  const handleSaveItinerary = () => {

    setSaving(true)

    toast.loading(
      "Saving itinerary...",
      {
        id: "save-itinerary",
      }
    )

    setTimeout(() => {

      localStorage.setItem(
        "generated_itinerary",
        JSON.stringify(sections)
      )

      toast.dismiss(
        "save-itinerary"
      )

      toast.success(
        "Itinerary Saved Successfully"
      )

      setSaving(false)

    }, 1800)
  }

  // ADD SECTION
  const handleAddSection = () => {

    const newSection = {
      sectionNumber:
        sections.length + 1,

      title:
        "Luxury Experience Section",

      description:
        "AI generated premium travel activities, sightseeing experiences, and destination recommendations.",

      date: "21 May - 23 May",

      budget: "$500",
    }

    setSections([
      ...sections,
      newSection,
    ])

    toast.success(
      "New itinerary section added"
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

        {/* PAGE */}
        <div className="
          p-5
          sm:p-8
          lg:p-10
        ">

          {/* HEADER */}
          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
            mb-10
          ">

            {/* LEFT */}
            <div>

              <p className="
                uppercase
                tracking-[5px]
                text-gray-400
                text-sm
                mb-4
              ">
                AI Travel Planner
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
            <div className="
              flex
              gap-4
              flex-wrap
            ">

              {/* BACK */}
              <button
                onClick={() =>
                  navigate("/create-trip")
                }
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

              {/* SAVE */}
              <button
                onClick={
                  handleSaveItinerary
                }
                disabled={saving}
                className="
                  h-14
                  px-7
                  rounded-[15px]
                  bg-black
                  text-white
                  hover:bg-[#222]
                  transition-all
                  flex
                  items-center
                  gap-3
                  min-w-[200px]
                  justify-center
                "
              >

                {saving ? (

                  <ClipLoader
                    color="#ffffff"
                    size={20}
                  />

                ) : (

                  <>
                    <FaSave />
                    Save Itinerary
                  </>

                )}

              </button>

            </div>

          </div>

          {/* TRIP SUMMARY */}
          <div className="
            bg-black
            text-white
            rounded-[15px]
            p-6
            mb-12
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
          ">

            {/* LEFT */}
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

                <FaPlaneDeparture
                  size={20}
                />

              </div>

              <div>

                <p className="
                  uppercase
                  tracking-[4px]
                  text-white/50
                  text-xs
                  mb-2
                ">
                  Active Journey
                </p>

                {loading ? (

                  <Skeleton
                    width={250}
                    height={35}
                  />

                ) : (

                  <h2 className="
                    text-3xl
                    font-semibold
                  ">
                    {trip?.destination ||
                      "Kyoto Adventure"}
                  </h2>

                )}

              </div>

            </div>

            {/* RIGHT */}
            <div className="
              flex
              flex-wrap
              gap-4
            ">

              <div className="
                bg-white/10
                px-5
                py-4
                rounded-[12px]
              ">

                <p className="
                  text-white/50
                  text-xs
                  uppercase
                  mb-1
                ">
                  Travelers
                </p>

                <h3 className="
                  text-xl
                  font-semibold
                ">
                  {trip?.travelers || 2}
                </h3>

              </div>

              <div className="
                bg-white/10
                px-5
                py-4
                rounded-[12px]
              ">

                <p className="
                  text-white/50
                  text-xs
                  uppercase
                  mb-1
                ">
                  Budget
                </p>

                <h3 className="
                  text-xl
                  font-semibold
                ">
                  {trip?.budget ||
                    "Luxury"}
                </h3>

              </div>

            </div>

          </div>

          {/* AI MESSAGE */}
          <div className="
            mb-12
            bg-[#f7f7f5]
            border
            border-[#ececec]
            rounded-[15px]
            p-6
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
          ">

            {/* LEFT */}
            <div className="
              flex
              items-start
              gap-4
            ">

              <div className="
                w-14
                h-14
                rounded-[12px]
                bg-black
                text-white
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
                  text-gray-400
                  text-xs
                  mb-2
                ">
                  AI Generated
                </p>

                <h3 className="
                  text-2xl
                  font-semibold
                  text-[#111]
                ">
                  Smart Itinerary Ready
                </h3>

              </div>

            </div>

            {/* RIGHT */}
            <div className="
              text-gray-500
              max-w-lg
            ">
              Personalized travel
              sections generated using
              destination insights,
              budget preferences, and
              premium travel data.
            </div>

          </div>

          {/* LIST */}
          <div className="
            space-y-6
          ">

            {loading ? (

              [...Array(3)].map(
                (_, index) => (

                  <Skeleton
                    key={index}
                    height={220}
                    borderRadius={15}
                  />

                )
              )

            ) : (

              sections.map(
                (section, index) => (

                  <ItinerarySection
                    key={index}
                    sectionNumber={
                      section.sectionNumber
                    }
                    title={section.title}
                    description={
                      section.description
                    }
                    date={section.date}
                    budget={section.budget}
                  />

                )
              )

            )}

          </div>

          {/* ADD BUTTON */}
          <div className="
            flex
            justify-center
            mt-12
          ">

            <button
              onClick={handleAddSection}
              className="
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
              "
            >

              <FaPlus />

              Add Another Section

            </button>

          </div>

          {/* CONTINUE */}
          <div className="
            flex
            justify-center
            mt-10
          ">

            <button
              onClick={() => {

                toast.success(
                  "Opening itinerary view"
                )

                setTimeout(() => {

                  navigate(
                    "/itinerary-view"
                  )

                }, 1000)
              }}
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
              Continue To Timeline View
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default BuildItinerary