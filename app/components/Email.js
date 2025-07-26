import { styled } from "@pigment-css/react"
import Link from "next/link"

const Container = styled('section')({
	textAlign: 'center',
	alignContent: 'center',
});

export default function SocialLinks(){
	return(
		<Container>
			<strong> Contact Me </strong>
			<br/>
			<address>
				<a href="mailto:contact@devdeltek.com">
					dev.del2024@gmail.com
				</a>
			</address>
		</Container>
	)
}