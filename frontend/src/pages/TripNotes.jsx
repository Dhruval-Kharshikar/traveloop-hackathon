// src/pages/TripNotes.jsx

import Navbar from "../components/Navbar"
import TripNoteCard from "../components/TripNoteCard"

import {
  FaSearch,
  FaPlus,
} from "react-icons/fa"

import {
  FiSliders,
} from "react-icons/fi"

function TripNotes() {

  const notes = [
    {
      title: "Hotel Check-in Details - Rome Stop",
      description:
        "Check in after 2 PM, room 302, breakfast included from 7-10 AM. Keep passport ready at reception.",
      day: "Day 3",
      date: "June 14, 2025",
    },

    {
      title: "Paris Museum Reservation",
      description:
        "Louvre Museum tickets booked for 11 AM. Reach 30 minutes early to avoid long queues.",
      day: "Day 5",
      date: "June 16, 2025",
    },

    {
      title: "Train Schedule Reminder",
      description:
        "High-speed train from Rome to Venice departs at 7:45 AM. Platform updates available 20 minutes before departure.",
      day: "Day 7",
      date: "June 18, 2025",
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
              Travel Journal
            </p>

            <h1 className="
              text-4xl
              sm:text-5xl
              font-semibold
              text-[#111]
            ">
              Trip Notes
            </h1>

          </div>

          {/* SEARCH */}
          <div className="
            flex
            flex-col
            lg:flex-row
            gap-4
            mb-12
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
                placeholder="Search trip notes..."
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

          {/* TOP ACTIONS */}
          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
            mb-10
          ">

            {/* TRIP SELECT */}
            <div>

              <p className="
                uppercase
                tracking-[4px]
                text-gray-400
                text-xs
                mb-3
              ">
                Selected Journey
              </p>

              <div className="
                h-14
                px-6
                rounded-[15px]
                bg-black
                text-white
                inline-flex
                items-center
              ">
                Trip: Paris & Rome Adventure
              </div>

            </div>

            {/* ADD BUTTON */}
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

              <FaPlus />

              Add Note

            </button>

          </div>

          {/* FILTER TABS */}
          <div className="
            flex
            gap-4
            flex-wrap
            mb-10
          ">

            <button className="
              h-12
              px-6
              rounded-[12px]
              bg-black
              text-white
            ">
              All
            </button>

            <button className="
              h-12
              px-6
              rounded-[12px]
              border
              border-[#ececec]
              hover:bg-[#efefef]
              transition-all
            ">
              By Day
            </button>

            <button className="
              h-12
              px-6
              rounded-[12px]
              border
              border-[#ececec]
              hover:bg-[#efefef]
              transition-all
            ">
              By Stop
            </button>

          </div>

          {/* NOTES */}
          <div className="
            max-w-5xl
            space-y-6
          ">

            {notes.map((note, index) => (

              <TripNoteCard
                key={index}
                title={note.title}
                description={note.description}
                day={note.day}
                date={note.date}
              />

            ))}

          </div>

        </div>
      </div>
    </div>
  )
}

export default TripNotes