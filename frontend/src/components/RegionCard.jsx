// src/components/RegionCard.jsx

function RegionCard({ image, title }) {

  return (

    <div className="
      relative
      h-[220px]
      rounded-[15px]
      overflow-hidden
      group
      cursor-pointer
    ">

      <img
        src={image}
        alt={title}
        className="
          w-full
          h-full
          object-cover
          group-hover:scale-105
          transition-all
          duration-500
        "
      />

      {/* OVERLAY */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/70
        via-black/10
        to-transparent
      "></div>

      {/* TITLE */}
      <div className="absolute bottom-5 left-5">

        <h3 className="
          text-white
          text-2xl
          font-semibold
        ">
          {title}
        </h3>

      </div>

    </div>
  )
}

export default RegionCard