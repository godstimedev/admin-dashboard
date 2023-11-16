import { useState } from 'react';
import { Money, MoneyBag } from '../../assets/images';
import { PageHeader } from '../../components';
import { Pallet, PalletList, TableContainer } from '../../ui';
import { Container } from './styles';
import { columns } from './tableColumns';

const Transactions = () => {
	const [data, setData] = useState([
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Adebisi Konga',
			email_address: 'adebisikonga@yahoo.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: 'Nil',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Omowunmi Bebe',
			email_address: 'omowunmibebe@gmail.com',
			program: 'Software engineering',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: 'Nil',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Adebisi Konga',
			email_address: 'adebisikonga@yahoo.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: 'Nil',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Omowunmi Bebe',
			email_address: 'omowunmibebe@gmail.com',
			program: 'DevOps',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: 'Nil',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Adebisi Konga',
			email_address: 'adebisikonga@yahoo.com',
			program: 'Salesforce',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: '₦ 40,000',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Omowunmi Bebe',
			email_address: 'omowunmibebe@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: '₦ 40,000',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Omowunmi Bebe',
			email_address: 'omowunmibebe@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: 'Nil',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Omowunmi Bebe',
			email_address: 'omowunmibebe@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: 'Nil',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Omowunmi Bebe',
			email_address: 'omowunmibebe@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: '₦ 10,000',
		},
		{
			reference_id: '123i2oyo34u12u2ip3ifkenw3',
			name: 'Omowunmi Bebe',
			email_address: 'omowunmibebe@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			amount_paid: '₦ 240,000',
			balance: '₦ 10,000',
		},
	]);

	const formOptions = {
		placeholder: 'Search transactions',
		filter: {
			placeholder: 'All transaction',
			filterBy: [
				{ option: 'All', key: 'all' },
				{ option: 'Product Design', key: 'product design' },
				{ option: 'Salesforce', key: 'salesforce' },
				{ option: 'DevOps', key: 'devops' },
				{ option: 'Software ', key: 'software engineering' },
			],
		},
	};

	return (
		<Container>
			<PageHeader title="Transactions" />

			<PalletList>
				{palletItems.map(({ title, body, color, image }) => (
					<Pallet key={title} title={title} body={body} color={color} image={image} />
				))}
			</PalletList>

			<TableContainer
				columns={columns}
				title={`Transactions History`}
				options={formOptions}
				dataSource={data}
			/>
		</Container>
	);
};

export default Transactions;

const palletItems = [
	{ title: 'Total revenue', body: '₦ 240,000', color: 'primary700', image: MoneyBag },
	{ title: 'Pending payments', body: '₦ 200,000', color: 'secondary500', image: Money },
	{ title: 'Total revene', body: '₦ 240,000', color: 'primary700', image: MoneyBag },
	{ title: 'Pending payment', body: '₦ 20,000', color: 'secondary500', image: Money },
];
