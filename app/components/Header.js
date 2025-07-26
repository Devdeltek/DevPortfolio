import NavBar from './NavBar'
import Link from 'next/link'
import { styled } from '@pigment-css/react';

const Name = styled(Link)(({ theme }) => ({
	display: 'inline-block',
	margin: theme.spacing.buffer,
	padding: theme.spacing.buffer,
	paddingRight: theme.spacing.bufferLarge,
	borderRight: '1px solid ' + theme.colorSchemes.light.colors.accent,
	paddingLeft: theme.spacing.pageMarginsSmall,
	fontSize: theme.typography.fontSize.extraLarge,
	color: theme.colorSchemes.light.colors.text
}));


const Banner = styled('header')(({ theme }) => ({
	position: 'sticky',
	top: '0',
	zIndex: '999',
	display: 'flex',
    justifyContent: 'flex-start',
    borderBottom: '3px solid ' + theme.colorSchemes.light.colors.accent,
    backgroundColor: theme.colorSchemes.light.colors.forground,
}));

export default function Header(){
	return (
		<Banner>
			<Name href = '/'>
				Devin Delaney
			</Name>
			<NavBar/>
		</Banner>
	);
}