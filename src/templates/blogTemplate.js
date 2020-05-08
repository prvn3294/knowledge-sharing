import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { DiscussionEmbed } from "disqus-react"
import Share from '../components/Share';
import useSiteMetadata from "../hooks/use-site-metadata"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {twitterHandle, siteUrl, title,description, image } = useSiteMetadata()
  const { markdownRemark } = data 
  // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  
  const postTitle = frontmatter.title
  const postUrl = `${siteUrl}${frontmatter.path}`;
  const postImage = `${siteUrl}${frontmatter.thumbnail}`
  const postDescription = frontmatter.metaDescription


  const disqusConfig = {
    shortname: 'adestmedia',
    config: { identifier: markdownRemark.id, title: postTitle },
  }

  return (
    <Layout>
      <Helmet>
        <title>{postTitle || title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="description" content={postDescription || description} />
        <meta name="image" content={postImage || image} />
        <meta property="og:title" content={postTitle || title} />
        <meta property="og:description" content={postDescription || description} />
        <meta property="og:image" content={postImage || image} />
        <meta property="og:url" content={postUrl} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@praveen__rana" />
        <meta name="twitter:title" content={postTitle || title} />
        <meta name="twitter:description" content={postDescription || description} />
        <meta name="twitter:image" content={postImage || image} />

        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href={postUrl} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="google-site-verification" content="NQkc2KfIMICmoqXb2YpHbqFnDOPzPh3HPwI6oJ4yQnU" />
      
      </Helmet>

      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{postTitle}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{postTitle}</h1>
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
      <hr class="h-ruler"></hr>
      <Share
				socialConfig={{
					twitterHandle,
					config: {
						shareUrl: postUrl,
            title:postTitle,
            mediaImage:postImage
					},
				}}
			/>
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