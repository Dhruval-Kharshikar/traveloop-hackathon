// src/components/ActivitySearchCard.jsx

import {
  FaMapMarkerAlt,
  FaStar,
  FaArrowRight,
} from "react-icons/fa"

function ActivitySearchCard({
  image,
  title,
  location,
  rating,
  description,
}) {

  return (

    <div className="
      bg-white
      rounded-[15px]
      overflow-hidden
      border
      border-[#ececec]
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
      transition-all
      duration-300
      cursor-pointer
    ">

      <div className="
        grid
        lg:grid-cols-[280px_1fr]
      ">

        {/* IMAGE */}
        <div className="h-[240px] lg:h-full overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              hover:scale-105
              transition-all
              duration-500
            "
          />

        </div>

        {/* CONTENT */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">

          {/* TOP */}
          <div>

            <div className="
              flex
              items-start
              justify-between
              gap-4
              flex-wrap
            ">

              <div>

                <p className="
                  uppercase
                  tracking-[4px]
                  text-gray-400
                  text-xs
                  mb-3
                ">
                  Activity Experience
                </p>

                <h2 className="
                  text-3xl
                  font-semibold
                  text-[#111]
                ">
                  {title}
                </h2>

              </div>

              {/* RATING */}
              <div className="
                px-4
                py-2
                rounded-[12px]
                bg-yellow-100
                text-yellow-700
                flex
                items-center
                gap-2
                text-sm
                font-medium
              ">

                <FaStar />

                {rating}

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

          </div>

          {/* BOTTOM */}
          <div className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
            mt-8
          ">

            {/* LOCATION */}
            <div className="
              flex
              items-center
              gap-3
              text-gray-500
            ">

              <FaMapMarkerAlt />

              {location}

            </div>

            {/* BUTTON */}
            <button className="
              h-12
              px-6
              rounded-[12px]
              bg-black
              text-white
              flex
              items-center
              justify-center
              gap-3
              hover:bg-[#222]
              transition-all
            ">

              Explore Activity

              <FaArrowRight size={13} />

            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ActivitySearchCard