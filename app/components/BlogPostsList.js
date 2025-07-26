import { postsByUpdate, postsByAlpha, postsByCategory, postsByTags } from '../../lib/getPosts'
import { BlogLink } from './BlogPreviewShort'
import { styled } from '@pigment-css/react'
//This file will solely be for static props, I can try and make client side props with fancy sorting later
/*
Props:
  Head - number of posts to be used, default all
*/


const PostElement = styled('li')(({ theme }) => ({
  display: 'inline',
  paddingLeft: '0px',
}));

const PostList = styled('ul')(({ theme }) => ({
  paddingLeft: '0px',
  listStyleType: 'none',
  textAlign: 'center',
}));

const PostListOl = styled('ol')(({ theme }) => ({
  paddingLeft: '0px',
  listStyleType: 'none',
  textAlign: 'center',
}));

export function BlogListByUpdate(props) {
  const posts = postsByUpdate
  return (
    <PostListOl>
      {posts.slice(0,props.head).map((p) => {
        return(
          <PostElement key={p.meta.title}>
            <BlogLink post={p} />
          </PostElement>
        );
      })}
    </PostListOl>
  )
}

export function BlogListByAlpha(props) {
  const posts = postsByAlpha
  return (
    <PostListOl>
      {posts.slice(0,props.head).map((p) => {
        return(
          <PostElement key={p.meta.title}>
            <BlogLink post={p} />
          </PostElement>
        );
      })}
    </PostListOl>
  )
}
/*
props:
  Head - The number of posts to be used for each category
*/
export function BlogListByCategory(props) {
  const categories = postsByCategory

  return (
    <PostList>
      {categories.map(({category, posts}) => {
        return(
          <li key={category}>
          <h3> {category} </h3>
            <PostList>
              {posts.slice(0,props.head).map((p) => {
                return(
                  <PostElement key={p.meta.title}>
                    <BlogLink post={p} />
                  </PostElement>
                );
              })}
            </PostList>
          </li>
        );
      })}
    </PostList>
  )
}

export function BlogListByTags(props) {
  const tags = postsByTags
  return (
    <PostList>
      {tags.map(({tag, posts}) => {
        return(
          <li key={tag}>
          <h3> {tag} </h3>
            <PostList>
              {posts.slice(0,props.head).map((p) => {
                return(
                  <PostElement key={p.meta.title}>
                    <BlogLink post={p} />
                  </PostElement>
                );
              })} 
            </PostList>
          </li>
        );
      })}
    </PostList>
  )
}
