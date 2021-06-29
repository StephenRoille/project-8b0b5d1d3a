import React from "react"
import Link from "next/link"

const Post = ({ post }) => {
  return (
    <div className='card'>
      <img src={post.head.cover_image} alt='alternate' />
      <div className='post-date'>Posted on {post.head.date}</div>
      <h3>{post.head.title}</h3>
      <p>{post.head.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}

export default Post
