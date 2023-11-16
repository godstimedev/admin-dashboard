import Chart from 'react-apexcharts';
import { toMoney } from '../../utilities';
import Container from './styles';
// import { toMoney } from '../../utilities';

const PieChart = () => {
	// ApexChart Pie chart
	const options = {
		legend: {
			position: 'bottom',
			fontFamily: 'Nunito Sans',
			fontSize: '10px',
			fontWeight: '400',
		},
		labels: [
			'Product design',
			'Salesforce',
			'Cloud eng',
			'QA Testing',
			'Product management',
			'DevOps',
			'Data science',
		],
		colors: ['#9747FF', '#FCA997', '#B91293', '#C3E1FF', '#FB4E22', '#F3A8E2', '#FFD7A3'],
		plotOptions: {
			pie: {
				// size: 200,
				donut: {
					// size: 150,
					labels: {
						show: true,

						name: {
							show: false,
						},
						value: {
							show: true,
							fontSize: '22px',
							fontFamily: 'Crimson Pro, sans-serif',
							color: '#051A26',
							fontWeight: '700',
							formatter: function (val) {
								return toMoney(val, true);
							},
						},
						total: {
							show: true,
							fontSize: '23px',
							fontFamily: 'Crimson Pro, sans-serif',
							color: '#051A26',
							fontWeight: '600',
							formatter: function (w) {
								return (
									// '₦ ' +
									toMoney(
										w.globals.seriesTotals.reduce((a, b) => {
											return a + b;
										}, 0),
										true
									)
								);
								// return ;
							},
						},
						// formatter: function (val) {
						// 	return '₦ ' + toMoney(val, true);
						// },
					},
				},
			},
		},
		dataLabels: {
			enabled: false,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
		tooltip: {
			style: {
				// fontSize: '14px',
				// fontFamily: undefined,
				color: '#333',
			},
			y: {
				formatter: function (val) {
					return toMoney(val, true);
				},
			},
		},
	};

	const series = [30000, 28000, 50000, 40000, 22000, 48000, 22000];

	return (
		<Container>
			<Chart options={options} series={series} type="donut" height={400} />
		</Container>
	);
};

export default PieChart;
