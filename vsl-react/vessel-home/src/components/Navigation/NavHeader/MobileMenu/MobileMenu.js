import NavItemMobile from '../NavItemMobile/NavItemMobile';
import theme from '../../../Theme/theme';
import styled from 'styled-components';
import bp from '../../../Theme/breakpoints';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const SSTimg = styled.img`
	width: 30px;
`;

const StyledNav = styled.nav`
	background: ${theme.color.background.secondary};
	position: fixed;
	padding-bottom: 5px;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 100;
	display: canvas;
	flex-direction: column;
	align-items: center;
	padding-top: 8%;
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;
	transition: all 5s ease;
	transform: translateY(0%);
`;

const Divider = styled.hr`
	border-top: 1px #111111;
	width: 100%;
	opacity: 30%;
`;

const HamburgerButton = styled.button`
	display: inline-flex;
	flex-direction: row-reverse;
	position: absolute;
	right: 20px;
	top: 20px;
	height: 18px;
	width: 18px;
	opacity: 100%;
	background-color: transparent;
	border: none;
	z-index: 9999;
	transition: all 0.5s ease;
	&:hover {
		cursor: pointer;
		opacity: 70%;
		transform: rotate(180deg);
	}
`;

const XBar1 = styled.span`
	width: 2px;
	height: 18px;
	border: 1px solid white;
	background-color: white;
	transform: rotate(45deg) translateX(-0.1em) translateY(0.1em);
`;

const XBar2 = styled.span`
	width: 2px;
	height: 18px;
	border: 1px solid white;
	background-color: white;
	transform: rotate(-45deg);
`;

const MobileMenu = ({ toggleMobileMenu }) => {
	return (
		<StyledNav>
			<HamburgerButton onClick={toggleMobileMenu}>
				<XBar1 />
				<XBar2 />
			</HamburgerButton>
			<NavItemMobile link="/" toggle={toggleMobileMenu} exact={true}>
				Home
			</NavItemMobile>
			<Divider />
			<NavItemMobile link="/About" toggle={toggleMobileMenu} exact={true}>
				About
			</NavItemMobile>
			<Divider />
			<NavItemMobile link="/Roadmap" toggle={toggleMobileMenu} exact={true}>
				Roadmap
			</NavItemMobile>
			<Divider />
			<NavItemMobile link="/Tokenomics" toggle={toggleMobileMenu} exact={true}>
				Tokenomics
			</NavItemMobile>
			<Divider />
			<NavItemMobile link="/Whitepaper" toggle={toggleMobileMenu} exact={true}>
				Whitepaper
			</NavItemMobile>
		</StyledNav>
	);
};

export default MobileMenu;
