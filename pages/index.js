import fs from "fs"
import path from "path"

import matter from "gray-matter"
import Head from "next/head"

// components
import Post from "../components/Post"

// utils
import { timeDelta } from "../utils"

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <h1>Posts</h1>
      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // get files from posts directory
  const files = fs.readdirSync(path.join("posts"))
  // get slug and front matter from posts
  const posts = files.map((fname) => {
    const slug = fname.replace(".md", "")
    const file = fs.readFileSync(path.join("posts", fname), "utf-8")
    const { data: head } = matter(file)
    return { slug, head }
  })
  return {
    props: { posts: posts.sort(timeDelta) },
  }
}
