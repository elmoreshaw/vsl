import { Carousel } from 'react-responsive-carousel';
import GaugeChart from 'react-gauge-chart';
import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';
import assetLockIcon from '../../assets/svgs/assetLock.svg';

const BoxContentWrapper = styled.div`
	display: inline-grid;
	grid-template-rows: 220px 220px;
	grid-template-columns: 170px 170px;
	grid-column-gap: 28px;
	grid-row-gap: 20px;
	justify-content: center;
	@media ${bp.sm} {
		display: inline-grid;
		grid-template-rows: 250px 250px;
		grid-template-columns: 250px 250px;
		grid-column-gap: 18px;
		grid-row-gap: px;
		justify-content: flex-start;
	}
	@media ${bp.smd} {
		display: inline-grid;
		grid-template-rows: 220px 220px;
		grid-template-columns: 175px 175px;
		grid-column-gap: 18px;
		grid-row-gap: px;
		justify-content: flex-start;
	}
	@media ${bp.md} {
		display: inline-grid;
		grid-template-rows: 240px 230px;
		grid-template-columns: 200px 200px;
		grid-column-gap: 22px;
		grid-row-gap: 22px;
		justify-content: flex-start;
	}
	@media ${bp.lg} {
		display: inline-grid;
		grid-template-rows: 270px 270px;
		grid-template-columns: 250px 250px;
		grid-column-gap: 28px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
	@media ${bp.xl} {
		display: inline-grid;
		grid-template-rows: 300px 300px;
		grid-template-columns: 300px 300px;
		grid-column-gap: 28px;
		grid-row-gap: 20px;
		justify-content: flex-start;
	}
`;

const BoxContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 24px;
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	border-radius: 16px;
	color: ${theme.color.text.primary};
	border: 1px solid rgba(255, 255, 255, 0.5);
	@media ${bp.md} {
		max-width: 300px;
		height: 230px;
	}
	@media ${bp.lg} {
		max-width: 300px;
		height: 270px;
	}
`;

const BoxHeader = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 16px;
	text-align: flex-start;
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 4px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const BoxSubdata = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 4px;
	text-align: flex-start;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 2px;
`;
const BoxSubdataTitle = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 4px;
	text-align: flex-start;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 2px;
`;
const BoxSubdataValue = styled.h1`
	color: ${theme.color.text.primary};
	margin-bottom: 4px;
	text-align: flex-start;
	font-size: 12px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 2px;
`;

const AssetCards = () => {
	const GraphColors = [
		['#FF5F6D', '#FFC371'],
		['#E53EF4', '#FF5F6D'],
		['#3E71F4', '#26F390'],
		['#FFC371', '#26F390'],
	];
	return (
		<Carousel showStatus={false} showThumbs={false} swipeable={false} renderIndicator={false}>
			{[...Array(5)].map((e, i) => {
				console.log(i);
				return (
					<BoxContentWrapper key={(i + 1).toString()}>
						{[...Array(4)].map((e, j) => {
							console.log(GraphColors[i]);
							return (
								<BoxContent key={(j + 4 * i).toString()}>
									<BoxHeader>Token #{j + 4 * i}</BoxHeader>

									<GaugeChart
										id={(j + 4 * i).toString()}
										nrOfLevels={10}
										colors={GraphColors[j]}
										arcWidth={0.3}
										percent={0.37}
									/>
									<BoxSubdata>
										<BoxSubdataTitle>Current Value:</BoxSubdataTitle>
										<BoxSubdataValue>0.2</BoxSubdataValue>
									</BoxSubdata>
									<BoxSubdata>
										<BoxSubdataTitle>Total Votes:</BoxSubdataTitle>
										<BoxSubdataValue>24000</BoxSubdataValue>
									</BoxSubdata>
									<BoxSubdata>
										<BoxSubdataTitle>Addresses :</BoxSubdataTitle>
										<BoxSubdataValue>28</BoxSubdataValue>
									</BoxSubdata>
								</BoxContent>
							);
						})}
					</BoxContentWrapper>
				);
			})}
		</Carousel>
	);
};

export default AssetCards;
