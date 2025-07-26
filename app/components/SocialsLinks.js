import { FaLinkedin } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaLetterboxd } from "react-icons/fa6";
import { styled } from "@pigment-css/react"
import Link from "next/link"

const Container = styled('section')({
	textAlign: 'center',
	alignContent: 'center',
});

const NavLink = styled(Link)(({ theme }) => ({
	padding: theme.spacing.buffer,
	margin: theme.spacing.buffer,
}));

export default function SocialLinks(){
	return(
		<Container>
			<strong> Social Media Links </strong>
			<br/>
			<NavLink href = 'https://github.com/Devdeltek' title="Github" aria-label="Github">
				<FaGithubAlt aria-label="Github Logo" />
			</NavLink>
			<NavLink href = 'https://www.linkedin.com/in/devdeltek/' title="Linkedin" aria-label="Linkedin">
				<FaLinkedin aria-label="Linkedin Logo"/>
			</NavLink>
			<NavLink href = 'https://letterboxd.com/devdeltek/' title="Letterboxd" aria-label="Letterboxd">
				<FaLetterboxd aria-label="Letterboxd Logo"/>
			</NavLink>
		</Container>
	)
}