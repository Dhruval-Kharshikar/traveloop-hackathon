// src/components/ActivityCard.jsx

function ActivityCard({ image, title, location }) {

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
      <div className="h-[240px] overflow-hidden">

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
      <div className="p-5">

        <p className="text-sm text-gray-400 mb-2">
          {location}
        </p>

        <h3 className="
          text-2xl
          font-semibold
          text-[#111]
        ">
          {title}
        </h3>

        <button className="
          mt-5
          h-11
          px-5
          rounded-[12px]
          bg-black
          text-white
          hover:bg-[#222]
          transition-all
        ">
          Add To Trip
        </button>

      </div>
    </div>
  )
}

export default ActivityCard