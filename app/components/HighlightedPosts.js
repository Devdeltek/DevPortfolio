import { BlogGrid } from './BlogPostsGrid'
import { styled } from '@pigment-css/react'

const PostsBackground = styled('section')(({ theme }) => ({
	backgroundColor: theme.colorSchemes.light.colors.forground,
	padding: theme.spacing.buffer,
	borderRadius: theme.spacing.curveRadius,
	 boxShadow: '0 4px 8px 0 Gray, 0 6px 20px 0 DarkGray',
}));

export default function HighlightedPosts(){
	return (
		<PostsBackground>
			<h2> Highlighted Projects: </h2>
			<BlogGrid head={5}/>
		</PostsBackground>
	)
};