// src/pages/PackingChecklist.jsx

import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import ChecklistSection from "../components/ChecklistSection"

import {
  FaSearch,
  FaPlus,
  FaShareAlt,
  FaSuitcaseRolling,
} from "react-icons/fa"

import {
  FiSliders,
} from "react-icons/fi"

import toast from "react-hot-toast"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function PackingChecklist() {

  const [loading, setLoading] =
    useState(true)

  const [search, setSearch] =
    useState("")

  const [tripName, setTripName] =
    useState("")

  const [documents, setDocuments] =
    useState([])

  const [clothing, setClothing] =
    useState([])

  const [electronics, setElectronics] =
    useState([])

  // FETCH DATA
  useEffect(() => {

    setTimeout(() => {

      const activeTrip =
        JSON.parse(
          localStorage.getItem(
            "active_trip"
          )
        )

      setTripName(
        activeTrip?.destination ||
          "Paris & Rome Adventure"
      )

      // LOCAL STORAGE CHECKLIST
      const savedChecklist =
        JSON.parse(
          localStorage.getItem(
            "traveloop_checklist"
          )
        )

      if (savedChecklist) {

        setDocuments(
          savedChecklist.documents
        )

        setClothing(
          savedChecklist.clothing
        )

        setElectronics(
          savedChecklist.electronics
        )

      } else {

        // DUMMY DATA
        setDocuments([
          {
            name: "Passport",
            checked: true,
          },

          {
            name: "Flight Tickets",
            checked: true,
          },

          {
            name:
              "Travel Insurance",
            checked: true,
          },

          {
            name:
              "Hotel Booking Confirmation",
            checked: false,
          },
        ])

        setClothing([
          {
            name:
              "Casual Shirts",
            checked: true,
          },

          {
            name:
              "Trousers / Jeans",
            checked: false,
          },

          {
            name:
              "Comfortable Walking Shoes",
            checked: false,
          },

          {
            name:
              "Light Jacket / Windbreaker",
            checked: false,
          },
        ])

        setElectronics([
          {
            name:
              "Phone Charger",
            checked: true,
          },

          {
            name:
              "Universal Power Adapter",
            checked: false,
          },

          {
            name:
              "Earphones / Headphones",
            checked: false,
          },
        ])
      }

      setLoading(false)

    }, 1800)

  }, [])

  // AUTO SAVE
  useEffect(() => {

    if (!loading) {

      localStorage.setItem(
        "traveloop_checklist",
        JSON.stringify({
          documents,
          clothing,
          electronics,
        })
      )
    }

  }, [
    documents,
    clothing,
    electronics,
    loading,
  ])

  // TOTAL COUNTS
  const allItems = [
    ...documents,
    ...clothing,
    ...electronics,
  ]

  const completedItems =
    allItems.filter(
      (item) => item.checked
    ).length

  const totalItems =
    allItems.length

  const progress =
    totalItems > 0
      ? (
          (completedItems /
            totalItems) *
          100
        ).toFixed(0)
      : 0

  // ADD ITEM
  const handleAddItem = () => {

    const newItem = {
      name:
        "New Travel Essential",
      checked: false,
    }

    setDocuments([
      ...documents,
      newItem,
    ])

    toast.success(
      "New item added"
    )
  }

  // RESET
  const handleReset = () => {

    setDocuments(
      documents.map((item) => ({
        ...item,
        checked: false,
      }))
    )

    setClothing(
      clothing.map((item) => ({
        ...item,
        checked: false,
      }))
    )

    setElectronics(
      electronics.map((item) => ({
        ...item,
        checked: false,
      }))
    )

    toast.success(
      "Checklist reset successfully"
    )
  }

  // SHARE
  const handleShare = () => {

    toast.loading(
      "Generating shareable checklist...",
      {
        id: "share-checklist",
      }
    )

    setTimeout(() => {

      toast.dismiss(
        "share-checklist"
      )

      toast.success(
        "Checklist shared successfully"
      )

    }, 1500)
  }

  return (

    <div className="
      min-h-screen
      bg-[#f5f5f3]
      p-3
      sm:p-5
    ">

      {/* MAIN */}
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

        {/* PAGE */}
        <div className="
          p-5
          sm:p-8
          lg:p-10
        ">

          {/* HEADER */}
          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-5
            mb-10
          ">

            <div>

              <p className="
                uppercase
                tracking-[5px]
                text-gray-400
                text-sm
                mb-4
              ">
                Travel Essentials
              </p>

              <h1 className="
                text-4xl
                sm:text-5xl
                font-semibold
                text-[#111]
              ">
                Packing Checklist
              </h1>

            </div>

            {/* AI STATUS */}
            <div className="
              h-14
              px-6
              rounded-[15px]
              bg-black
              text-white
              flex
              items-center
              gap-4
            ">

              <FaSuitcaseRolling />

              AI Smart Packing Enabled

            </div>

          </div>

          {/* SEARCH */}
          <div className="
            flex
            flex-col
            lg:flex-row
            gap-4
            mb-12
          ">

            {/* SEARCH BAR */}
            <div className="
              flex-1
              flex
              items-center
              gap-4
              h-14
              px-5
              bg-[#f7f7f5]
              rounded-[15px]
              border
              border-[#ececec]
            ">

              <FaSearch className="
                text-gray-400
              " />

              <input
                type="text"
                placeholder="Search checklist items..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="
                  flex-1
                  bg-transparent
                  outline-none
                "
              />

            </div>

            {/* FILTERS */}
            <div className="
              flex
              gap-3
              flex-wrap
            ">

              <button className="
                h-14
                px-6
                rounded-[15px]
                bg-[#f7f7f5]
                border
                border-[#ececec]
                hover:bg-[#efefef]
                transition-all
              ">
                Group By
              </button>

              <button className="
                h-14
                px-6
                rounded-[15px]
                bg-[#f7f7f5]
                border
                border-[#ececec]
                hover:bg-[#efefef]
                transition-all
                flex
                items-center
                gap-3
              ">

                <FiSliders />

                Filter

              </button>

              <button className="
                h-14
                px-6
                rounded-[15px]
                bg-[#f7f7f5]
                border
                border-[#ececec]
                hover:bg-[#efefef]
                transition-all
              ">
                Sort By
              </button>

            </div>

          </div>

          {/* TRIP + PROGRESS */}
          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
            mb-12
          ">

            {/* TRIP */}
            <div>

              <p className="
                uppercase
                tracking-[4px]
                text-gray-400
                text-xs
                mb-3
              ">
                Selected Trip
              </p>

              {loading ? (

                <Skeleton
                  width={260}
                  height={55}
                  borderRadius={15}
                />

              ) : (

                <div className="
                  h-14
                  px-6
                  rounded-[15px]
                  bg-black
                  text-white
                  inline-flex
                  items-center
                  gap-4
                ">
                  Trip: {tripName}
                </div>

              )}

            </div>

            {/* PROGRESS */}
            <div className="
              w-full
              lg:max-w-[420px]
            ">

              <div className="
                flex
                items-center
                justify-between
                mb-3
              ">

                <span className="
                  text-sm
                  text-gray-500
                ">
                  Progress
                </span>

                <span className="
                  text-sm
                  font-medium
                  text-[#111]
                ">
                  {completedItems} /{" "}
                  {totalItems} Items Packed
                </span>

              </div>

              {/* BAR */}
              <div className="
                h-3
                rounded-full
                bg-[#ececec]
                overflow-hidden
              ">

                <div
                  style={{
                    width: `${progress}%`,
                  }}
                  className="
                    h-full
                    bg-black
                    rounded-full
                    transition-all
                    duration-500
                  "
                />

              </div>

            </div>

          </div>

          {/* CHECKLISTS */}
          <div className="
            grid
            lg:grid-cols-3
            gap-6
          ">

            {loading ? (

              [...Array(3)].map(
                (_, index) => (

                  <Skeleton
                    key={index}
                    height={350}
                    borderRadius={15}
                  />

                )
              )

            ) : (

              <>
                {/* DOCUMENTS */}
                <ChecklistSection
                  title="Documents"
                  completed={
                    documents.filter(
                      (item) =>
                        item.checked
                    ).length
                  }
                  total={
                    documents.length
                  }
                  items={documents}
                  setItems={
                    setDocuments
                  }
                  search={search}
                />

                {/* CLOTHING */}
                <ChecklistSection
                  title="Clothing"
                  completed={
                    clothing.filter(
                      (item) =>
                        item.checked
                    ).length
                  }
                  total={
                    clothing.length
                  }
                  items={clothing}
                  setItems={
                    setClothing
                  }
                  search={search}
                />

                {/* ELECTRONICS */}
                <ChecklistSection
                  title="Electronics"
                  completed={
                    electronics.filter(
                      (item) =>
                        item.checked
                    ).length
                  }
                  total={
                    electronics.length
                  }
                  items={electronics}
                  setItems={
                    setElectronics
                  }
                  search={search}
                />
              </>

            )}

          </div>

          {/* ACTION BUTTONS */}
          <div className="
            flex
            flex-wrap
            gap-4
            mt-12
          ">

            {/* ADD */}
            <button
              onClick={handleAddItem}
              className="
                h-14
                px-7
                rounded-[15px]
                bg-black
                text-white
                flex
                items-center
                gap-3
                hover:bg-[#222]
                transition-all
              "
            >

              <FaPlus />

              Add Item

            </button>

            {/* RESET */}
            <button
              onClick={handleReset}
              className="
                h-14
                px-7
                rounded-[15px]
                border
                border-[#ececec]
                hover:bg-[#efefef]
                transition-all
              "
            >
              Reset All
            </button>

            {/* SHARE */}
            <button
              onClick={handleShare}
              className="
                h-14
                px-7
                rounded-[15px]
                border
                border-[#ececec]
                flex
                items-center
                gap-3
                hover:bg-[#efefef]
                transition-all
              "
            >

              <FaShareAlt />

              Share Checklist

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PackingChecklist