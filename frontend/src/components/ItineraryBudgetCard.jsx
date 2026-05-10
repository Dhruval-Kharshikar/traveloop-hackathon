// src/components/ItineraryBudgetCard.jsx

import {
  FaArrowDown,
  FaMapMarkerAlt,
} from "react-icons/fa"

function ItineraryBudgetCard({
  time,
  activity,
  location,
  expense,
}) {

  return (

    <div className="flex flex-col items-center">

      {/* CARD */}
      <div className="
        w-full
        grid
        grid-cols-1
        lg:grid-cols-[1fr_220px]
        gap-4
      ">

        {/* ACTIVITY */}
        <div className="
          bg-white
          border
          border-[#ececec]
          rounded-[15px]
          p-5
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]
          transition-all
        ">

          <div className="
            flex
            items-start
            justify-between
            gap-4
            flex-wrap
          ">

            <div>

              <p className="
                text-sm
                text-gray-400
                mb-2
              ">
                {time}
              </p>

              <h3 className="
                text-2xl
                font-semibold
                text-[#111]
              ">
                {activity}
              </h3>

            </div>

          </div>

          {/* LOCATION */}
          <div className="
            flex
            items-center
            gap-3
            text-gray-500
            mt-5
          ">

            <FaMapMarkerAlt />

            {location}

          </div>

        </div>

        {/* EXPENSE */}
        <div className="
          h-full
          min-h-[120px]
          bg-black
          text-white
          rounded-[15px]
          flex
          flex-col
          items-center
          justify-center
        ">

          <p className="
            uppercase
            tracking-[3px]
            text-xs
            text-gray-400
            mb-2
          ">
            Expense
          </p>

          <h2 className="
            text-3xl
            font-semibold
          ">
            {expense}
          </h2>

        </div>

      </div>

      {/* ARROW */}
      <div className="
        h-16
        flex
        items-center
        justify-center
        text-gray-300
      ">

        <FaArrowDown size={18} />

      </div>

    </div>
  )
}

export default ItineraryBudgetCard