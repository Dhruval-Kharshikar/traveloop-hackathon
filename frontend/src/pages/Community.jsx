import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import CommunityPostCard from "../components/CommunityPostCard"

import {
  FaSearch,
  FaPlus,
  FaUsers,
  FaFire,
} from "react-icons/fa"

import {
  FiSliders,
} from "react-icons/fi"

import toast from "react-hot-toast"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function Community() {

  const [loading, setLoading] =
    useState(true)

  const [search, setSearch] =
    useState("")

  const [posts, setPosts] =
    useState([])

  // FETCH POSTS
  useEffect(() => {

    setTimeout(() => {

      // USER
      const user =
        JSON.parse(
          localStorage.getItem(
            "traveloop_user"
          )
        )

      // USER GENERATED POST
      const userPost = user
        ? [
            {
              userName: user.name,
              location:
                "Your Latest Journey",
              userImage:
                "https://i.pravatar.cc/300?img=11",
              postImage:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
              caption:
                "Just created my next luxury trip using AI itinerary planning. Excited for the journey ahead.",
              likes: "128",
              comments: "24",
            },
          ]
        : []

      // DUMMY FEED
      const feedPosts = [
        {
          userName: "Alex Morgan",
          location: "Kyoto, Japan",
          userImage:
            "https://i.pravatar.cc/300?img=12",
          postImage:
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
          caption:
            "Exploring Kyoto’s peaceful temples and hidden streets. One of the most beautiful travel experiences ever.",
          likes: "2.4k",
          comments: "320",
        },

        {
          userName: "Sophia Carter",
          location:
            "Bali, Indonesia",
          userImage:
            "https://i.pravatar.cc/300?img=32",
          postImage:
            "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200&auto=format&fit=crop",
          caption:
            "Morning beach vibes, tropical cafés, and sunsets that honestly don’t look real.",
          likes: "4.8k",
          comments: "540",
        },

        {
          userName: "James Wilson",
          location: "Switzerland",
          userImage:
            "https://i.pravatar.cc/300?img=15",
          postImage:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
          caption:
            "Snowy mountains, fresh air, and the calmest place I’ve visited this year.",
          likes: "3.1k",
          comments: "410",
        },

        {
          userName: "Emily Watson",
          location:
            "Santorini, Greece",
          userImage:
            "https://i.pravatar.cc/300?img=25",
          postImage:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
          caption:
            "Luxury sunsets and endless blue views across Santorini’s coastlines.",
          likes: "5.2k",
          comments: "710",
        },
      ]

      setPosts([
        ...userPost,
        ...feedPosts,
      ])

      setLoading(false)

    }, 1800)

  }, [])

  // SEARCH POSTS
  const filteredPosts =
    posts.filter((post) =>
      post.location
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||
      post.caption
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    )

  // CREATE POST
  const handleCreatePost = () => {

    toast.loading(
      "Uploading your travel memory...",
      {
        id: "upload-post",
      }
    )

    setTimeout(() => {

      toast.dismiss(
        "upload-post"
      )

      toast.success(
        "Post uploaded successfully"
      )

    }, 1800)
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
                Travel Community
              </p>

              <h1 className="
                text-4xl
                sm:text-5xl
                font-semibold
                text-[#111]
              ">
                Community Feed
              </h1>

            </div>

            {/* CREATE POST */}
            <button
              onClick={
                handleCreatePost
              }
              className="
                h-14
                px-7
                rounded-[15px]
                bg-black
                text-white
                hover:bg-[#222]
                transition-all
                flex
                items-center
                gap-3
              "
            >

              <FaPlus />

              Create Post

            </button>

          </div>

          {/* SEARCH */}
          <div className="
            flex
            flex-col
            lg:flex-row
            gap-4
            mb-14
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
                placeholder="Search community posts..."
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

          {/* AI COMMUNITY STATS */}
          <div className="
            mb-14
            bg-black
            text-white
            rounded-[15px]
            p-6
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
          ">

            {/* LEFT */}
            <div>

              <p className="
                uppercase
                tracking-[4px]
                text-white/50
                text-xs
                mb-2
              ">
                Community Insights
              </p>

              <h2 className="
                text-3xl
                font-semibold
              ">
                Trending Destinations
              </h2>

            </div>

            {/* STATS */}
            <div className="
              flex
              flex-wrap
              gap-4
            ">

              <div className="
                bg-white/10
                px-5
                py-4
                rounded-[12px]
                min-w-[120px]
              ">

                <div className="
                  flex
                  items-center
                  gap-3
                  mb-2
                ">

                  <FaUsers />

                  <p className="
                    text-white/50
                    text-xs
                  ">
                    Travelers
                  </p>

                </div>

                <h3 className="
                  text-2xl
                  font-semibold
                ">
                  12K+
                </h3>

              </div>

              <div className="
                bg-white/10
                px-5
                py-4
                rounded-[12px]
                min-w-[120px]
              ">

                <div className="
                  flex
                  items-center
                  gap-3
                  mb-2
                ">

                  <FaFire />

                  <p className="
                    text-white/50
                    text-xs
                  ">
                    Trending
                  </p>

                </div>

                <h3 className="
                  text-2xl
                  font-semibold
                ">
                  Kyoto
                </h3>

              </div>

            </div>

          </div>

          {/* FEED */}
          <section>

            {/* TITLE */}
            <div className="
              flex
              items-center
              justify-between
              mb-8
            ">

              <h2 className="
                text-3xl
                font-semibold
                text-[#111]
              ">
                Community Timeline
              </h2>

            </div>

            {/* POSTS */}
            <div className="
              max-w-5xl
              mx-auto
              space-y-8
            ">

              {loading ? (

                [...Array(4)].map(
                  (_, index) => (

                    <Skeleton
                      key={index}
                      height={600}
                      borderRadius={15}
                    />

                  )
                )

              ) : filteredPosts.length >
                0 ? (

                filteredPosts.map(
                  (post, index) => (

                    <CommunityPostCard
                      key={index}
                      userName={
                        post.userName
                      }
                      location={
                        post.location
                      }
                      userImage={
                        post.userImage
                      }
                      postImage={
                        post.postImage
                      }
                      caption={
                        post.caption
                      }
                      likes={post.likes}
                      comments={
                        post.comments
                      }
                    />

                  )
                )

              ) : (

                <div className="
                  h-[250px]
                  rounded-[15px]
                  border
                  border-dashed
                  border-[#dcdcdc]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                ">
                  No community posts found
                </div>

              )}

            </div>

          </section>

        </div>

      </div>

    </div>
  )
}

export default Community