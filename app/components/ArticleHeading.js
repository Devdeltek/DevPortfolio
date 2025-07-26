import { styled } from '@pigment-css/react'

const AHeader = styled('header')(({theme}) => ({
	backgroundColor: theme.colorSchemes.light.colors.accent,
	padding: theme.spacing.buffer,
	borderRadius: theme.spacing.curveRadius,
}));

const Container = styled('span')(({theme}) => ({
	display: 'flex',
	justifyContent: 'space-between',
}));

export default function ArticleHeading(props){
	return (
		<AHeader>
			<h1> {props.info.title} </h1>
			<Container>
				<span>
					<small> By: Devin Delaney </small>
				</span>
				<span>
					<small> Published on:  {props.info.publish_date} </small>
					<br/>
					<small> Last Updated: {props.info.update_date} </small>
				</span>
			</Container>
		</AHeader>
	);
}