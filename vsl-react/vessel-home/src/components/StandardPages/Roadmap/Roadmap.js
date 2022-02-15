import styled from 'styled-components';
import '../../../index.css';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import blueGlow from '../../../assets/images/BLUE_round.svg';
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
	justify-content: center;
	align-items: center;
	justify: center;
	border-radius: 50px;
	position: relative;
	flex-direction: column;
	background-color: transparent;
`;

const HeroSectionWrapper = styled.div`
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

const SectionWrapper = styled.div`
	border-radius: 15px;
	padding-top: 48px;
	padding-left: 24px;
	padding-right: 24px;
	width: 80%;
	display: flex;
	/* fix for Firefox */
	justify-content: center;
	align-items: center;
	position: relative;
	flex-direction: column;
	background-color: transparent;
	@media ${bp.xxs} {
		flex-direction: column;
	}
	@media ${bp.xs} {
		flex-direction: column;
	}
	@media ${bp.sm} {
		flex-direction: row;
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

const AboutPara = styled.p`
	color: ${theme.color.text.primary};
	max-width: 700px;
	text-align: flex-start;
	font-size: 18px;
	@media ${bp.sm} {
		text-align: left;
	}
`;

const RoadmapPara = styled.div`
	color: #fff;
	width: 100%;
	font-family: Arial;
	padding: 30px 30px 60px 30px;
	border: 4px solid ${props => roadmapColorPicker(props)};
	border-radius: 20px;
	margin-bottom: 30px;
	margin-top: 30px;
	margin-right: 30px;
	margin-left: 30px;
	-webkit-box-shadow: 0px 0px 16px 0px ${props => roadmapColorPicker(props)};
	-moz-box-shadow: 0px 0px 16px 0px ${props => roadmapColorPicker(props)};
	box-shadow: 0px 0px 16px 0px ${props => roadmapColorPicker(props)};
	min-width: 300px;
	height: 12%;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	@media ${bp.xs} {
		height: 12%;
	}
	@media ${bp.sm} {
		height: 550px;
	}
	@media ${bp.md} {
		height: 560px;
	}
	@media ${bp.lg} {
		height: 535px;
	}
	@media ${bp.xl} {
		height: 475px;
	}
`;
const RoadmapSubPara = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	font-family: 'expletus-sans-regular';
	padding: 20px 20px 20px 20px;
	border: 4px solid ${props => roadmapColorPicker(props)};
	-webkit-box-shadow: 0px 0px 10px 0px ${props => roadmapColorPicker(props)};
	-moz-box-shadow: 0px 0px 10px 0px ${props => roadmapColorPicker(props)};
	box-shadow: 0px 0px 10px 0px ${props => roadmapColorPicker(props)};
	border-radius: 20px;
	background: ${props =>
		props.milestone
			? `linear-gradient(
	250deg
	,#376fbf 0%,#00bea8 100%);`
			: ``};
	width: 100%;
	@media ${bp.sm} {
		min-width: 232px;
		text-align: center;
	}
`;

const RoadmapTitle = styled.h1`
	font-weight: bold;
	color: ${props => roadmapColorPicker(props)};
	font-size: 72px;
	font-family: 'IBMPlexMono-Light';
`;

const RoadMapSubParaContainer = styled.div`
	height: 75%;
	flex-direction: column;
	align-items: center;
	@media ${bp.sm} {
		text-align: center;
		display: flex;
		justify-content: center;
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

const roadmapColorPicker = col => {
	return col.one ? '#51ECCD' : col.two ? '#54FFFC' : col.three ? '#57F0FE' : col.four ? '#56CFFE' : 'red';
};

const RoadmapPage = () => {
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
						<HeroSectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParent></AboutImageParent>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Roadmap</AboutSectionHeader>
									<AboutPara>
										The Vessel Protocol aims to bring one of the most proven utilities on
										traditional markets, mutual funds, onto the decentralized web.
									</AboutPara>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</HeroSectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurRight src={blueGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<RoadmapPara one>
								<RoadmapTitle one>
									Q1 <span style={{ color: '#fff' }}>2022:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara one>
										<span style={{ color: '#51ECCD' }}>vsl</span> whitepaper and smart contract
									</RoadmapSubPara>
									<RoadmapSubPara one>developer revisions and audits</RoadmapSubPara>
									<RoadmapSubPara one>
										<span style={{ color: '#51ECCD' }}>vsl</span>.finance + app.
										<span style={{ color: '#01FFFE' }}>vsl.finance</span>
									</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
							<RoadmapPara two>
								<RoadmapTitle two>
									Q2 <span style={{ color: '#fff' }}>2022:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara two>
										ICO, seed funding, private sales -{' '}
										<span style={{ color: '#51ECCD', fontFamily: 'IBMPlexMono-Light' }}>
											$5,000,000
										</span>{' '}
										target
									</RoadmapSubPara>
									<RoadmapSubPara two>
										third party audit of vsl smart contract and logic
									</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
						</SectionWrapper>
						<BackgroundBlurLeft src={blueGlow} alt="Green Glow" />
						<SectionWrapper>
							<RoadmapPara three>
								<RoadmapTitle three>
									Q4 <span style={{ color: '#fff' }}>2022:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara three>T1 exchange listings</RoadmapSubPara>
									<RoadmapSubPara three milestone>
										V2: seigniorage shares peg
									</RoadmapSubPara>
									<RoadmapSubPara three>V2: custom asset class staking</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
							<RoadmapPara four>
								<RoadmapTitle four>
									Q1 <span style={{ color: '#fff' }}>2023:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara four milestone>
										V3: vsl.exchange launch
									</RoadmapSubPara>
									<RoadmapSubPara four>V3: governance of exchange policies</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
							<BackgroundBlurRight src={blueGlow} alt="Green Glow" />
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default RoadmapPage;
