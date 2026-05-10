// src/components/TripCard.jsx

function TripCard({ image, title, days }) {

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

      {/* IMAGE */}
      <div className="h-[260px] overflow-hidden">

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
      <div className="p-6">

        <p className="text-sm text-gray-400 mb-2">
          Premium Journey
        </p>

        <h3 className="
          text-2xl
          font-semibold
          text-[#111]
        ">
          {title}
        </h3>

        <div className="
          flex
          items-center
          justify-between
          mt-5
        ">

          <span className="text-gray-500">
            {days}
          </span>

          <button className="
            h-11
            px-5
            rounded-[12px]
            bg-black
            text-white
            hover:bg-[#222]
            transition-all
          ">
            View Trip
          </button>

        </div>
      </div>

    </div>
  )
}

export default TripCard