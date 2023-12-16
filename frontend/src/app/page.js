"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [user, setUser] = useState()
  useEffect(async () => {
    const response = await fetch('http://localhost:8000/api/names')
    const t = await response.json()
    setUser(t)

  }, [])
  return (
    <main>
      Website is under construction by
      <p>{user ? `Your data: ${user.username}` : 'Loading...'}</p>
    </main>
  )
}
