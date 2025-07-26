import Link from 'next/link'
import { styled, css } from '@pigment-css/react';


const NavLink = styled(Link)(({ theme }) => ({
	padding: theme.spacing.buffer,
}));

export default function NavBar(){
	return (
		<nav>
			<NavLink href = '/'>
          		Home
        	</NavLink>
			<NavLink href = '/blog'>
          		Blog
        	</NavLink>
		</nav>
	);
}