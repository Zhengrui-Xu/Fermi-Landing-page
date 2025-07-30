'use client'

import { useState, useEffect } from 'react'
import NotchNavbar from './notch-navbar'
import NotchHero from './notch-hero'
import AnnouncementBar from './announcement-bar'

export default function FullHeroLayout() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  return (
    <div className="relative min-h-screen">
      {/* Announcement Bar */}
      {showAnnouncement && <AnnouncementBar onClose={() => setShowAnnouncement(false)} />}

      {/* Notch Navbar */}
      <NotchNavbar />

      {/* Hero Section */}
      <NotchHero />
    </div>
  )
}
