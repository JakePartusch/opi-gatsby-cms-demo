import React from "react"
import { Link } from "gatsby"
import Container from "components/common/Container"
import NavbarLinks from "../NavbarLinks"
import { Wrapper } from "./styles"
import { Logo } from "./Logo"

export default () => (
  <Wrapper as={Container}>
    <Link to="/">
      <Logo />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
)
