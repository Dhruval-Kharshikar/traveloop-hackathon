import Navbar from "../components/Navbar"
import ActivityCard from "../components/ActivityCard"

import { useNavigate } from "react-router-dom"

function CreateTrip() {

  const navigate = useNavigate()

  const suggestions = [
    {
      title: "Temple Visit",
      location: "Kyoto",
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Beach Escape",
      location: "Bali",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Mountain Adventure",
      location: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "City Lights",
      location: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Santorini Sunset",
      location: "Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Safari Journey",
      location: "Africa",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
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

        {/* PAGE CONTENT */}
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
              Plan Journey
            </p>

            <h1 className="
              text-4xl
              sm:text-5xl
              font-semibold
              text-[#111]
            ">
              Create A New Trip
            </h1>

          </div>

          {/* FORM */}
          <div className="
            bg-[#f7f7f5]
            border
            border-[#ececec]
            rounded-[15px]
            p-5
            sm:p-8
            lg:p-10
          ">

            <div className="
              grid
              lg:grid-cols-2
              gap-6
            ">

              {/* DESTINATION */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  Select Destination
                </label>

                <input
                  type="text"
                  placeholder="Enter destination"
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-[15px]
                    border
                    border-[#e5e5e5]
                    bg-white
                    outline-none
                    focus:border-black
                    transition-all
                  "
                />

              </div>

              {/* TRAVELERS */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  Travelers
                </label>

                <input
                  type="number"
                  placeholder="Number of travelers"
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-[15px]
                    border
                    border-[#e5e5e5]
                    bg-white
                    outline-none
                    focus:border-black
                    transition-all
                  "
                />

              </div>

              {/* START DATE */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  Start Date
                </label>

                <input
                  type="date"
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-[15px]
                    border
                    border-[#e5e5e5]
                    bg-white
                    outline-none
                    focus:border-black
                    transition-all
                  "
                />

              </div>

              {/* END DATE */}
              <div>

                <label className="
                  block
                  text-sm
                  text-gray-500
                  mb-3
                ">
                  End Date
                </label>

                <input
                  type="date"
                  className="
                    w-full
                    h-14
                    px-5
                    rounded-[15px]
                    border
                    border-[#e5e5e5]
                    bg-white
                    outline-none
                    focus:border-black
                    transition-all
                  "
                />

              </div>

            </div>

            {/* BUTTONS */}
            <div className="
              flex
              flex-wrap
              gap-4
              mt-8
            ">

              <button
                onClick={() => navigate("/build-itinerary")}
                className="
                    h-14
                    px-8
                    rounded-[15px]
                    bg-black
                    text-white
                    hover:bg-[#222]
                    transition-all
                "
                >
                Generate Trip
                </button>

              <button
                onClick={() => navigate("/home")}
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
                Back To Home
              </button>

            </div>
          </div>

          {/* SUGGESTIONS */}
          <section className="mt-16">

            {/* TITLE */}
            <div className="mb-8">

              <p className="
                uppercase
                tracking-[5px]
                text-gray-400
                text-sm
                mb-4
              ">
                Recommendations
              </p>

              <h2 className="
                text-4xl
                sm:text-5xl
                font-semibold
                text-[#111]
              ">
                Suggested Activities
              </h2>

            </div>

            {/* GRID */}
            <div className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            ">

              {suggestions.map((item, index) => (

                <ActivityCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  location={item.location}
                />

              ))}

            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default CreateTrip