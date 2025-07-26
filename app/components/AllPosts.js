import { BlogListByUpdate, BlogListByAlpha, BlogListByCategory, BlogListByTags } from '../components/BlogPostsList'
import { styled } from '@pigment-css/react'

const Background = styled('div')(({ theme }) => ({
	backgroundColor: theme.colorSchemes.light.colors.forground,
	padding: theme.spacing.buffer,
	borderRadius: theme.spacing.curveRadius,
}));

export default function AllPosts() {
	return(
		<Background>
			<section>
				<h2 id="lastUpdated"> All Posts Sorted By Last Updated: </h2>
				<BlogListByUpdate />
			</section>

			<section>
				<h2 id="alphabetical"> All Posts Sorted Alphabetically: </h2>
				<BlogListByAlpha />
			</section>

			<section>
				<h2 id="byCategory"> Posts Per Category: </h2>
				<BlogListByCategory />
			</section>

			<section>
				<h2 id="byTags"> Posts Per Tag: </h2>
				<BlogListByTags />
			</section>
		</Background>
	)
}
