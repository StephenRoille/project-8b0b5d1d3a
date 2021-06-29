import fs from "fs"
import path from "path"

import marked from "marked"
import matter from "gray-matter"
import Link from "next/link"

export default function PostPage({ slug, head, content }) {
  return (
    <div className='container'>
      <Link href='/'>
        <a href='' className='btn btn-back'>
          Go Back
        </a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{head.title}</h1>
        <div className='post-date'>Posted on {head.date}</div>
        <img src={head.cover_image} alt='' />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"))
  const paths = files.map((fname) => {
    return { params: { slug: fname.replace(".md", "") } }
  })
  return { paths: paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(path.join("posts", `${slug}.md`), "utf-8")
  const { data: head, content } = matter(file)
  return { props: { slug, head, content } }
}
