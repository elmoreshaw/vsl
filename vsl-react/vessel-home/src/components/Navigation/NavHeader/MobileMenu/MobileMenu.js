import NavItemMobile from '../NavItemMobile/NavItemMobile';
import theme from '../../../Theme/theme';
import styled from 'styled-components';
import PrimaryButton from '../../../Button/Primary/PrimaryButton';
import 'react-slidedown/lib/slidedown.css';

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

const ButtonContainer = styled.div`
	margin: 10px 0;
	box-sizing: border-box;
	display: block;
	width: 100%;
	padding: 10px;
	color: ${theme.color.text.primary};
	text-decoration: none;
	text-align: center;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 2.5em;
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
			<NavItemMobile link="/Documentation" toggle={toggleMobileMenu} exact={true}>
				Documentation
			</NavItemMobile>
			<Divider />
			<ButtonContainer>
				<PrimaryButton>Launch dApp</PrimaryButton>
			</ButtonContainer>
		</StyledNav>
	);
};

export default MobileMenu;
