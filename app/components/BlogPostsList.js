import Posts from '../../lib/getPosts'
import Link from "next/link"


export async function BlogPostsByPublish() {
  const posts = await Posts().get()
  console.log("here", posts)
  return (
    <ul>
      <p> here </p>
    </ul>
  )
}
