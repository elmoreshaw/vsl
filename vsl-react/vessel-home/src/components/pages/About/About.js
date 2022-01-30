import styled from 'styled-components';
import theme from '../../Theme/theme';
import ETF_big from '../../../assets/images/etf_big.png';
import vault from '../../../assets/images/vault_render_big.png';
import graph from '../../../assets/images/vsl_graph_both.png';
import lock from '../../../assets/images/lock_cube.png';
import scales from '../../../assets/images/scales_zoomed_cropped_4.png';
import InformationButton from '../../Button/InformationButton/InformationButton';
import InformationButtonAccent from '../../Button/InformationButtonAccent/InformationButtonAccent';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import blueGlow from '../../../assets/images/BLUE_round.svg';
import greenGlow from '../../../assets/images/GREEN_round.svg';
import pinkGlow from '../../../assets/images/PINK_round.svg';
import darkBlueGlow from '../../../assets/images/PURPLE_round.svg';
import boat from '../../../assets/svgs/boat.svg';
import SSTarrow from '../../../assets/images/uiButtons/double-arrow-up.svg';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ScrollToTop from 'react-scroll-to-top';
import { useEffect } from 'react';

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
	padding: 48px 24px 0 24px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: transparent;
`;

const AboutSectionHeader = styled.h1`
	max-width: 700px;
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 36px;
	@media ${bp.sm} {
		text-align: left;
		font-size: 50px;
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

const BoxContentWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 28px;
	grid-row-gap: 28px;
	margin: 20px;
	@media ${bp.sm} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${bp.md} {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const BoxContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.sm} {
		min-width: 300px;
	}
	@media ${bp.lg} {
		min-width: 400px;
	}
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 24px;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const ContentTextWrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	@media ${bp.sm} {
		align-items: flex-start;
	}
`;

const AboutSectionSpecialHeader = styled.h1`
	max-width: 700px;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;
	text-align: right;
	font-size: 20px;
	@media ${bp.sm} {
		text-align: right;
	}
`;

const AboutPage = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, []);

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
			<PageWrapper>
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParent>
									<AboutImg src={boat} alt="boat" />
								</AboutImageParent>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>What Is Vessel Finance?</AboutSectionHeader>
									<AboutPara>
										Vessel Finance is a platform which offers the Vessel Protocol, one that is
										designed to bring one of Traditional Finance’s markets’ most proven utilities,
										mutual funds, onto the decentralized web.
									</AboutPara>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Our Mission:</AboutSectionHeader>
									<BoxContentWrapper>
										<BoxContent>
											<BoxHeader>Convenience</BoxHeader>
											To simplify the entry point for cryptocurrency investment and to increase
											the accessibility to the rewards of passive, diversified investing.
										</BoxContent>
										<BoxContent>
											<BoxHeader>Trust</BoxHeader>
											To guarantee transparency and offer a sense of community in the way Vessel
											Protocol operates.
										</BoxContent>
										<BoxContent>
											<BoxHeader>Safety</BoxHeader>
											To minimize risk and maximize return for our investors with built-in asset
											diversification, decentralized governance and deflationary mechanisms with
											guaranteed reflection (staking) rewards.
										</BoxContent>
									</BoxContentWrapper>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurRight src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutSectionSpecialHeader>DIVERSIFIED ASSETS.</AboutSectionSpecialHeader>
								<ContentTextWrapperContainer>
									<AboutSectionHeader>A Synthetic Mutual Fund</AboutSectionHeader>
									<AboutPara>
										Most ETF tokens work by ”wrapping” a set of reserve assets. Our protocol,
										however, emulates the price action of the assets with the help of token reserves
										and token burns, making it synthetic.
									</AboutPara>
									<AboutPara>
										This approach, paired with the usual benefits of mutual funds, allows the Vessel
										Protocol to change the way you invest in the cryptocurrency world.
									</AboutPara>
								</ContentTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutSectionSpecialHeader>MORE POWER TOGETHER.</AboutSectionSpecialHeader>
								<ContentTextWrapperContainer>
									<AboutSectionHeader>A Community Based Token</AboutSectionHeader>
									<AboutPara>
										The Vessel Protocol implements decentralized autonomous organization (DAO) in
										the way that the protocol operates. Investors have the ability to vote and
										decide on the reserve assets that the $VSL token are based on, giving investors
										the power to influence the price action of the token and it's returns to a
										higher degree.
									</AboutPara>
								</ContentTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default AboutPage;
