import React from "react"
import { SFooter } from "./SFooter"

const Footer = () => (
  <SFooter>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://bel7ag.netlify.com/work"
    >
      bel7aG
    </a>
  </SFooter>
)

export default Footer
