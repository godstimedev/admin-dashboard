import { useState } from 'react';
import { PageHeader } from '../../../components';
import { TableContainer } from '../../../ui';
import { Container } from './styles';
import { columns } from './tableColumns';

const Potential = () => {
	const [data, setData] = useState([
		{
			key: '1',
			name: 'Adebisi Konga',
			leads: 'Linkedin',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '2',
			name: 'Omowunmi Bebe',
			leads: 'Facebook',
			phone_number: '07093562502',
			email_address: 'omowunmibebe@gmail.com',
		},
		{
			key: '3',
			name: 'Adebisi Konga',
			leads: 'Instagram',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '4',
			name: 'Omowunmi Bebe',
			leads: 'Facebook',
			phone_number: '07093562502',
			email_address: 'omowunmibebe@gmail.com',
		},
		{
			key: '5',
			name: 'Adebisi Konga',
			leads: 'Twitter',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '6',
			name: 'Adebisi Konga',
			leads: 'Linkedin',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '7',
			name: 'Adebisi Konga',
			leads: 'Twitter',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '8',
			name: 'Adebisi Konga',
			leads: 'Facebook',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '9',
			name: 'Adebisi Konga',
			leads: 'Linkedin',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '10',
			name: 'Adebisi Konga',
			leads: 'Linkedin',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '11',
			name: 'Adebisi Konga',
			leads: 'Instagram',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '12',
			name: 'Adebisi Konga',
			leads: 'Facebook',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '13',
			name: 'Adebisi Konga',
			leads: 'Linkedin',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
		{
			key: '14',
			name: 'Adebisi Konga',
			leads: 'Twitter',
			phone_number: '08090909090',
			email_address: 'adebisikonga@yahoo.com',
		},
	]);

	const formOptions = {
		placeholder: 'Search potential students',
	};

	let total = data.length;

	return (
		<Container>
			<PageHeader title={'Potential Students'} />
			<TableContainer
				columns={columns}
				title={`All Potential Students: ${total}`}
				options={formOptions}
				dataSource={data}
			/>
		</Container>
	);
};

export default Potential;
