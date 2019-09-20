import React from "react"
import Helmet from "react-helmet"
import { url, defaultDescription, defaultTitle } from "data"

const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  location = "",
}) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}

export default SEO
