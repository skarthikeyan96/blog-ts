import matter from "gray-matter"
import path from "path"
import fs from "fs"
import { serialize } from "next-mdx-remote/serialize"
// @ts-ignore
import rehypePrism from "@mapbox/rehype-prism"
const root = process.cwd()

export const getFiles = (type = "blog") => {
  return fs.readdirSync(path.join(root, "data", "blog"))
}

export const getFileBySlug = async (slug: string) => {
  const file = fs.readFileSync(path.join(root, "data", "blog", `${slug}.mdx`))
  const { content, data } = matter(file)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
  })
  return {
    data,
    mdxSource,
  }
}
export const getFrontMatter = () => {
  const files = fs.readdirSync(path.join(root, "data", "blog"))

  return files.reduce((allPosts: any, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", "blog", postSlug),
      "utf8"
    )
    const { data } = matter(source)
    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ]
  }, [])
}
