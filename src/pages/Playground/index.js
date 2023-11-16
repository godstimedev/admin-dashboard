import { Button, InputGroup, Pallet, PalletList, ProgressBar } from '../../ui';
import { Container, Flex } from './styles';
import { Table } from 'antd';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { MoneyBag, Boy } from '../../assets/images';
import { PageHeader } from '../../components';
// import PieChart from '../../components/PieChart';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: true,
		render: (name) => `${name.first} ${name.last}`,
		width: '20%',
	},
	{
		title: 'Gender',
		dataIndex: 'gender',
		filters: [
			{
				text: 'Male',
				value: 'male',
			},
			{
				text: 'Female',
				value: 'female',
			},
		],
		width: '20%',
	},
	{
		title: 'Email',
		dataIndex: 'email',
	},
];
const getRandomuserParams = (params) => ({
	results: params.pagination?.pageSize,
	page: params.pagination?.current,
	...params,
});

const Playground = () => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [tableParams, setTableParams] = useState({
		pagination: {
			current: 1,
			pageSize: 10,
		},
	});
	const fetchData = () => {
		setLoading(true);
		fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
			.then((res) => res.json())
			.then(({ results }) => {
				setData(results);
				setLoading(false);
				setTableParams({
					...tableParams,
					pagination: {
						...tableParams.pagination,
						total: 200,
						// 200 is mock data, you should read it from server
						// total: data.totalCount,
					},
				});
			});
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [JSON.stringify(tableParams)]);

	const handleTableChange = (pagination, filters, sorter) => {
		setTableParams({
			pagination,
			filters,
			...sorter,
		});
	};

	return (
		<Container>
			<h1>App components</h1>
			<h3>Buttons</h3>
			<Flex>
				<Flex direction="column" align="center">
					<Button size="big">Button</Button>

					<ul>
						<li>Props</li>
						<li>Type: Primary (default)</li>
						<li>Size: Big</li>
					</ul>
				</Flex>

				<Flex direction="column" align="center">
					<Button type="secondary">Button</Button>

					<ul>
						<li>Props</li>
						<li>Type: Secondary</li>
						<li>Size: Medium (default)</li>
					</ul>
				</Flex>

				<Flex direction="column" align="center">
					<Button type="subtle" size="small">
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Type: Subtle</li>
						<li>Size: Small</li>
					</ul>
				</Flex>

				<Flex direction="column" align="center">
					<Button type="text">Button</Button>

					<ul>
						<li>Props</li>
						<li>Type: Text</li>
						<li>Size: Medium (default)</li>
					</ul>
				</Flex>

				<Flex direction="column" align="center">
					<Button loading size="big">
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Type: Primary (default)</li>
						<li>Size: Big</li>
						<li>Loading</li>
					</ul>
				</Flex>

				<Flex direction="column" align="center">
					<Button type="text" loading>
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Type: Text</li>
						<li>Size: Medium (default)</li>
						<li>Loading</li>
					</ul>
				</Flex>
			</Flex>
			<br />
			<br />
			<h3>PalletList and Pallet</h3>
			<PalletList>
				<Pallet title="Total Revenue" body="₦ 240,000" color="primary700" image={MoneyBag} />
				<Pallet title="Total students onboard" body="340" color="#093654" image={Boy} />
			</PalletList>
			<Flex justify="flex-start">
				<ul>
					<li>Props of Pallet</li>
					<li>Title: Total Revenue</li>
					<li>Body: ₦ 240,000</li>
					<li>Color: primary700</li>
					<li>Image: {'{image}'}</li>
				</ul>

				<ul>
					<li>Props of Pallet</li>
					<li>Title: Total students onboard</li>
					<li>Body: 340</li>
					<li>Color: #093654</li>
					<li>Image: {'{image}'}</li>
				</ul>
			</Flex>
			<br />
			<br />
			<h3>Table</h3>
			<Table
				columns={columns}
				rowKey={(record) => record.login.uuid}
				dataSource={data}
				pagination={tableParams.pagination}
				loading={loading}
				onChange={handleTableChange}
			/>
			<br />
			<br />
			<h3>PageHeader</h3>
			<PageHeader title="Playground" />
			<ul>
				<li>Props of PageHeader</li>
				<li>Title: Playground</li>
			</ul>
			<br />
			<PageHeader>
				<p>This is a child</p>
			</PageHeader>
			<ul>
				<li>Props of PageHeader</li>
				<li>Children: This is a child</li>
			</ul>
			<br />
			<br />
			<h3>InputGroup</h3>
			<Flex>
				<div>
					<InputGroup placeholder="Name" />
					<ul>
						<li>Props of InputGroup</li>
						<li>Size: Large (default)</li>
					</ul>
				</div>

				<div>
					<InputGroup placeholder="Name" type="search" />
					<ul>
						<li>Props of InputGroup</li>
						<li>Size: medium</li>
						<li>Disabled</li>
					</ul>
				</div>
			</Flex>
			<br />
			<br />
			<h3>ProgressBar</h3>
			<Flex flex="1">
				<div>
					<ProgressBar fraction={6 / 12} />
					<ul>
						<li>Props of ProgressBar</li>
						<li>Color: accent800 (default)</li>
						<li>Fraction: 6/12</li>
					</ul>
				</div>

				<div>
					<ProgressBar color="accent600" fraction={9 / 10} />
					<ul>
						<li>Props of ProgressBar</li>
						<li>Color: accent600</li>
						<li>Fraction: 9/10</li>
					</ul>
				</div>
			</Flex>
			<br />
			<br />
			<a href="https://charts.ant.design/en/examples/column/basic#basic">Antd design chart doc</a>
			<br />
			<br />
			<a href="https://charts.ant.design/en/examples/pie/donut#basic">Antd design chart doc</a>
		</Container>
	);
};

export default Playground;
