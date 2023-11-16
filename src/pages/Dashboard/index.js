import { DatePicker } from 'antd';
// import moment from 'moment';
import { useState } from 'react';
import {
	Pallet,
	PalletList,
	ProgressBar,
	TableContainer,
	CustomPieChart,
	BarChart,
} from '../../ui';
import { Boy, Classroom, Money, MoneyBag } from '../../assets/images';
// import { Calender } from '../../assets/svgs';
import { PageHeader } from '../../components';
import { columns } from '../Students/tableColumns';
import { Container, FlexBox } from './styles';

const Dashboard = () => {
	const [barData, setBarData] = useState('Revenue');

	const handleGetYearBarData = (year) => {
		console.log(year);
	};
	const handleGetYearPieData = (year) => {
		console.log(year);
	};

	const currentDateTime = new Date();

	const options = { month: 'short', day: 'numeric', year: 'numeric' };
	const formattedDateTime = currentDateTime.toLocaleDateString(undefined, options);

	// students data
	const data = [
		{
			key: '1',
			name: 'Adebisi Konga',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '₦ 240,000',
			plan: 'Full',
		},
		{
			key: '2',
			name: 'Jim Green',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Two - times',
		},
		{
			key: '3',
			name: 'Joe Black',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Three - times',
		},
		{
			key: '4',
			name: 'Joe Black',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Three - times',
		},
		{
			key: '5',
			name: 'Joe Black',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Full',
		},
		{
			key: '6',
			name: 'Joe Black',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Full',
		},
		{
			key: '7',
			name: 'Joe Black',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Full',
		},
		{
			key: '8',
			name: 'Joe Black',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Two - times',
		},
		{
			key: '9',
			name: 'Joe Black',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			price: '#240,000',
			plan: 'Full',
		},
	];

	return (
		<Container>
			<PageHeader>
				<div className="page--header">
					<h5>Welcome back, Daniella 🌞</h5>
					<p>
						This is your stats today - <span>{formattedDateTime}</span>
					</p>
				</div>
			</PageHeader>

			<PalletList>
				{palletItems.map(({ title, body, color, image }) => (
					<Pallet key={title} title={title} body={body} color={color} image={image} />
				))}
			</PalletList>

			<FlexBox>
				<section className="statistics--con">
					<header className="statistics--header">
						<div>
							<h6>Statistics</h6>
							<div className="category">
								<span
									onClick={() => setBarData('Revenue')}
									className={barData === 'Revenue' ? 'active' : ''}
								>
									Revenue
								</span>
								<span
									onClick={() => setBarData('Student')}
									className={barData === 'Student' ? 'active' : ''}
								>
									Student
								</span>
							</div>
						</div>

						<div className="right--section">
							<DatePicker
								placeholder="This Year"
								// defaultValue={moment()}
								onChange={(date, dateString) => {
									handleGetYearBarData(dateString);
								}}
								picker="year"
							/>
							{/* <Calender className="svg" /> */}
						</div>
					</header>

					<div>
						<BarChart barData={barData} />
					</div>
				</section>

				<section className="student--con">
					<header>
						<h6>Student</h6>
						<div className="right">
							<DatePicker
								placeholder="This Year"
								// defaultValue={moment()}
								onChange={(date, dateString) => {
									handleGetYearPieData(dateString);
								}}
								picker="year"
							/>
							{/* <Calender className="svg" /> */}
						</div>
					</header>
					<div>
						<CustomPieChart />
					</div>
				</section>
			</FlexBox>

			<FlexBox>
				<section className="table--con">
					<TableContainer columns={columns} dataSource={data} title={'Latest Students'} />
				</section>

				<section className="slots--con">
					<header>
						<h6>Slot left</h6>
					</header>
					<div className="slots--items--con">
						{slots.map((item) => (
							<div key={item.title} className="slots--item">
								<p>{item.title}</p>
								<div className="fraction">
									<div>
										<ProgressBar fraction={item.open / item.total} />
									</div>
									<p>{`${item.open} / ${item.total}`}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			</FlexBox>
		</Container>
	);
};

export default Dashboard;

const palletItems = [
	{ title: 'Total revenue', body: '₦ 240,000', color: 'primary700', image: MoneyBag },
	{ title: 'Pending payments', body: '₦ 20,000', color: 'secondary500', image: Money },
	{ title: 'Active cohort', body: '12', color: 'accent600', image: Classroom },
	{ title: 'Total students onboard ', body: '340', color: 'primary800', image: Boy },
];

const slots = [
	{ title: 'Product Design', total: 10, open: 2 },
	{ title: 'Salesforce', total: 10, open: 5 },
	{ title: 'Cloud eng', total: 10, open: 9 },
	{ title: 'Product Management', total: 10, open: 5 },
	{ title: 'QA Testing', total: 10, open: 4 },
	{ title: 'DevOps', total: 10, open: 7 },
	{ title: 'Data Science', total: 10, open: 4 },
];
