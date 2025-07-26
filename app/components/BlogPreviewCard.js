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

const Wrapper = styled('article')(({ theme }) => ({
  width: '25%',
  minWidth: '12em',
  margin: theme.spacing.buffer,
  padding: '0px',
  boxShadow: '5px 5px 3px DarkGray',
  '@media (max-width: 520px)': {
    fontSize: 'clamp(.75em, 3vw, 1em)',
    width: '45%',
    minWidth: '6em',
  },
}));

const DateDiv = styled('span')({
  display: 'flex',
  justifyContent: 'space-between',
});


const LinkCard = styled(Link)(({ theme }) => ({
  border: 'solid 3px ' + theme.colorSchemes.light.colors.accent,
  borderRadius: theme.spacing.curveRadius,
  height: '16em',
  padding: theme.spacing.buffer,
  margin: '0px',
  backgroundColor: theme.colorSchemes.light.colors.forground,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  '@media (max-width: 520px)': {
    height: '16em',
  },
}));

export default async function BlogCard(props) {
  let post = props.post
  return (
    <Wrapper>
      <LinkCard href = {post.link} key={post.link}>
        <h3> {post.meta.title} </h3>
        {post.meta.desc}
        <DateDiv>
          <small>Posted: {post.meta.publish_date} </small>
          <small>Updated: {post.meta.update_date} </small>
        </DateDiv>
     </LinkCard>
    </Wrapper>
  );
}