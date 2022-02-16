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
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
	padding: 0px 24px 0 24px;
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
	width: 40%;
	font-family: Arial;
	padding: 30px 30px 60px 30px;
	border: 4px solid ${props => roadmapColorPicker(props)};
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 20px;
	margin-bottom: 100px;
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
		width: 80%;
	}
	@media ${bp.sm} {
		height: 540px;
		width: 40%;
	}
	@media ${bp.md} {
		height: 540px;
	}
	@media ${bp.lg} {
		height: 430px;
	}
	@media ${bp.xl} {
		height: 430px;
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
	font-size: 42px;
	font-family: 'IBMPlexMono-Light';
	padding-bottom: 20px;
	@media ${bp.sm} {
		font-size: 42px;
	}
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

const SectionWrapper = styled.div`
	border-radius: 15px;
	padding: 48px 24px 0 24px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	background-color: transparent;
	@media ${bp.sm} {
		flex-direction: row;
	}
`;

const RoadmapDescription = styled.p`
	color: ${theme.color.text.primary};
	max-width: 600px;
	text-align: left;
	font-size: 18px;
	margin-bottom: 60px;
	@media ${bp.sm} {
		text-align: left;
		padding: 20px;
		margin-bottom: 0px;
	}
`;

const RoadmapDescTitle = styled.p`
	font-weight: bold;
	font-size: 14px;
	@media ${bp.sm} {
		font-size: 16px;
	}
`;

const RoadmapDescPara = styled.p`
	color: ${theme.color.text.secondary};
	margin-bottom: 30px;
	margin-left: 15px;
	font-size: 14px;
	@media ${bp.sm} {
		font-size: 16px;
	}
`;

const Divider = styled.hr`
	border-left: 1px #111111;
	height: 0px;
	width: 90%;
	margin-bottom: 30px;
	margin-left: 20px;
	margin-right: 20px;
	opacity: 30%;
	margin-top: -50px;
	@media ${bp.sm} {
		height: 400px;
		width: 0px;
	}
`;

const IndicatorListSelected = styled.li`
	color: ${theme.color.text.primary};
	padding: 10px;
	font-weight: bold;
	border-bottom: 1px solid #111111;
`;

const IndicatorList = styled.li`
	color: ${theme.color.text.secondary};
	padding: 10px;
	font-weight: bold;
`;

const roadmapColorPicker = col => {
	return col.one ? '#51ECCD' : col.two ? '#54FFFC' : col.three ? '#57F0FE' : col.four ? '#56CFFE' : 'red';
};

const RoadmapPage = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, []);

	const indicatorStyles = {
		width: '400px',
		display: 'inline',
		position: 'relative',
		'flex-direction': 'row',
		'align-content': 'start',
		'justify-content': 'center',
	};

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
					zIndex: 9999,
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
										traditional markets, mutual funds, onto the decentralized web. Our Roadmap marks
										key milestones that we are aiming for in our constant development our the Vessel
										Ecosystem.
									</AboutPara>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</HeroSectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurRight src={blueGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<Carousel
						showArrows={false}
						showStatus={false}
						swipeable={false}
						animationHandler={'fade'}
						renderIndicator={(onClickHandler, isSelected, index, label) => {
							if (isSelected) {
								return (
									<IndicatorListSelected style={indicatorStyles}>
										{' '}
										{index === 0
											? 'Q1 - 22'
											: index === 1
											? 'Q2 - 22'
											: index === 2
											? 'Q4 - 22'
											: index === 3
											? 'Q1 - 23'
											: null}{' '}
									</IndicatorListSelected>
								);
							}
							return (
								<IndicatorList
									style={indicatorStyles}
									onClick={onClickHandler}
									value={index}
									key={index}
									role="button"
									tabIndex={0}
									title={`${label} ${index + 1}`}
									aria-label={`${label} ${index + 1}`}
									text={'test'}
								>
									{' '}
									{index === 0
										? 'Q1 - 22'
										: index === 1
										? 'Q2 - 22'
										: index === 2
										? 'Q4 - 22'
										: index === 3
										? 'Q1 - 23'
										: null}
								</IndicatorList>
							);
						}}
					>
						<SectionWrapper>
							<RoadmapPara one>
								<RoadmapTitle one>
									Q1 <span style={{ color: '#fff' }}>2022:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara one>
										<span style={{ color: '#51ECCD' }}>vsl</span> Whitepaper and smart contract
									</RoadmapSubPara>
									<RoadmapSubPara one>Developer revisions and audits</RoadmapSubPara>
									<RoadmapSubPara one>
										<span style={{ color: '#51ECCD' }}>vsl</span>.finance + app.
										<span style={{ color: '#01FFFE' }}>vsl.finance</span>
									</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
							<Divider />
							<RoadmapDescription>
								<RoadmapDescTitle>• VSL whitepaper and smart contract:</RoadmapDescTitle>
								<RoadmapDescPara>
									write the vessel whitepaper and develop the smart contract that Vessel Protocol
									operates within.
								</RoadmapDescPara>
								<RoadmapDescTitle>• Developer Revisions:</RoadmapDescTitle>
								<RoadmapDescPara>
									Thorough internal testing and revisions of the logic and mathematics of smart
									contract.
								</RoadmapDescPara>
								<RoadmapDescTitle>• Vsl.finance + app.vsl.finance:</RoadmapDescTitle>
								<RoadmapDescPara>
									build the vsl.finance website and app.vsl.finance dApp for public access.
								</RoadmapDescPara>
							</RoadmapDescription>
						</SectionWrapper>
						<SectionWrapper>
							<RoadmapPara two>
								<RoadmapTitle two>
									Q2 <span style={{ color: '#fff' }}>2022:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara two>ICO, seed funding, private sales</RoadmapSubPara>
									<RoadmapSubPara two>
										Third party audit of vsl smart contract and logic
									</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
							<Divider />
							<RoadmapDescription>
								<RoadmapDescTitle>• ICO, seed funding, private sales:</RoadmapDescTitle>
								<RoadmapDescPara>
									Through conducting ICO, seed funding and private sales, we intend to aim for raising
									$5,000,000.
								</RoadmapDescPara>
								<RoadmapDescTitle>• Third party audit of VSL smart contract:</RoadmapDescTitle>
								<RoadmapDescPara>
									Recieve security audit certificate for trust and authenticity.
								</RoadmapDescPara>
							</RoadmapDescription>
						</SectionWrapper>
						<SectionWrapper>
							<RoadmapPara three>
								<RoadmapTitle three>
									Q4 <span style={{ color: '#fff' }}>2022:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara three>T1 Exchange listings</RoadmapSubPara>
									<RoadmapSubPara three milestone>
										V2: Seigniorage shares peg
									</RoadmapSubPara>
									<RoadmapSubPara three>V2: Custom asset class staking</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
							<Divider />
							<RoadmapDescription>
								<RoadmapDescTitle>• T1 Exchange listings:</RoadmapDescTitle>
								<RoadmapDescPara>
									List the VSL token on popular and accessable exchanges for purchasing.
								</RoadmapDescPara>
								<RoadmapDescTitle>• V2: Seigniorage shares peg:</RoadmapDescTitle>
								<RoadmapDescPara>Implement seigniorage into the Vessel Protocol.</RoadmapDescPara>
								<RoadmapDescTitle>• V2: Custom asset class staking:</RoadmapDescTitle>
								<RoadmapDescPara>
									Implement custom asset class staking for investors to be able to invest in their
									asset class of choice.
								</RoadmapDescPara>
							</RoadmapDescription>
						</SectionWrapper>
						<SectionWrapper>
							<RoadmapPara four>
								<RoadmapTitle four>
									Q1 <span style={{ color: '#fff' }}>2023:</span>
								</RoadmapTitle>
								<RoadMapSubParaContainer four>
									<RoadmapSubPara four milestone>
										V3: vsl.exchange launch
									</RoadmapSubPara>
									<RoadmapSubPara four>V3: Governance of exchange policies</RoadmapSubPara>
								</RoadMapSubParaContainer>
							</RoadmapPara>
							<Divider />
							<RoadmapDescription>
								<RoadmapDescTitle>• V3: vsl.exchange launch:</RoadmapDescTitle>
								<RoadmapDescPara>
									Launch the VSL Exchange Platform for users to exchange tokens.
								</RoadmapDescPara>
								<RoadmapDescTitle>• V3: Governance of exchange policies:</RoadmapDescTitle>
								<RoadmapDescPara>
									Implement DAO Governance so that VSL investors are able to vote and have power on
									the policies of the VSL Exchange Platform.
								</RoadmapDescPara>
							</RoadmapDescription>
						</SectionWrapper>
					</Carousel>
				</AnimationOnScroll>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default RoadmapPage;
