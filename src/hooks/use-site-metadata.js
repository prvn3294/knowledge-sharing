import { graphql, useStaticQuery } from "gatsby"

export default () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                siteUrl
                twitterHandle
              }
            }
          }
        `
      )

  return data.site.siteMetadata
}