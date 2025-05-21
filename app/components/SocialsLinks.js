import { FaLinkedin } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLetterboxd } from "react-icons/fa6";
import { styled } from "@pigment-css/react"
import Link from "next/link"

const Container = styled('section')({
	textAlign: 'center',
	alignContent: 'center',
});

export default function SocialLinks(){
	return(
		<Container>
			<strong> Social Media Links </strong>
			<br/>
			<Link href = 'https://github.com/Devdeltek'>
				<FaGithubAlt />
			</Link>
			<Link href = 'https://www.linkedin.com/in/devdeltek/'>
				<FaLinkedin />
			</Link>
			<Link href = 'https://letterboxd.com/devdeltek/'>
				<FaLetterboxd />
			</Link>
		</Container>
	)
}