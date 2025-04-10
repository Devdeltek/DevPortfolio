import Posts from '../../lib/getPosts'
import Link from "next/link"


export async function BlogCardsByPublish() {
  const posts = await Posts().get()
  console.log(posts)
  return (
    <div>
      {posts.map(({link, meta}) => {
        return(
          <Link href = {link} key={link}>
            <div>
              <h2> {meta.title} </h2>
              <p> {meta.desc} </p>
              <small> {meta.publish_date} </small>
              <small> {meta.update_date} </small>
            </div>
          </Link>
        );
      })}
    </div>
  )
}
