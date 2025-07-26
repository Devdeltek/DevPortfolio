import { styled } from '@pigment-css/react'

const AFooter = styled('footer')(({theme}) => ({
	backgroundColor: theme.colorSchemes.light.colors.accent,
	padding: theme.spacing.buffer,
	borderRadius: theme.spacing.curveRadius,
	textAlign: 'center',
}));

export default function ArticleFooter(){
	return(
		<AFooter>
			<p> 
				Thank you for reading! <br/>
				Feel free to message me with any suggestions or corrections at <a href="mailto:contact@devdeltek.com">contact@devdeltek.com</a>.
			</p>
		</AFooter>
	)
}