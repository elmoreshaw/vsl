import styled from 'styled-components';
import theme from '../../Theme/theme';
import bp from '../../Theme/breakpoints';
import Footer from '../../Navigation/Footer/Footer';
import greenGlow from '../../../assets/images/GREEN_round.svg';
import convenienceIcon from '../../../assets/svgs/convenience.svg';
import safetyIcon from '../../../assets/svgs/safety.svg';
import trustIcon from '../../../assets/svgs/eye.svg';
import diversificationIcon from '../../../assets/images/sphere.svg';
import stakingIcon from '../../../assets/images/staking.svg';
import controlIcon from '../../../assets/images/control.svg';
import lockIcon from '../../../assets/images/lock.svg';
import growthIcon from '../../../assets/images/growth.svg';
import mathIcon from '../../../assets/images/sigma.svg';
import etf2d from '../../../assets/images/etf2d.png';
import multifaceted from '../../../assets/images/network.png';
import community from '../../../assets/images/community.png';
import blocks from '../../../assets/images/blocks.png';
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
	width: 80%;
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
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${bp.lg} {
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${bp.xl} {
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
		min-width: 320px;
	}
	@media ${bp.xl} {
		min-width: 400px;
	}
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 24px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const BoxIconSpecial = styled.img`
	width: 60px;
	filter: invert(1);
	display: flex;
	margin-bottom: 10px;
`;

const ContentTextWrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	max-width: 500px;
	justify-content: center;
	@media ${bp.sm} {
		align-items: flex-start;
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
									<AboutSectionHeader>Our Mission</AboutSectionHeader>
									<BoxContentWrapper>
										<BoxContent>
											<BoxIconSpecial src={convenienceIcon} />
											<BoxHeader>Convenience</BoxHeader>
											To simplify the entry point for cryptocurrency investment and to increase
											the accessibility to the rewards of passive, diversified investing.
										</BoxContent>
										<BoxContent>
											<BoxIconSpecial src={trustIcon} />
											<BoxHeader>Trust</BoxHeader>
											To guarantee transparency and offer a sense of community in the way Vessel
											Protocol operates.
										</BoxContent>
										<BoxContent>
											<BoxIconSpecial src={safetyIcon} />
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
							<AboutWrapperTextLeft>
								<AboutImageParent>
									<AboutImg src={etf2d} alt="etf2d" />
								</AboutImageParent>
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
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutImageParent>
									<AboutImg src={community} alt="community" />
								</AboutImageParent>
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

				<BackgroundBlurRight src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextLeft>
								<AboutImageParent>
									<AboutImg src={multifaceted} alt="multifaceted" />
								</AboutImageParent>
								<ContentTextWrapperContainer>
									<AboutSectionHeader>A Multi-Faceted Returns Suite</AboutSectionHeader>
									<AboutPara>
										Returns are provided to Vessel investors in many ways, including automated
										staking rewards, bounty rewards for Epoch initiation, deflationary rewards by
										way of transation tax, and more mechanisms coming soon.
									</AboutPara>
								</ContentTextWrapperContainer>
							</AboutWrapperTextLeft>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurLeft src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<AboutImageParent>
									<AboutImg src={blocks} alt="blocks" />
								</AboutImageParent>
								<ContentTextWrapperContainer>
									<AboutSectionHeader>A Reserve Based Environment</AboutSectionHeader>
									<AboutPara>
										The Vessel Protocol runs of a strict, mathematically-ensured algorithm that
										adjusts the pricing of the $VSL token to match the reserve assets. by adjusting
										the size of the circulating supply, Supply Vault and Burn Vault. All this allows
										for the most accurate net asset value price emulations in DeFi yet.
									</AboutPara>
								</ContentTextWrapperContainer>
							</AboutWrapperTextRight>
						</SectionWrapper>
					</AboutSection>
				</AnimationOnScroll>

				<BackgroundBlurRight src={greenGlow} alt="Green Glow" />
				<AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
					<AboutSection>
						<SectionWrapper>
							<AboutWrapperTextRight>
								<ContentTextWrapperContainer>
									<AboutSectionHeader>Why Vessel?</AboutSectionHeader>
									<BoxContentWrapper>
										<BoxContent>
											<BoxIconSpecial src={diversificationIcon} />
											<BoxHeader>Diversification</BoxHeader>
											Vessel's ability to combine a diversified portfolio into a single token
											allows access to a wider variety of investments, reducing the risk of market
											volatility affecting your returns.
										</BoxContent>
										<BoxContent>
											<BoxIconSpecial src={mathIcon} />
											<BoxHeader>Mathematically Backed</BoxHeader>
											Vessel protocol's entire logic is mathematically backed and proven. Every
											algorithm within the contract has been rigorously tested to comply with the
											protocol's intent.
										</BoxContent>
										<BoxContent>
											<BoxIconSpecial src={stakingIcon} />
											<BoxHeader>Automated Staking</BoxHeader>
											Vessel's automatic staking mechanism allows investors to passively earn more
											$VSL the longer they hold it. This type of staking strips away the need for
											investors to do anything other than hold, as rewards are automatically
											transferred to their wallets.
										</BoxContent>
										<BoxContent>
											<BoxIconSpecial src={controlIcon} />
											<BoxHeader>Guaranteed Control of Fund Evolution</BoxHeader>
											Vessel Protocol allows every single investor to vote on the reserve assets
											the the $VSL token are based on. This give all investors equal opportunity
											to make their own contributions on how the fund evolves.
										</BoxContent>
										<BoxContent>
											<BoxIconSpecial src={lockIcon} />
											<BoxHeader>Access to No One</BoxHeader>
											The Vessel Team has incredibly strict and minimal access to the controls of
											the Vessel Protocol, meaning that your funds will not be touched or meddled
											with by anyone, INCLUDING us.
										</BoxContent>
										<BoxContent>
											<BoxIconSpecial src={growthIcon} />
											<BoxHeader>An Evolving Suite of Products</BoxHeader>
											Vessel intends on launching their V2 and V3 versions of the Vessel protocol
											within the next two years, implementing mechanisms such as multiple asset
											class investing and seigniorage, providing a plethora of investment
											opportunities to all investors.
										</BoxContent>
									</BoxContentWrapper>
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
