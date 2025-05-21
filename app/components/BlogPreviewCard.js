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

const Wrapper = styled('div')({
  width: '25%',
  minWidth: '200px',
  margin: '0.5em',
  '@media (max-width: 520px)': {
    fontSize: 'clamp(.75em, 3vw, 1em)',
    width: '45%',
    minWidth: '100px',
  },
});

const DateDiv = styled('span')({
  display: 'flex',
  justifyContent: 'space-between',
});


const LinkCard = styled(Link)({
  border: 'solid 3px',
  borderRadius: '10px',
  height: '200px',
  padding: '0.5em',
  margin: '0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  '@media (max-width: 520px)': {
    height: '175px',
  },
});

export default async function BlogCard(props) {
  let post = props.post
  return (
    <Wrapper>
      <LinkCard href = {post.link} key={post.link}>
          <strong> {post.meta.title} </strong>
          {post.meta.desc}
          <DateDiv>
            <small>Posted: {post.meta.publish_date} </small>
            <small>Updated: {post.meta.update_date} </small>
          </DateDiv>
     </LinkCard>
    </Wrapper>
  );
}