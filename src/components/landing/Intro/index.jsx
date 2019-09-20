import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Header from "components/theme/Header"
import Container from "components/common/Container"
import Button from "components/common/Button"
import DevIllustration from "components/illustrations/DevIllustration"
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles"

export default () => {
  const {
    allContentfulClient: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulClient(limit: 1) {
        edges {
          node {
            callToAction
            tagLine
            title
          }
        }
      }
    }
  `)
  const {
    node: { title, tagLine, callToAction },
  } = edges[0]
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>{title}</h1>
          <h4>{tagLine}</h4>
          <Button as={AnchorLink} href="#contact">
            {callToAction}
          </Button>
        </Details>
        <Thumbnail>
          <DevIllustration />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
