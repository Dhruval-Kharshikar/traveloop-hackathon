// src/components/ChecklistSection.jsx

function ChecklistSection({
  title,
  completed,
  total,
  items,
  setItems,
  search,
}) {

  // TOGGLE CHECKBOX
  const toggleItem = (index) => {

    const updatedItems = items.map(
      (item, i) => {

        if (i === index) {

          return {
            ...item,
            checked: !item.checked,
          }
        }

        return item
      }
    )

    setItems(updatedItems)
  }

  // SEARCH FILTER
  const filteredItems = items.filter(
    (item) =>
      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  )

  return (

    <div className="
      bg-white
      border
      border-[#ececec]
      rounded-[15px]
      p-5
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]
      transition-all
    ">

      {/* HEADER */}
      <div className="
        flex
        items-center
        justify-between
        mb-5
      ">

        <h3 className="
          text-2xl
          font-semibold
          text-[#111]
        ">
          {title}
        </h3>

        <div className="
          h-10
          px-4
          rounded-[10px]
          bg-[#f5f5f3]
          flex
          items-center
          justify-center
          text-sm
          text-gray-500
        ">
          {completed}/{total}
        </div>

      </div>

      {/* ITEMS */}
      <div className="space-y-4">

        {filteredItems.length > 0 ? (

          filteredItems.map(
            (item, index) => {

              // ORIGINAL INDEX
              const originalIndex =
                items.findIndex(
                  (i) =>
                    i.name === item.name
                )

              return (

                <label
                  key={originalIndex}
                  className="
                    flex
                    items-center
                    gap-4
                    cursor-pointer
                    group
                  "
                >

                  {/* CHECKBOX */}
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() =>
                      toggleItem(
                        originalIndex
                      )
                    }
                    className="
                      w-5
                      h-5
                      accent-black
                      cursor-pointer
                    "
                  />

                  {/* TEXT */}
                  <span
                    className={`
                      text-[16px]
                      transition-all
                      duration-300

                      ${
                        item.checked
                          ? "line-through text-gray-400"
                          : "text-[#111]"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                </label>

              )
            }
          )

        ) : (

          <div className="
            py-6
            text-sm
            text-gray-400
          ">
            No matching items found
          </div>

        )}

      </div>

    </div>
  )
}

export default ChecklistSection