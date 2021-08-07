const fetch = require("node-fetch")
const fs = require("fs")
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
    title: ${element.title}
    description: ${element.description}
    published_at: ${element.published_at}
    ---
    `
    fs.writeFile(
      `data/blog/${element.slug}.mdx`,
      header + element.body_markdown,
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log("The file was saved!")
      }
    )
  })
  console.log(data)
}

fetchFromForem()
