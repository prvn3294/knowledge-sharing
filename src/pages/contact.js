import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Something to say? Drop a note here &rarr;</p>
          <p>Or connect me with, </p>
          <div className="social-container">
          <a className="social-links"  target="_blank" href="https://www.instagram.com/praveen__rana/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="social-links"  target="_blank" href="https://www.linkedin.com/in/praveen-rana">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="social-links"  target="_blank" href="https://www.youtube.com/channel/UCFLC5nIB029SXKWcSwKCxPQ">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          </div>
        </div>
        <div>
          <form className="form-container" action="https://getform.io/f/5495e54e-3762-4a28-8127-7e2fa9116a4a" method="post">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="contact-name"/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="contact-email"/>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="contact-subject"/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="contact-message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`