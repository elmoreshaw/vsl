import styled, { css } from 'styled-components';
import theme from '../../Theme/theme';
import TokenomicsChart from '../../Charts/TokenomicsChart';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import pinkGlow from '../../../assets/images/PINK_round.svg';
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

const AboutPara = styled.p`
	color: ${theme.color.text.primary};
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
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 28px;
	grid-row-gap: 28px;
	margin: 20px;
	@media ${bp.sm} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${bp.md} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${bp.lg} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${bp.xl} {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const BoxContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 24px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	text-align: center;
	color: ${theme.color.text.primary};
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.sm} {
		min-width: 300px;
	}
	@media ${bp.md} {
		min-width: 200px;
	}
	@media ${bp.lg} {
		min-width: 300px;
	}
	@media ${bp.xl} {
		min-width: 300px;
	}
`;

const BoxHeaderKey = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: center;
	font-size: 40px;
	display: flex;
	justify-content: center;
	padding-bottom: 4px;
`;

const ChartWrapper = styled.div`
	height: 250px;
	width: 1000px;
	@media ${bp.sm} {
		height: 500px;
		width: 700px;
	}
	@media ${bp.md} {
		height: 600px;
		width: 1000px;
	}
	@media ${bp.lg} {
		height: 600px;
		width: 1000px;
	}
	@media ${bp.xl} {
		height: 600px;
		width: 1000px;
	}
`;

const TokenomicsTable = styled.div`
	display: grid;
	grid-template-columns: 2fr;
	width: 80%;
	justify-content: center;
	align-content: center;
	margin-top: 50px;
	padding-left: 30px;
	padding-right: 30px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.sm} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 8fr;
		width: 80%;
		justify-content: center;
		align-content: center;
		margin-top: 50px;
		padding-left: 30px;
		padding-right: 30px;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
`;

const ChartLegendGrid = styled.div`
	display: contents;
	grid-column-gap: 40px;
	grid-row-gap: 80px;
	height: 50px;
	margin-top: 20px;
	margin-bottom: 20px;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	border-radius: 16px;
`;

const TableContent = styled.div`
	display: flex;
	flex-direction: row;
	padding: 24px 24px 10px 24px;
	text-align: flex-start;
	color: #ffffff;
	@media ${bp.sm} {
		padding: 24px;
	}
`;

const TableContentTitle = styled.div`
	display: flex;
	flex-direction: row;
	padding: 4px 24px 4px 24px;
	text-align: flex-start;
	color: #ffffff;
	@media ${bp.sm} {
		padding: 24px;
	}
`;

const TableContentPercent = styled.div`
	display: flex;
	flex-direction: row;
	padding: 4px 24px 4px 24px;
	font-weight: 1000;
	text-align: flex-start;
	color: #ffffff;
	@media ${bp.sm} {
		padding: 24px;
	}
`;

const TableContentDesc = styled.div`
	display: flex;
	flex-direction: row;
	padding: 4px 24px 24px 24px;
	text-align: flex-start;
	color: #aaaaaa;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	@media ${bp.sm} {
		border-bottom: 1px solid rgba(255, 255, 255, 0);
		padding: 24px;
	}
`;

const GraphTabCSS = css`
	height: 15px;
	width: 15px;
	background-color: #bbb;
	border-radius: 50%;
	display: flex;
	background-color: ${({ DotColor }) => DotColor || `red`};
`;

const GraphTab = styled.span`
	${GraphTabCSS}
