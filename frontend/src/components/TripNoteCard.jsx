// src/components/TripNoteCard.jsx

import {
  FaTrash,
  FaEdit,
  FaCalendarAlt,
} from "react-icons/fa"

function TripNoteCard({
  title,
  description,
  day,
  date,
}) {

  return (

    <div className="
      bg-white
      border
      border-[#ececec]
      rounded-[15px]
      p-5
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]
      transition-all
    ">

      {/* TOP */}
      <div className="
        flex
        items-start
        justify-between
        gap-4
      ">

        <div>

          <h3 className="
            text-2xl
            font-semibold
            text-[#111]
            mb-3
          ">
            {title}
          </h3>

          <p className="
            text-gray-500
            leading-relaxed
            max-w-3xl
          ">
            {description}
          </p>

        </div>

        {/* ACTIONS */}
        <div className="
          flex
          items-center
          gap-3
        ">

          <button className="
            w-10
            h-10
            rounded-[10px]
            bg-[#f5f5f3]
            flex
            items-center
            justify-center
            hover:bg-[#ececec]
            transition-all
          ">

            <FaEdit size={14} />

          </button>

          <button className="
            w-10
            h-10
            rounded-[10px]
            bg-[#f5f5f3]
            flex
            items-center
            justify-center
            hover:bg-red-100
            hover:text-red-500
            transition-all
          ">

            <FaTrash size={14} />

          </button>

        </div>

      </div>

      {/* FOOTER */}
      <div className="
        flex
        items-center
        gap-5
        mt-6
        flex-wrap
      ">

        <div className="
          h-10
          px-4
          rounded-[10px]
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-sm
        ">
          {day}
        </div>

        <div className="
          flex
          items-center
          gap-3
          text-gray-400
          text-sm
        ">

          <FaCalendarAlt />

          {date}

        </div>

      </div>

    </div>
  )
}

export default TripNoteCard