import NavBar from './NavBar'
import Link from 'next/link'
import { styled } from '@pigment-css/react';

const Name = styled('div')({
	margin: '.5em',
	padding: '.5em',
	borderRight: '1px solid black',
	paddingLeft: '2vw',
	color: 'black',
	fontSize: '1.5em',
});

export default function Header(){
	return (
		<header>
			<Name>
				<Link href = '/'>
					Devin Delaney
				</Link>
			</Name>
			<NavBar/>
		</header>
	);
}