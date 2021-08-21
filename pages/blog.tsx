import Link from "next/link"
import React from "react"
import Layout from "../components/layout"
import { getFrontMatter } from "../lib/mdx"

type props = {
  posts: {
    title: string
    description: string
    publishedAt: string
    id: number
    tags: string
    slug: string
  }[]
}

const Blog: React.FC<props> = (props) => {
  return (
    <Layout>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto max-w-2xl">
          <h1 className="font-bold text-2xl md:text-4xl tracking-normal mb-6 mt-4 font-sans">
            {" "}
            Blog{" "}
          </h1>
          {props.posts.map((post) => {
            return (
              <Link href={`/post/${post.slug}`} key={post.id}>
                <a>
                  <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="md:flex-grow">
                        <div className="flex flex-col md:flex-row justify-between">
                          <h2 className="text-2xl font-medium  title-font mb-2">
                            {post.title}
                          </h2>
                          <p className="pb-2 text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </p>
                        </div>

                        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                          {post.description}
                        </p>
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
                </a>
              </Link>
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
