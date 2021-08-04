import React from "react"
import Nav from "./nav"

type Props = {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout
