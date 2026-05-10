import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Signup from "../pages/Signup"
import LandingPage from "../pages/LandingPage"
import CreateTrip from "../pages/CreateTrip"
import BuildItinerary from "../pages/BuildItinerary"
import UserTripListing from "../pages/UserTripListing"
import UserProfile from "../pages/UserProfile"
import ActivitySearch from "../pages/ActivitySearch"
import ItineraryView from "../pages/ItineraryView"
import Community from "../pages/Community"
import PackingChecklist from "../pages/PackingChecklist"
import TripNotes from "../pages/TripNotes"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Signup */}
        <Route path="/signup" element={<Signup />} />

        {/* LANDING PAGE */}
        <Route path="/home" element={<LandingPage />} />

        {/* CREATE TRIP */}
        <Route path="/create-trip" element={<CreateTrip />} />

        {/* Build Itinerary */}
        <Route path="/build-itinerary" element={<BuildItinerary />} />

        {/* User Trip Listing */}
        <Route path="/my-trips" element={<UserTripListing />} />

        {/* User Profile */}
        <Route path="/profile" element={<UserProfile />} />

        {/* Activity Search */}
        <Route path="/activities" element={<ActivitySearch />} />

        {/* Itinerary View */}
        <Route path="/itinerary-view" element={<ItineraryView />} />

        {/* Community Tab */}
        <Route path="/community" element={<Community />} />

        {/* Packing List */}
        <Route path="/packing-checklist" element={<PackingChecklist />} />

        {/* Trip Notes */}
        <Route path="/trip-notes" element={<TripNotes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes