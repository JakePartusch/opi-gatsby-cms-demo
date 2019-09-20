import React from "react"
import styled from "styled-components"
import { Flex, Item } from "react-flex-ready"
import Container from "components/common/Container"
import Card from "components/common/Card"
import { useStaticQuery, graphql } from "gatsby"

const LogoImg = styled.img`
  height: 50px;
`

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Content = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default () => {
  const {
    allContentfulCapability: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulCapability(sort: { fields: id }) {
        edges {
          node {
            id
            title
            logo {
              file {
                url
              }
            }
            description
          }
        }
      }
    }
  `)
  return (
    <Wrapper as={Container} id="capabilities">
      <h2>Capabilities</h2>
      <Flex col={4}>
        {edges.map(
          ({
            node: {
              id,
              title,
              description,
              logo: {
                file: { url },
              },
            },
          }) => (
            <Item
              key={id}
              col={4}
              colTablet={6}
              colMobile={12}
              marginBottom={30}
              gap={1}
              stretch
            >
              <Card>
                <Content>
                  <LogoImg src={url} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Content>
              </Card>
            </Item>
          )
        )}
      </Flex>
    </Wrapper>
  )
}
