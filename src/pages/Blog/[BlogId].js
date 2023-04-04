import { useRouter } from 'next/router'
import React from 'react'

function Blog() {
  const router = useRouter()
  const postID = router.query.BlogId
  return (
    <div>Blog {postID}</div>
  )
}

export default Blog