import Link from 'next/link'
import { styled, css } from '@pigment-css/react';


const NavLink = styled('Link')({
	paddingLeft: '.5em',
	marginLeft: '.5em',
	color: 'black',
	fontSize: '1em',
});

export default function NavBar(){
	return (
		<nav>
			<Link href = '/'>
          		Home
        	</Link>
			<Link href = '/blog'>
          		Blog
        	</Link>
		</nav>
	);
}