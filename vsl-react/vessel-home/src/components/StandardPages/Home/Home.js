import styled from 'styled-components';
import theme from '../../Theme/theme';
import ETF_big from '../../../assets/images/etf_big.png';
import vault from '../../../assets/images/vault_render_big.png';
import graph from '../../../assets/images/vsl_graph_both.png';
import lock from '../../../assets/images/lock_cube.png';
import scales from '../../../assets/images/scales_zoomed_cropped_4.png';
import InformationButtonAccent from '../../Button/InformationButtonAccent/InformationButtonAccent';
import PrimaryButton from '../../Button/Primary/PrimaryButton';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import blueGlow from '../../../assets/images/BLUE_round.svg';
import greenGlow from '../../../assets/images/GREEN_round.svg';
import pinkGlow from '../../../assets/images/PINK_round.svg';
import darkBlueGlow from '../../../assets/images/PURPLE_round.svg';
import WHB from '../../../assets/images/Web-Header-Background.svg';
import SSTarrow from '../../../assets/images/uiButtons/double-arrow-up.svg';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollToTop from 'react-scroll-to-top';
import { useHistory } from 'react-router';

const PageWrapper = styled.div`
	padding: 0 28px 64px 28px;
	max-width: 1560px;
	margin: 0 auto;
	height: 100%;
	background-color: transparent;
	position: relative;
	overflow: hidden;
	@media ${bp.sm} {
		position: relative;
	}
	@media ${bp.xl} {
		position: relative;
		max-height: 100%;
	}
`;

const AboutSection = styled.section`
	display: flex;
	justify-content: space-between;
	border-radius: 50px;
	position: relative;
	background-color: transparent;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding-top: 20px;
	position: relative;
`;

const SectionWrapper = styled.div`
	border-radius: 15px;
	padding: 48px 24px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: transparent;
`;

const HeroSectionWrapper = styled.div`
	border-radius: 15px;
	padding: 0px 5% 24px 5%;
	margin-top: 0px;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	position: relative;
	background-color: transparent;
	@media ${bp.sm} {
		padding: 0px 5% 24px 5%;
	}
`;

const AboutSectionHeader = styled.h1`
	max-width: 700px;
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 36px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 60px;
	}
`;

const AboutImageParent = styled.div`
	width: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 400px;
		align-items: center;
		display: flex;
	}
`;

const AboutImg = styled.img`
	max-width: 60%;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 70%;
	}
	@media ${bp.xl} {
		max-width: 80%;
	}
`;

const AboutPara = styled.p`
	color: ${theme.color.text.secondary};
	max-width: 700px;
	text-align: flex-start;
	font-size: 18px;
	@media ${bp.sm} {
		text-align: left;
	}
`;

