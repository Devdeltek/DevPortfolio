import Link from "next/link"
import { styled } from '@pigment-css/react';

/*
props:
  post - metadata for a individual post
    link
    meta
      title
      img
      desc
      publish_date
      update_date
      category
      tags
      private
*/

const PostLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing.bufferSmall,
  padding: theme.spacing.bufferSmall,
  display: 'inline-block',
  border: '1px solid ' + theme.colorSchemes.light.colors.accent,
  boxShadow: '3px 3px 1px DarkGray',
  borderRadius: theme.spacing.curveRadius,
  backgroundColor: theme.colorSchemes.light.colors.button,
  width: '150x',
  textAlign: 'center',
  '@media (max-width: 520px)': {
    fontSize: 'clamp(.75em, 3vw, 1em)',
    width: '45%',
    minWidth: '100px',
  },
}));

export function BlogLink(props) {
  let post = props.post
  return (
      <PostLink  href = {post.link} key={post.link}>
        <strong> {post.meta.title} </strong>
        <br/>
        <small>Last Updated: {post.meta.update_date} </small>
      </PostLink>
  );
}