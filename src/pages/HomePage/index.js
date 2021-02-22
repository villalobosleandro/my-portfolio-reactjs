import React from 'react'

import { About } from '../../components/About'
import { Contact } from '../../components/Contact'
import { Gallery } from '../../components/Gallery'
import { Header } from '../../components/Header'

export const HomePage = props => {
  return (
    <div>
      <Header/>
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  )
}