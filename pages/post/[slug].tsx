import React from "react"
import Layout from "../../components/layout"
import { getFileBySlug, getFiles } from "../../lib/mdx"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"

type Props = {
  source: any
  frontMatter: any
}
const Post: React.FC<Props> = (props) => {
  return (
    <Layout>
      <article className="leading-relaxed px-3 py-4 pb-md-8">
        <div className="max-w-3xl mr-auto ml-auto">
          <div className="mt-4 mb-4">
            <h1 className="font-bold text-3xl md:text-5xl tracking-normal mb-4 font-serif">
              {" "}
              {props.frontMatter.title}{" "}
            </h1>
          </div>
          <MDXRemote {...props.source} />
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
  const mdxContent = await getFileBySlug(slug)
  const mdxSource = await serialize(mdxContent.content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: mdxContent.data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: mdxContent.data,
    },
  }
}
export default Post
