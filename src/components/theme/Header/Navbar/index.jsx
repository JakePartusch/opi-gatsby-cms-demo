import React from "react"
import { Link } from "gatsby"
import Container from "components/common/Container"
import NavbarLinks from "../NavbarLinks"
import { Logo } from "./Logo"
import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`

export default () => (
  <Wrapper as={Container}>
    <Link to="/">
      <Logo />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
)