`;

const TokenomicsPage = () => {
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
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParent></AboutImageParent>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Tokenomics</AboutSectionHeader>
									<AboutPara>
										The $VSL Token serves as Vessel's unit for investment. The distribution of these
										units in both public and private ownership defines the structure of how Vessel
										Protocol operates.
									</AboutPara>
								</AboutTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={pinkGlow} alt="Pink Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Metrics</AboutSectionHeader>
									<BoxContentWrapper>
										<BoxContent>
											<BoxHeaderKey>$1.23</BoxHeaderKey>
											Current Price
										</BoxContent>
										<BoxContent>
											<BoxHeaderKey>100k</BoxHeaderKey>
											Holders
										</BoxContent>
										<BoxContent>
											<BoxHeaderKey>3M</BoxHeaderKey>
											Circulating Supply
										</BoxContent>
										<BoxContent>
											<BoxHeaderKey>10B</BoxHeaderKey>
											Total Supply
										</BoxContent>
									</BoxContentWrapper>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurRight src={pinkGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutTextWrapperContainer>
									<AboutSectionHeader>Distribution</AboutSectionHeader>
								</AboutTextWrapperContainer>
							</AboutWrapperTextRight>
							<ChartWrapper>
								<TokenomicsChart />
							</ChartWrapper>
						</SectionWrapper>
					</AboutSection>
					<BackgroundBlurLeft src={pinkGlow} alt="Green Glow" />
				</AnimationOnScroll>

				<AboutSection>
					<SectionWrapper>
						<TokenomicsTable>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#BF4DD3"></GraphTab>
								</TableContent>
								<TableContentTitle>Seed Sale</TableContentTitle>
								<TableContentPercent>3.00%</TableContentPercent>
								<TableContentDesc>
									20% unlocked at TGE; 20% released every 3 months afterwards.
								</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#CDB53A"></GraphTab>
								</TableContent>
								<TableContentTitle>Private Sale</TableContentTitle>
								<TableContentPercent>5.00%</TableContentPercent>
								<TableContentDesc>
									20% unlocked at TGE; 20% released every 3 months afterwards.
								</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#D1A114"></GraphTab>
								</TableContent>
								<TableContentTitle>Public Sale</TableContentTitle>
								<TableContentPercent>7.00%</TableContentPercent>
								<TableContentDesc>
									25% unlocked at TGE; Linear vesting of 25% afterwards. All unsold seed/private
									allocations added here.
								</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#99B4E3"></GraphTab>
								</TableContent>
								<TableContentTitle>Team and Advisors</TableContentTitle>
								<TableContentPercent>6.60%</TableContentPercent>
								<TableContentDesc>TBD.</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#D16764"></GraphTab>
								</TableContent>
								<TableContentTitle>Marketing</TableContentTitle>
								<TableContentPercent>1.60%</TableContentPercent>
								<TableContentDesc>10% unlocked at TGE and 5% unlocked monthly.</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#68B4CD"></GraphTab>
								</TableContent>
								<TableContentTitle>Development</TableContentTitle>
								<TableContentPercent>3.30%</TableContentPercent>
								<TableContentDesc>5% unlocked at TGE and 5% unlocked monthly.</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#4C83D4"></GraphTab>
								</TableContent>
								<TableContentTitle>Bounty</TableContentTitle>
								<TableContentPercent>2.50%</TableContentPercent>
								<TableContentDesc>
									0.01% released no less than every 7 days 1 month after TGE.
								</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#B42EC5"></GraphTab>
								</TableContent>
								<TableContentTitle>Liquid Reserves</TableContentTitle>
								<TableContentPercent>5.00%</TableContentPercent>
								<TableContentDesc>
									10% unlocked at TGE and 5% unlocked every 3 months afterwards.
								</TableContentDesc>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#63B3A2"></GraphTab>
								</TableContent>
								<TableContentTitle>Protocol Vault</TableContentTitle>
								<TableContentPercent>33.00%</TableContentPercent>
								<TableContent>
									All allocated tokens are locked to the Vessel vault upon TGE.
								</TableContent>
							</ChartLegendGrid>
							<ChartLegendGrid>
								<TableContent>
									<GraphTab DotColor="#1093D0"></GraphTab>
								</TableContent>
								<TableContentTitle>Protocol Burn</TableContentTitle>
								<TableContentPercent>33.00%</TableContentPercent>
								<TableContent>All allocated tokens are burnt upon TGE.</TableContent>
							</ChartLegendGrid>
						</TokenomicsTable>
					</SectionWrapper>
				</AboutSection>
			</PageWrapper>
			<Footer />
		</>
	);
};

export default TokenomicsPage;
