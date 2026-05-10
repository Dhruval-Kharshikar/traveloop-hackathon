import { useState } from "react"
import { motion } from "framer-motion"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { FaPlaneDeparture } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/home")
  }

  return (

    <div className="min-h-screen bg-[#f5f5f7] p-3 sm:p-5 lg:p-6">

      {/* MAIN CONTAINER */}
      <div className="w-full min-h-[100vh] lg:min-h-[92vh] bg-white rounded-[15px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div
          className="
            relative
            hidden
            lg:flex
            flex-col
            justify-between
            p-8
            xl:p-14
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop')",
          }}
        >

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/35"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* TOP */}
          <div className="relative z-10 flex items-center gap-4">

            <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
              <FaPlaneDeparture size={20} />
            </div>

            <h1 className="text-white text-3xl xl:text-4xl font-bold tracking-wide">
              TRAVELOOP
            </h1>

          </div>

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-2xl"
          >

            <p className="uppercase tracking-[5px] text-white/70 text-xs xl:text-sm mb-5">
              Luxury Travel Planning
            </p>

            <h2 className="text-white text-5xl xl:text-7xl leading-tight xl:leading-[85px] font-bold mb-6">
              Plan.
              <br />
              Discover.
              <br />
              Loop.
            </h2>

            <p className="text-white/80 text-base xl:text-xl leading-relaxed max-w-xl">
              Design beautiful journeys, organize your adventures,
              and explore the world through a smarter and more
              elegant travel experience.
            </p>

          </motion.div>

          {/* STATS */}
          <div className="relative z-10 flex flex-wrap gap-4">

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 px-5 py-4 rounded-2xl min-w-[120px]">
              <h3 className="text-white text-2xl xl:text-3xl font-bold">
                120+
              </h3>

              <p className="text-white/70 text-sm">
                Destinations
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 px-5 py-4 rounded-2xl min-w-[120px]">
              <h3 className="text-white text-2xl xl:text-3xl font-bold">
                10K+
              </h3>

              <p className="text-white/70 text-sm">
                Travelers
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/10 border border-white/10 px-5 py-4 rounded-2xl min-w-[120px]">
              <h3 className="text-white text-2xl xl:text-3xl font-bold">
                4.9
              </h3>

              <p className="text-white/70 text-sm">
                Rating
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center bg-[#f8f8fa] px-6 sm:px-10 md:px-16 py-14">

          {/* Blur */}
          <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#17c964]/10 blur-3xl rounded-full"></div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-md"
          >

            {/* MOBILE LOGO */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-10">

              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <FaPlaneDeparture />
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-black">
                TRAVELOOP
              </h1>

            </div>

            {/* HEADING */}
            <div className="mb-10">

              <p className="uppercase tracking-[4px] text-xs sm:text-sm text-gray-400 mb-3">
                Welcome Back
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
                Continue Your
                <br />
                Journey.
              </h2>

            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-7">

              {/* EMAIL */}
              <div>

                <label className="text-sm text-gray-500 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-gray-300
                    py-4
                    text-base
                    sm:text-lg
                    outline-none
                    focus:border-black
                    transition-all
                  "
                />

              </div>

              {/* PASSWORD */}
              <div>

                <label className="text-sm text-gray-500 font-medium">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-gray-300
                      py-4
                      text-base
                      sm:text-lg
                      outline-none
                      focus:border-black
                      transition-all
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}
                  </button>

                </div>
              </div>

              {/* FORGOT */}
              <div className="flex justify-end">

                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-black transition-all"
                >
                  Forgot Password?
                </button>

              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  h-13
                  sm:h-14
                  rounded-full
                  bg-black
                  text-white
                  text-base
                  sm:text-lg
                  font-medium
                  hover:bg-[#222]
                  transition-all
                  duration-300
                "
              >
                Login
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-4">

                <div className="flex-1 h-[1px] bg-gray-200"></div>

                <span className="text-sm text-gray-400">
                  OR
                </span>

                <div className="flex-1 h-[1px] bg-gray-200"></div>

              </div>

              {/* GOOGLE */}
              <button
                type="button"
                className="
                  w-full
                  h-13
                  sm:h-14
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  hover:bg-gray-50
                  transition-all
                  text-base
                  sm:text-lg
                  font-medium
                "
              >
                Continue with Google
              </button>

              {/* SIGNUP */}
              <p className="text-center text-sm sm:text-base text-gray-500">

                Don’t have an account?{" "}

                <Link
                  to="/signup"
                  className="text-black font-semibold hover:underline"
                >
                  Sign Up
                </Link>

              </p>

            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login