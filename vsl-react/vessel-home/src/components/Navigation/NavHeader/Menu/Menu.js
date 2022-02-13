import styled from 'styled-components';
import bp from '../../../Theme/breakpoints';
import PrimaryButton from '../../../Button/Primary/PrimaryButton';
import NavItem from '../NavItem/NavItem';

const MenuNav = styled.nav`
	font-weight: bold;
	display: none;

	@media ${bp.sm} {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

const Menu = () => {
	return (
		<MenuNav>
			<NavItem link="/">Home</NavItem>
			<NavItem link="/About">About</NavItem>
			<NavItem link="/Roadmap">Roadmap</NavItem>
			<NavItem link="/Tokenomics">Tokenomics</NavItem>
			<NavItem link="/Documentation">Documentation</NavItem>
			<PrimaryButton>Connect Wallet</PrimaryButton>
		</MenuNav>
	);
};

export default Menu;
