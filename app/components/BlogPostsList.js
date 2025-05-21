import { postsByPublish, postsByCategory, postsByTags } from '../../lib/getPosts'
import { BlogLink } from './BlogPreviewShort'
import { styled } from '@pigment-css/react'
//This file will solely be for static props, I can try and make client side props with fancy sorting later
/*
Props:
  Head - number of posts to be used, default all
*/


const PostElement = styled('li')(({ theme }) => ({
  display: 'inline',
}));


export function BlogListByPublish(props) {
  const posts = postsByPublish
  return (
    <ul>
      {posts.slice(0,props.head).map((p) => {
        return(
          <PostElement key={p.meta.title}>
            <BlogLink post={p} />
          </PostElement>
        );
      })}
    </ul>
  )
}
/*
props:
  Head - The number of posts to be used for each category
*/
export function BlogListByCategory(props) {
  const categories = postsByCategory

  return (
    <ul>
      {categories.map(({category, posts}) => {
        return(
          <li key={category}>
          <h3> {category} </h3>
            <ul>
              {posts.slice(0,props.head).map((p) => {
                return(
                  <PostElement key={p.meta.title}>
                    <BlogLink post={p} />
                  </PostElement>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  )
}

export function BlogListByTags(props) {
  const tags = postsByTags
  return (
    <ul>
      {tags.map(({tag, posts}) => {
        return(
          <li key={tag}>
          <h3> {tag} </h3>
            <ul>
              {posts.slice(0,props.head).map((p) => {
                return(
                  <PostElement key={p.meta.title}>
                    <BlogLink post={p} />
                  </PostElement>
                );
              })} 
            </ul>
          </li>
        );
      })}
    </ul>
  )
}
