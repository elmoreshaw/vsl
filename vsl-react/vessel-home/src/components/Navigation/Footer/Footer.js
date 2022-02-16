import styled from 'styled-components';
import theme from '../../Theme/theme';
import { Link } from 'react-router-dom';
import bp from '../../Theme/breakpoints';
import twitter_img from '../../../assets/images/twitter.svg';
import github_img from '../../../assets/images/github.svg';
import discord_img from '../../../assets/images/discord.svg';

const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	text-align: center;
	width: 100%;
	padding-top: 48px;
	bottom: 2px;
	position: relative;
	align-content: center;
	justify-content: center;
	z-index: 2;
	background: rgba(17, 17, 17, 0.9);
	backdrop-filter: blur(9px);
	border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const FooterWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	width: 90%;
	max-width: 1560px;
	height: 150px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media ${bp.sm} {
		flex-direction: row;
		padding: 0;
		margin: 0;
		overflow: hidden;
		height: 80px;
		justify-content: space-between;
	}
`;

const FooterDiv = styled.div`
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -20px;
	@media ${bp.sm} {
		justify-content: center;
		height: 80px;
		align-items: center;
	}
`;

const SocialLinkImg = styled.img`
	width: 30px;
	margin-bottom: 24px;
	margin-left: auto;
	margin-right: auto;
	display: block;
	justify-content: center;
	padding: 5px;
	@media ${bp.sm} {
		width: 30px;
	}
`;

const Copyright = styled.p`
	color: ${theme.color.text.secondary};
	font-size: 12px;
	text-align: center;
	justify-content: center;
	display: flex;
	margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${theme.color.text};
	margin-bottom: 16px;
	padding: 5px;
	font-size: 12px;
	transition: all 0.2s ease;

	&:hover {
		color: ${theme.color.accentHover};
	}
`;

const StyledList = styled.ul`
	list-style: none;
	text-align: center;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	color: ${theme.color.text.primary};
	padding-left: 0;
	padding-bottom: 16px;

	@media ${bp.sm} {
		align-items: center;
	}
`;

const FooterSocials = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding-left: 0;
	padding-bottom: 16px;
	@media ${bp.sm} {
		align-items: center;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<FooterWrapper>
				<FooterDiv>
					<FooterSocials>
						<SocialLinkImg src={twitter_img} alt="twitter" />
						<SocialLinkImg src={github_img} alt="github" />
						<SocialLinkImg src={discord_img} alt="discord" />
					</FooterSocials>
				</FooterDiv>
				<FooterDiv>
					<StyledList>
						<StyledLink to="/">Home</StyledLink>
						<StyledLink to="/About">About</StyledLink>
						<StyledLink to="/Roadmap">Roadmap</StyledLink>
						<StyledLink to="/Tokenomics">Tokenomics</StyledLink>
						<StyledLink to="/Documentation">Documentation</StyledLink>
					</StyledList>
				</FooterDiv>
				<FooterDiv>
					<Copyright>Copyright Vessel © 2022</Copyright>
				</FooterDiv>
			</FooterWrapper>
		</StyledFooter>
	);
};

export default Footer;
