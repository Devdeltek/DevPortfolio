import { styled } from '@pigment-css/react'
import { postsByPublish } from '../../lib/getPosts'
import BlogCard from './BlogPreviewCard'
//This file will solely be for static props, I can try and make client side props with fancy sorting later
/*
Props:
  Head - number of posts to be used, default all
*/

const Grid = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
});

export function BlogGrid(props) {
  const posts = postsByPublish;
  return (
    <Grid>
      {posts.slice(0,props.head).map((p) => {
        return(
          <BlogCard key = {p.meta.title} post={p} />
        );
      })}
    </Grid>
  )
}
