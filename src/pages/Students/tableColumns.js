import styled from 'styled-components';

export const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		fixed: true,
		// render: (text) => <a>{text}</a>,
	},
	{
		title: 'Program',
		dataIndex: 'program',
		key: 'program',
	},
	{
		title: 'Date Joined',
		dataIndex: 'date_joined',
		key: 'date',
	},
	{
		title: 'Price',
		key: 'price',
		dataIndex: 'price',
	},
	{
		title: 'Plan',
		key: 'plan',
		dataIndex: 'plan',
		render: (tag) => {
			let color;
			if (tag === 'Full') {
				color = '#161331';
			} else {
				color = '#B44A23';
			}
			return (
				<Tag color={color} key={tag}>
					<div className="tag">{tag}</div>
				</Tag>
			);
		},
	},
];

const Tag = styled.div`
	background: ${({ color, theme }) =>
		color === '#161331' ? theme.colors.secondary100 : theme.colors.accent100};
	padding: 4px 10px;
	width: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;

	.tag {
		${({ theme }) => theme.mixins.text12}
		font-weight: 400;
		color: ${({ color }) => color};
	}
`;
