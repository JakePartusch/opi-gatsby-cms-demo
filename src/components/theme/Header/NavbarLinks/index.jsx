import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

export const Wrapper = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`

export default ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#capabilities">Capabilities</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
)
