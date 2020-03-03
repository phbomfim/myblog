import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["react", "nodejs", "html", "css"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">About me</h2>
                        <p><i>Click on the links below to view my resume (brazilian or english version)</i></p>
                        <br />
                        <br />
                        <h4><a href="https://resume.phbomfim.dev">English Version </a> or <a href="https://curriculo.phbomfim.dev">Brazilian Version</a></h4>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech 
                    name 
                    size 
                    color
                }
            }
        }
    }
`

export default AboutPage

