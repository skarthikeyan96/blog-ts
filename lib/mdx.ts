import matter from "gray-matter"
import path from "path"
import fs from "fs"
const root = process.cwd()

const getFrontMatter = () => {
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
export default getFrontMatter
