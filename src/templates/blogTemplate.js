import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { DiscussionEmbed } from "disqus-react"
import Share from '../components/Share';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  console.log('Praveen : ',data)
  const { markdownRemark } = data 
  // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const disqusConfig = {
    shortname: 'adestmedia',
    config: { identifier: markdownRemark.id, title: frontmatter.title },
  }



  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
      <br></br>
      {/* <Share
				socialConfig={{
					twitterHandle,
					config: {
						url: `${url}${slug}`,
						title,
					},
				}}
				tags={tags}
			/> */}
      <br></br>
      <DiscussionEmbed {...disqusConfig} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`