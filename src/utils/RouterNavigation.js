import React from "react"
import { Router } from "@reach/router"

import { HomePage } from './../pages/HomePage'
import { AdminPage } from './../pages/AdminPage'

export const RouterNavigation = () => {
  return (
    <Router>
      <HomePage path="/" />
      <AdminPage path="/admin" />
    </Router>
  )
}
