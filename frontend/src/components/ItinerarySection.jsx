// src/components/ItinerarySection.jsx

import { FaCalendarAlt } from "react-icons/fa"

function ItinerarySection({
  sectionNumber,
  title,
  description,
  date,
  budget,
}) {

  return (

    <div className="
      bg-[#f7f7f5]
      border
      border-[#ececec]
      rounded-[15px]
      p-5
      sm:p-7
    ">

      {/* TOP */}
      <div className="flex items-start justify-between gap-5">

        <div>

          <p className="
            uppercase
            tracking-[4px]
            text-gray-400
            text-xs
            mb-3
          ">
            Section {sectionNumber}
          </p>

          <h2 className="
            text-3xl
            font-semibold
            text-[#111]
          ">
            {title}
          </h2>

        </div>

      </div>

      {/* DESCRIPTION */}
      <p className="
        mt-5
        text-gray-500
        leading-relaxed
        max-w-3xl
      ">
        {description}
      </p>

      {/* BOTTOM */}
      <div className="
        flex
        flex-col
        lg:flex-row
        gap-4
        mt-7
      ">

        {/* DATE */}
        <div className="
          flex-1
          h-14
          rounded-[15px]
          border
          border-[#e5e5e5]
          bg-white
          px-5
          flex
          items-center
          gap-4
        ">

          <FaCalendarAlt className="text-gray-400" />

          <span className="text-[#111]">
            {date}
          </span>

        </div>

        {/* BUDGET */}
        <div className="
          flex-1
          h-14
          rounded-[15px]
          border
          border-[#e5e5e5]
          bg-white
          px-5
          flex
          items-center
          justify-between
        ">

          <span className="text-gray-500">
            Budget
          </span>

          <span className="
            text-xl
            font-semibold
            text-[#111]
          ">
            {budget}
          </span>

        </div>

      </div>
    </div>
  )
}

export default ItinerarySection