import { useState } from "react"
import { motion } from "framer-motion"

import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi"

import {
  FaPlaneDeparture,
} from "react-icons/fa"

import {
  Link,
  useNavigate,
} from "react-router-dom"

import toast from "react-hot-toast"

import { ClipLoader } from "react-spinners"

function Login() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    // EMPTY VALIDATION
    if (!email || !password) {

      toast.error("Please fill all fields")

      return
    }

    // EMAIL FORMAT VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {

      toast.error("Please enter a valid email")

      return
    }

    // FAKE BACKEND USER
    const dummyUser = {
      email: "alex@example.com",
      password: "12345",
      name: "Alex Volkov",
    }

    // START LOADING
    setLoading(true)

    // FAKE API DELAY
    setTimeout(() => {

      // CHECK LOGIN
      if (
        email === dummyUser.email &&
        password === dummyUser.password
      ) {

        // STORE USER
        localStorage.setItem(
          "traveloop_user",
          JSON.stringify({
            name: dummyUser.name,
            email: dummyUser.email,
            token: "dummy_jwt_token_12345",
            loggedIn: true,
          })
        )

        // SUCCESS
        toast.success("Login Successful")

        // NAVIGATE
        navigate("/home")

      } else {

        // ERROR
        toast.error(
          "Invalid email or password"
        )
      }

      // STOP LOADING
      setLoading(false)

    }, 1800)
  }

  return (

    <div className="min-h-screen bg-[#f5f5f7] p-3 sm:p-5 lg:p-6">

      {/* MAIN */}
      <div className="
        w-full
        min-h-[100vh]
        lg:min-h-[92vh]
        bg-white
        rounded-[15px]
        overflow-hidden
        shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        grid
        lg:grid-cols-2
      ">

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

          {/* OVERLAY */}
          <div className="
            absolute
            inset-0
            bg-black/40
          " />

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
          " />

          {/* TOP */}
          <div className="
            relative
            z-10
            flex
            items-center
            gap-4
          ">

            <div className="
              w-14
              h-14
              rounded-full
              bg-white/20
              backdrop-blur-xl
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
            ">

              <FaPlaneDeparture size={20} />

            </div>

            <h1 className="
              text-white
              text-4xl
              font-bold
              tracking-wide
            ">
              TRAVELOOP
            </h1>

          </div>

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              relative
              z-10
              max-w-2xl
            "
          >

            <p className="
              uppercase
              tracking-[5px]
              text-white/70
              text-sm
              mb-5
            ">
              Smart Luxury Travel Planning
            </p>

            <h2 className="
              text-white
              text-6xl
              leading-[75px]
              font-bold
              mb-6
            ">
              Plan.
              <br />
              Discover.
              <br />
              Loop.
            </h2>

            <p className="
              text-white/80
              text-xl
              leading-relaxed
              max-w-xl
            ">
              Experience a smarter and more elegant
              way to organize your adventures,
              budgets, itineraries, and memories.
            </p>

          </motion.div>

          {/* STATS */}
          <div className="
            relative
            z-10
            flex
            gap-4
            flex-wrap
          ">

            {[
              {
                title: "120+",
                subtitle: "Destinations",
              },

              {
                title: "10K+",
                subtitle: "Travelers",
              },

              {
                title: "4.9",
                subtitle: "Ratings",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="
                  backdrop-blur-xl
                  bg-white/10
                  border
                  border-white/10
                  px-5
                  py-4
                  rounded-[15px]
                  min-w-[130px]
                "
              >

                <h3 className="
                  text-white
                  text-3xl
                  font-bold
                ">
                  {item.title}
                </h3>

                <p className="
                  text-white/70
                  text-sm
                ">
                  {item.subtitle}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="
          relative
          flex
          items-center
          justify-center
          bg-[#f8f8fa]
          px-6
          sm:px-10
          md:px-16
          py-14
        ">

          {/* BLUR */}
          <div className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[250px]
            h-[250px]
            bg-[#17c964]/10
            blur-3xl
            rounded-full
          " />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              relative
              z-10
              w-full
              max-w-md
            "
          >

            {/* MOBILE LOGO */}
            <div className="
              lg:hidden
              flex
              items-center
              justify-center
              gap-3
              mb-10
            ">

              <div className="
                w-12
                h-12
                rounded-full
                bg-black
                text-white
                flex
                items-center
                justify-center
              ">

                <FaPlaneDeparture />

              </div>

              <h1 className="
                text-3xl
                font-bold
                text-black
              ">
                TRAVELOOP
              </h1>

            </div>

            {/* HEADING */}
            <div className="mb-10">

              <p className="
                uppercase
                tracking-[4px]
                text-sm
                text-gray-400
                mb-3
              ">
                Welcome Back
              </p>

              <h2 className="
                text-5xl
                font-bold
                text-[#111111]
                leading-tight
              ">
                Continue Your
                <br />
                Journey.
              </h2>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* EMAIL */}
              <div>

                <label className="
                  text-sm
                  text-gray-500
                  font-medium
                ">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-gray-300
                    py-4
                    text-lg
                    outline-none
                    focus:border-black
                    transition-all
                  "
                />

              </div>

              {/* PASSWORD */}
              <div>

                <label className="
                  text-sm
                  text-gray-500
                  font-medium
                ">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-gray-300
                      py-4
                      text-lg
                      outline-none
                      focus:border-black
                      transition-all
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="
                      absolute
                      right-0
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  >

                    {showPassword
                      ? <FiEyeOff size={20} />
                      : <FiEye size={20} />
                    }

                  </button>

                </div>

              </div>

              {/* FORGOT */}
              <div className="
                flex
                justify-end
              ">

                <button
                  type="button"
                  className="
                    text-sm
                    text-gray-500
                    hover:text-black
                    transition-all
                  "
                >
                  Forgot Password?
                </button>

              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  h-14
                  rounded-full
                  bg-black
                  text-white
                  text-lg
                  font-medium
                  hover:bg-[#222]
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                "
              >

                {loading ? (

                  <ClipLoader
                    color="#ffffff"
                    size={22}
                  />

                ) : (

                  "Login"

                )}

              </button>

              {/* DIVIDER */}
              <div className="
                flex
                items-center
                gap-4
              ">

                <div className="
                  flex-1
                  h-[1px]
                  bg-gray-200
                " />

                <span className="
                  text-sm
                  text-gray-400
                ">
                  OR
                </span>

                <div className="
                  flex-1
                  h-[1px]
                  bg-gray-200
                " />

              </div>

              {/* GOOGLE */}
              <button
                type="button"
                onClick={() => {

                  toast.success(
                    "Google Login Connected"
                  )

                  setTimeout(() => {
                    navigate("/home")
                  }, 1000)
                }}
                className="
                  w-full
                  h-14
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  hover:bg-gray-50
                  transition-all
                  text-lg
                  font-medium
                "
              >
                Continue with Google
              </button>

              {/* SIGNUP */}
              <p className="
                text-center
                text-base
                text-gray-500
              ">

                Don’t have an account?{" "}

                <Link
                  to="/signup"
                  className="
                    text-black
                    font-semibold
                    hover:underline
                  "
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