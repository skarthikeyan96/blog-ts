import React from "react"
import Layout from "../../components/layout"
import { getFileBySlug, getFiles } from "../../lib/mdx"
import { MDXRemote } from "next-mdx-remote"
import Link from "next/link"
import Image from "next/image"

type Props = {
  source: any
  frontMatter: any
}
const components = { Link, Image }
const Post: React.FC<Props> = (props) => {
  return (
    <Layout>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="max-w-3xl mr-auto ml-auto">
          <div className="mt-4 mb-4">
            <h1 className="font-bold text-3xl md:text-4xl tracking-normal mb-4 font-serif">
              {" "}
              {props.frontMatter.title}{" "}
            </h1>
          </div>
          <div className="prose prose-dark">
            <MDXRemote {...props.source} components={components} />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const posts = getFiles()
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: true,
  }
}
export const getStaticProps = async (context: any) => {
  const {
    params: { slug },
  } = context
  // get the file based on slug
  const post = await getFileBySlug(slug)

  return {
    props: {
      source: post.mdxSource,
      frontMatter: post.data,
    },
  }
}
export default Post
