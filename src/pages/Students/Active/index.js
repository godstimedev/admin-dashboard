import { useState } from 'react';
import { PageHeader } from '../../../components';
import { TableContainer } from '../../../ui';
import { Container } from './styles';
import { columns } from './tableColumns';

const Active = () => {
	const [data, setData] = useState([
		{
			key: '1',
			name: 'Adebisi Konga',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Full',
			balance: '₦ 240,000',
		},
		{
			key: '2',
			name: 'Jim Green',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Two - times',
			balance: '₦ 240,000',
		},
		{
			key: '3',
			name: 'Joe Black',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Three - times',
			balance: '₦ 240,000',
		},
		{
			key: '4',
			name: 'Joe Black',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Three - times',
			balance: '₦ 240,000',
		},
		{
			key: '5',
			name: 'Joe Black',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Full',
			balance: '₦ 240,000',
		},
		{
			key: '6',
			name: 'Joe Black',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Full',
			balance: '₦ 240,000',
		},
		{
			key: '7',
			name: 'Joe Black',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Full',
			balance: '₦ 240,000',
		},
		{
			key: '8',
			name: 'Joe Black',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Two - times',
			balance: '₦ 240,000',
		},
		{
			key: '9',
			name: 'Joe Black',
			email_adress: 'joeblack@gmail.com',
			program: 'Product design',
			date_joined: 'Sept 11, 2022',
			plan: 'Full',
			balance: '₦ 240,000',
		},
	]);

	const formOptions = {
		placeholder: 'Search active students',
		filter: {
			placeholder: 'Filter',
			filterBy: [
				{ key: 'all', option: 'All Status' },
				{ key: 'full', option: 'Full' },
				{ key: 'two - times', option: 'Two' },
				{ key: 'three - times', option: 'Three' },
			],
		},
		// button: 'Invite student',
	};

	return (
		<Container>
			<PageHeader title={'Active Students'} />
			<TableContainer
				columns={columns}
				title={`All Active Students: ${data.length}`}
				dataSource={data}
				options={formOptions}
			/>
		</Container>
	);
};

export default Active;
