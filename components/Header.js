import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <div>
        <Link href='/'>
          <h2>
            <a>Dev Blog</a>
          </h2>
        </Link>
      </div>
    </header>
  )
}

export default Header
