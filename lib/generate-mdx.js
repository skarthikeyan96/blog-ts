const fetch = require("node-fetch")
const fs = require("fs")
require("dotenv").config()
const fetchFromForem = async () => {
  const r = await fetch(`https://dev.to/api/articles/me`, {
    headers: {
      "api-key": process.env.FOREM_API_KEY,
    },
  })
  const data = await r.json()
  data.forEach((element) => {
    const header = `
    ---
    title: "${element.title}"
    description: ${element.description}
    publishedAt: "${element.published_at}"
    tags: ${element.tag_list.toString()}
    id: ${element.id}
    ---
    ${element.body_markdown.trim()}
    `.trim()
    fs.writeFile(`data/blog/${element.slug}.mdx`, header, function (err) {
      if (err) {
        return console.log(err)
      }
      console.log("The file was saved!")
    })
  })
  console.log(data)
}

fetchFromForem()
