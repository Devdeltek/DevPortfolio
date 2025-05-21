import { BlogGrid } from './BlogPostsGrid'
import { styled } from '@pigment-css/react'

const PostsBackground = styled('section')(({ theme }) => ({
	backgroundColor: theme.colorSchemes.light.colors.article,
	padding: theme.spacing.horizontalSpacing,
}));

export default function Header(){
	return (
		<PostsBackground>
			<h2> Recent Projects: </h2>
			<BlogGrid />
		</PostsBackground>
	)
};