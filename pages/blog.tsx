import React from "react"
import Layout from "../components/layout"
import getFrontMatter from "../lib/mdx"

type props = {
  posts: {
    title: string
    description: string
    publishedAt: string
    id: number
    tags: string
  }[]
}

const Blog: React.FC<props> = (props) => {
  return (
    <Layout>
      <section className=" body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {props.posts.map((post) => {
            return (
              <div
                key={post.id}
                className="-my-8 divide-y-2 divide-gray-100"
              >
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium  title-font mb-2">
                      {post.title}
                    </h2>
                    <p className="pb-2">
                      Published At :{" "}
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                    <p className="leading-relaxed">{post.description}</p>
                    <ul className="text-gray-400 flex flex-wrap mt-2">
                      {post.tags.split(",").map((tag, index) => {
                        return (
                          <li key={index} className="mr-3">
                            #{tag}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
export const getStaticProps = () => {
  // https://github.com/vercel/next.js/discussions/12124
  const posts = getFrontMatter()
  return { props: { posts } }
}
export default Blog