const AboutWrapperTextLeft = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	@media ${bp.sm} {
		width: 90%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
`;

const AboutWrapperTextRight = styled.div`
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	@media ${bp.sm} {
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
`;

const AboutTextWrapperContainer = styled.div`
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media ${bp.sm} {
		align-items: flex-start;
	}
`;

const HeroSectionHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-top: 0px;
	margin-bottom: 0px;
	text-align: flex-start;
	max-width: 900px;
	font-size: 46px;
	@media ${bp.sm} {
		margin-top: 0px;
		margin-bottom: 16px;
		text-align: left;
		font-size: 80px;
	}
`;

const HeroImg = styled.img`
	margin-top: 0px;
	max-width: 70%;
	margin-bottom: 24px;
	@media ${bp.sm} {
		max-width: 100%;
		margin-top: 0px;
	}
`;

const HeroPara = styled.p`
	color: ${theme.color.text.primary};
	max-width: 900px;
	text-align: flex-start;
	font-size: 18px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 24px;
	}
`;

const HeroWrapper = styled.div`
	position: relative;
	background-color: transparent;
	max-width: 900px;
	@media ${bp.sm} {
		max-width: 100vw;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		position: relative;
	}
`;

const HeroTextWrapper = styled.div`
	max-width: 900px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-right: 50px;
	@media ${bp.sm} {
		align-items: flex-start;
	}
`;

const SSTimg = styled.img`
	width: 30px;
`;

const BackgroundBlurLeft = styled.img`
	left: -30%;
	opacity: 30%;
	position: absolute;
	z-index: -1;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		left: -5%;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		left: -1%;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const BackgroundBlurRight = styled.img`
	position: absolute;
	z-index: -1;
	opacity: 30%;
	right: 0;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}

	@media ${bp.xl} {
		right: 0;
		max-width: 100%;
		margin-top: -100px;
	}
`;

const BackgroundBlurCenter = styled.img`
	position: absolute;
	z-index: -1;
	opacity: 80%;
	right: 0;
	min-width: 800px;
	min-height: 600px;
	margin-top: -100px;
	object-fit: fill;
	@media ${bp.sm} {
		min-width: 100%;
		margin-top: -100px;
	}
`;

const HomePage = () => {
	const history = useHistory();

	return (
		<>
			<ScrollToTop
				smooth
				width="480"
				height="480"
				color="#ffffff"
				style={{
					'background-color': 'transparent',
					'box-shadow': 'none',
					transition: 'opacity 1s ease-in-out',
					'&:active': {
						visibility: 'visible',
						transition: 'opacity 1s ease-in-out',
						opacity: '1',
					},
				}}
				component={<SSTimg src={SSTarrow} alt="sst" />}
			/>
			<BackgroundBlurCenter src={WHB} alt="header wave" />
			<PageWrapper>
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<HeroSectionWrapper>
							<HeroWrapper>
								<AboutImageParent>
									<HeroImg src={ETF_big} alt="etf-img" />
								</AboutImageParent>
								<HeroTextWrapper>
									<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
										<HeroSectionHeader>Welcome Aboard</HeroSectionHeader>
									</AnimationOnScroll>
									<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true" delay="500">
										<HeroPara>The first synthetic deflationary DeFi mutual fund.</HeroPara>
									</AnimationOnScroll>
									<ButtonContainer>
										<PrimaryButton>Launch dApp</PrimaryButton>
									</ButtonContainer>
								</HeroTextWrapper>
							</HeroWrapper>
						</HeroSectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurRight src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParent>
									<AboutImg src={vault} alt="vault" />
								</AboutImageParent>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Synthetic Mutual Fund.</AboutSectionHeader>
									<AboutPara>
										Our token is backed by a carefully selected collection of blue-chip
										cryptocurrencies.
									</AboutPara>
									<ButtonContainer>
										{/* anchor link to synthetic mutual fund About section */}
										<InformationButtonAccent onClick={() => history.push('/About')}>
											Learn More
										</InformationButtonAccent>
									</ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={blueGlow} alt="blue Glow" />

				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutImageParent>
									<AboutImg src={graph} alt="graphs" />
								</AboutImageParent>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Do Better Than The Market.</AboutSectionHeader>
									<AboutPara>
										Our protocol exposes you to a variety of top-tier tokens that are set to do
										better than most.
									</AboutPara>
									<ButtonContainer>
										{/* anchor link to market analysis About section */}
										<InformationButtonAccent onClick={() => history.push('/About')}>
											Learn More
										</InformationButtonAccent>
									</ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurRight src={darkBlueGlow} alt="dark blue Glow" />

				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParent>
									<AboutImg src={lock} alt="lock" />
								</AboutImageParent>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Maximal Safety, Minimal Risk.</AboutSectionHeader>
									<AboutPara>
										Built-in diversification, decentralized governance, and deflationary mechanisms
										keep your asset's value protected and secure.
									</AboutPara>
									{/* anchor link to DAO, deflation and safety section About section */}
									<ButtonContainer>
										<InformationButtonAccent onClick={() => history.push('/About')}>
											Learn More
										</InformationButtonAccent>
									</ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={pinkGlow} alt="pink Glow" />

				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutImageParent>
									<AboutImg src={scales} alt="scales" />
								</AboutImageParent>
								<AboutTextWrapperContainer>
									{/* anchor link to Reserve and supply About section */}
									<AboutSectionHeader>Reserve Vault & Burns.</AboutSectionHeader>
									<AboutPara>
										Utilising a reserve vault of tokens that can be altered in supply to affect the
										$VSL price to match the mutual fund.
									</AboutPara>
									<ButtonContainer>
										<InformationButtonAccent onClick={() => history.push('/About')}>
											Learn More
										</InformationButtonAccent>
									</ButtonContainer>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default HomePage;
