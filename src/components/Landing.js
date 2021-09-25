import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components

import Form from "../components/form/Form"

// Icons
import { MdMail, MdPhone } from "react-icons/md"

const Landing = () => {
  return (
    <>
      <div className="h-screen flex flex-col w-auto md:w-160 mx-auto justify-center items-center">
        <div className="flex">
          <StaticImage
            src="../images/elektro-diego-logo-black.jpg"
            alt="Elektro Diego Logo"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
        <div className="uppercase mt-6 text-center font-bold text-lg leading-none">
          Binnenkort online
        </div>
        <div className="flex flex-col mt-3 text-center justify-center items-center">
          <a
            href="tel:+32473509041"
            className="flex items-center hover:text-primary transition-colors font-semibold"
          >
            <MdPhone className="text-primary text-md" />
            <span className="ml-1">+32 473 50 90 41</span>
          </a>
          <a
            href="mailto:info@elektro-diego.be"
            className="flex items-center hover:text-primary transition-colors font-semibold mt-1"
          >
            <MdMail className="text-primary text-md" />
            <span className="ml-1">info@elektro-diego.be</span>
          </a>
        </div>
      </div>
      <div className="w-auto md:w-160 mx-auto justify-center items-center">
        <Form />
      </div>
    </>
  )
}

export default Landing
