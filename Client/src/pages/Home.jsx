import React from 'react'
import Corousal from '../components/Corousal'
import Suggest from "../components/Suggest"
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Corousal/>
      <Suggest/>
      <Card/>
      <Footer/>
    </>
  )
}

export default Home