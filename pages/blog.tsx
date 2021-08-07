import React from "react"
import Layout from "../components/layout"
import getFrontMatter from "../lib/mdx"

type props = {}

const Blog: React.FC<props> = (props) => {
  return (
    <Layout>
      <p> Blog </p>
    </Layout>
  )
}
export const getStaticProps = () => {
  // https://github.com/vercel/next.js/discussions/12124
  const posts = getFrontMatter()
  return { props: { posts } }
}
export default Blog
