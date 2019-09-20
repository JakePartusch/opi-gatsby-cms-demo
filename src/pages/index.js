import React from "react"
import SEO from "components/common/SEO"
import Intro from "components/landing/Intro"
import Capabilities from "components/landing/Capabilities"
import About from "components/landing/About"
import Contact from "components/landing/Contact"
import Footer from "components/theme/Footer"
import { Global } from "../components/common/Layout/styles"

const index = () => {
  return (
    <>
      <Global />
      <SEO />
      <Intro />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default index
