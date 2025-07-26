import SocialLinks from './SocialsLinks'
import Email from './Email'
import { styled } from '@pigment-css/react'

const DocumentFooter = styled('footer')(({ theme }) => ({
	display: 'flex',
    justifyContent: 'space-evenly',
    borderTop: '3px solid ' + theme.colorSchemes.light.colors.accent,
    backgroundColor: theme.colorSchemes.light.colors.forground,
    minHeight: '50px',
}));


export default function Footer(){
	return (
		<DocumentFooter>
			<Email />
			<SocialLinks />
		</DocumentFooter>
	);
}