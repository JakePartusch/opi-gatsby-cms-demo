import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Container from "components/common/Container"
import Button from "components/common/Button"
import SkillIllustration from "components/illustrations/SkillIllustration"
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles"

export default () => {
  const {
    allContentfulClient: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulClient(limit: 1) {
        edges {
          node {
            callToAction
            title
            description
          }
        }
      }
    }
  `)
  const {
    node: { title, callToAction, description },
  } = edges[0]
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <SkillIllustration />
        </Thumbnail>
        <Details>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button as={AnchorLink} href="#contact">
            {callToAction}
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
}
