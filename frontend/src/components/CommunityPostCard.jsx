// src/components/CommunityPostCard.jsx

import {
  FaHeart,
  FaComment,
  FaShare,
  FaMapMarkerAlt,
} from "react-icons/fa"

function CommunityPostCard({
  userImage,
  userName,
  location,
  postImage,
  caption,
  likes,
  comments,
}) {

  return (

    <div className="
      bg-white
      border
      border-[#ececec]
      rounded-[15px]
      overflow-hidden
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
      transition-all
      duration-300
    ">

      {/* TOP */}
      <div className="
        p-5
        flex
        items-center
        justify-between
        gap-4
      ">

        {/* USER */}
        <div className="
          flex
          items-center
          gap-4
        ">

          {/* IMAGE */}
          <div className="
            w-14
            h-14
            rounded-full
            overflow-hidden
          ">

            <img
              src={userImage}
              alt={userName}
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          {/* INFO */}
          <div>

            <h3 className="
              text-lg
              font-semibold
              text-[#111]
            ">
              {userName}
            </h3>

            <div className="
              flex
              items-center
              gap-2
              text-gray-400
              text-sm
            ">

              <FaMapMarkerAlt size={12} />

              {location}

            </div>

          </div>

        </div>

      </div>

      {/* POST IMAGE */}
      <div className="
        h-[420px]
        overflow-hidden
      ">

        <img
          src={postImage}
          alt="post"
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition-all
            duration-700
          "
        />

      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* CAPTION */}
        <p className="
          text-gray-600
          leading-relaxed
        ">
          {caption}
        </p>

        {/* ACTIONS */}
        <div className="
          flex
          items-center
          gap-8
          mt-6
        ">

          <button className="
            flex
            items-center
            gap-3
            text-gray-500
            hover:text-black
            transition-all
          ">

            <FaHeart />

            {likes}

          </button>

          <button className="
            flex
            items-center
            gap-3
            text-gray-500
            hover:text-black
            transition-all
          ">

            <FaComment />

            {comments}

          </button>

          <button className="
            flex
            items-center
            gap-3
            text-gray-500
            hover:text-black
            transition-all
          ">

            <FaShare />

            Share

          </button>

        </div>

      </div>
    </div>
  )
}

export default CommunityPostCard