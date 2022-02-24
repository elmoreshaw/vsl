import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const pieData = [
	{
		id: 'Bitcoin',
		label: 'Bitcoin',
		value: 3 / 100,
		color: 'hsl(291, 61%, 57%)',
	},
	{
		id: 'Ethereum',
		label: 'Ethereum',
		value: 5 / 100,
		color: 'hsl(50, 60%, 52%)',
	},
	{
		id: 'Fantom',
		label: 'Fantom',
		value: 7 / 100,
		color: 'hsl(45, 83%, 45%)',
	},
	{
		id: 'TetherUSD',
		label: 'TetherUSD',
		value: 6.6 / 100,
		color: 'hsl(218, 58%, 75%)',
	},
	{
		id: 'Solana',
		label: 'Solana',
		value: 1.6 / 100,
		color: 'hsl(2, 55%, 61%)',
	},
	{
		id: 'Avalanche',
		label: 'Avalanche',
		value: 3.3 / 100,
		color: 'hsl(195, 51%, 61%)',
	},
	{
		id: 'Polkadot',
		label: 'Polkadot',
		value: 2.5 / 100,
		color: 'hsl(216, 62%, 57%)',
	},
	{
		id: 'BNB',
		label: 'BNB',
		value: 5 / 100,
		color: 'hsl(293, 62%, 48%)',
	},
	{
		id: 'Harmony',
		label: 'Harmony',
		value: 33 / 100,
		color: 'hsl(167, 35%, 55%)',
	},
	{
		id: 'Tron',
		label: 'Tron',
		value: 33 / 100,
		color: 'hsl(199, 86%, 44%)',
	},
];

const Pie = () => {
	return (
		<ResponsivePie
			data={pieData}
			margin={{ top: 30, right: 40, bottom: 30, left: 40 }}
			innerRadius={0.5}
			padAngle={0.7}
			valueFormat=" >-0.0~%"
			isInteractive={false}
			cornerRadius={3}
			colors={{ datum: 'data.color' }}
			borderWidth={1}
			borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
			arcLinkLabelsSkipAngle={15}
			arcLinkLabelsTextColor="#ffffff"
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsSkipAngle={20}
			arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
			activeOuterRadiusOffset={10}
			arcLabelsRadiusOffset={0.5}
		/>
	);
};

export default Pie;
