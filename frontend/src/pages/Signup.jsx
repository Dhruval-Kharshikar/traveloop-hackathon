import { useState } from "react"
import { motion } from "framer-motion"

import {
  Link,
  useNavigate,
} from "react-router-dom"

import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi"

import {
  FaPlaneDeparture,
} from "react-icons/fa"

import toast from "react-hot-toast"

import { ClipLoader } from "react-spinners"

function Signup() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [loading, setLoading] = useState(false)

  const [fullName, setFullName] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    // EMPTY VALIDATION
    if (
      !fullName ||
      !email ||
      !password
    ) {

      toast.error("Please fill all fields")

      return
    }

    // NAME VALIDATION
    if (fullName.length < 3) {

      toast.error(
        "Full name must be at least 3 characters"
      )

      return
    }

    // EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {

      toast.error("Please enter a valid email")

      return
    }

    // PASSWORD VALIDATION
    if (password.length < 6) {

      toast.error(
        "Password must be at least 6 characters"
      )

      return
    }

    // TERMS VALIDATION
    if (!agreeTerms) {

      toast.error(
        "Please accept Terms & Conditions"
      )

      return
    }

    // FAKE EXISTING USER CHECK
    if (email === "demo@example.com") {

      toast.error(
        "Email already exists"
      )

      return
    }

    // START LOADING
    setLoading(true)

    // FAKE API DELAY
    setTimeout(() => {

      // USER DATA
      const userData = {
        name: fullName,
        email: email,
        token: "dummy_signup_token",
        loggedIn: true,
      }

      // SAVE USER
      localStorage.setItem(
        "traveloop_user",
        JSON.stringify(userData)
      )

      // SUCCESS
      toast.success(
        "Account Created Successfully"
      )

      // STOP LOADING
      setLoading(false)

      // NAVIGATE
      navigate("/home")

    }, 2000)
  }

  return (

    <div className="min-h-screen bg-[#f5f5f7] p-3 sm:p-5 lg:p-6">

      {/* MAIN CONTAINER */}
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
            bottom-[-100px]
            left-[-100px]
            w-[250px]
            h-[250px]
            bg-[#17c964]/10
            blur-3xl
            rounded-full
          "></div>

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
                text-2xl
                sm:text-3xl
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
                text-xs
                sm:text-sm
                text-gray-400
                mb-3
              ">
                Start Your Journey
              </p>

              <h2 className="
                text-4xl
                sm:text-5xl
                font-bold
                text-[#111111]
                leading-tight
              ">
                Create Your
                <br />
                Account.
              </h2>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* FULL NAME */}
              <div>

                <label className="
                  text-sm
                  text-gray-500
                  font-medium
                ">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(e.target.value)
                  }
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
                    placeholder="Create a password"
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
                      text-base
                      sm:text-lg
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

                    {showPassword ? (
                      <FiEyeOff size={20} />
                    ) : (
                      <FiEye size={20} />
                    )}

                  </button>

                </div>

              </div>

              {/* TERMS */}
              <div className="
                flex
                items-start
                gap-3
                pt-1
              ">

                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) =>
                    setAgreeTerms(
                      e.target.checked
                    )
                  }
                  className="
                    w-4
                    h-4
                    mt-1
                    accent-black
                  "
                />

                <p className="
                  text-sm
                  text-gray-500
                  leading-relaxed
                ">
                  I agree to the Terms &
                  Conditions
                </p>

              </div>

              {/* BUTTON */}
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

                  "Create Account"

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
                "></div>

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
                "></div>

              </div>

              {/* GOOGLE BUTTON */}
              <button
                type="button"
                onClick={() => {

                  toast.success(
                    "Google Signup Connected"
                  )

                  setTimeout(() => {

                    localStorage.setItem(
                      "traveloop_user",
                      JSON.stringify({
                        name: "Google User",
                        email:
                          "google@traveloop.com",
                        token:
                          "google_dummy_token",
                        loggedIn: true,
                      })
                    )

                    navigate("/home")

                  }, 1200)
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

              {/* LOGIN REDIRECT */}
              <p className="
                text-center
                text-sm
                sm:text-base
                text-gray-500
              ">

                Already have an account?{" "}

                <Link
                  to="/"
                  className="
                    text-black
                    font-semibold
                    hover:underline
                  "
                >
                  Login
                </Link>

              </p>

            </form>

          </motion.div>

        </div>

        {/* RIGHT SIDE */}
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
              "url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1600&auto=format&fit=crop')",
          }}
        >

          {/* OVERLAYS */}
          <div className="
            absolute
            inset-0
            bg-black/40
          "></div>

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "></div>

          {/* TOP */}
          <div className="
            relative
            z-10
            flex
            items-center
            gap-4
          ">

            <div className="
              w-12
              h-12
              xl:w-14
              xl:h-14
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
              text-3xl
              xl:text-4xl
              font-bold
              tracking-wide
            ">
              TRAVELOOP
            </h1>

          </div>

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
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
              text-xs
              xl:text-sm
              mb-5
            ">
              Explore The World
            </p>

            <h2 className="
              text-white
              text-5xl
              xl:text-7xl
              leading-tight
              xl:leading-[85px]
              font-bold
              mb-6
            ">
              Travel
              <br />
              Without
              <br />
              Limits.
            </h2>

            <p className="
              text-white/80
              text-base
              xl:text-xl
              leading-relaxed
              max-w-xl
            ">
              Join thousands of travelers
              building unforgettable
              experiences with elegant and
              smart trip planning.
            </p>

          </motion.div>

          {/* QUOTE */}
          <div className="
            relative
            z-10
            backdrop-blur-xl
            bg-white/10
            border
            border-white/10
            rounded-3xl
            p-6
            max-w-md
          ">

            <p className="
              text-white
              text-base
              xl:text-lg
              leading-relaxed
            ">
              “The journey of a thousand
              miles begins with a single
              step.”
            </p>

            <p className="
              text-white/70
              mt-4
              text-sm
            ">
              — Lao Tzu
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Signup