import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

function landing() {
  return (
        <div className="w-auto md:w-160 h-auto">
          <StaticImage
          src="../images/elektro-diego-logo-black.jpg"
          alt="Elektro Diego Logo"
          placeholder="blurred"
          layout="constrained"
        />
      </div>
  )
}

export default landing
