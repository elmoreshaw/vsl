import styled from 'styled-components';
import theme from '../Theme/theme';
import bp from '../Theme/breakpoints';

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

const TokenomicsTable = styled.div`
	display: grid;
	grid-template-columns: 2fr;
	width: 100%;
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
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		width: 100%;
		justify-content: center;
		align-content: center;
		margin-top: 50px;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}
`;

const VoteTable = () => {
	return (
		<TokenomicsTable>
			<ChartLegendGrid>
				<TableContent>Token</TableContent>
				<TableContent>Current %</TableContent>
				<TableContent>Your allocation</TableContent>
				<TableContent>your votes cast</TableContent>
				<TableContent># votes cast</TableContent>
				<TableContent>total votes cast</TableContent>
			</ChartLegendGrid>
		</TokenomicsTable>
	);
};

export default VoteTable;
