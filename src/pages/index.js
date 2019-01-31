import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import { rhythm } from '../utils/typography'
import { formatReadingTime } from '../utils/helpers'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allBloggerPost.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const {
            id,
            title,
            slug,
            published,
            childMarkdownRemark: { excerpt, timeToRead },
          } = node
          return (
            <div key={id}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`/${slug}`}>
                  {title}
                </Link>
              </h3>
              <small>
                {published}
                {` • ${formatReadingTime(timeToRead)}`}
              </small>
              <p>{excerpt}</p>
            </div>
          )
        })}
        <Footer />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allBloggerPost(sort: { fields: [published], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          published(formatString: "DD MMMM YYYY", locale: "it")
          childMarkdownRemark {
            excerpt
            timeToRead
          }
        }
      }
    }
  }
`
