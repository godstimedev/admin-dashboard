import styled from 'styled-components';
import { Delete } from '../../../assets/svgs';

export const columns = ({ handleDeleteUserClick, handleToggleClick }) => [
	{
		title: 'Users',
		dataIndex: 'full_name',
		key: 'user',
		fixed: true,
		render: (text, record) => {
			return (
				<span>
					{record.first_name} {record.last_name}
				</span>
			);
		},
	},
	{
		title: 'Email address',
		dataIndex: 'email_address',
		key: 'email',
	},
	{
		title: 'Department',
		key: 'department',
		dataIndex: 'department',
	},
	{
		title: 'Status',
		key: 'status',
		dataIndex: 'status',
		render: (tag) => {
			// console.log(tag);
			let color;
			if (tag === 'Active') {
				color = '#10B981';
			} else {
				color = '#64748B';
			}
			return (
				<Tag color={color} key={tag}>
					<div className="tag">{tag}</div>
				</Tag>
			);
		},
	},
	{
		title: 'Action',
		key: 'action',
		// dataIndex: 'status',
		render: (record) => {
			let status = record.status;
			let color;
			let bgColor;
			if (status === 'Active') {
				color = '#10B981';
				bgColor = '#10B98140';
			} else {
				color = '#0A1A25';
				bgColor = '#0A1A2540';
			}

			return (
				<Action>
					<Toggle
						status={status}
						color={color}
						bgColor={bgColor}
						onClick={() => handleToggleClick(record)}
					>
						<span />
					</Toggle>
					<span>
						<Delete onClick={() => handleDeleteUserClick(record)} />
					</span>
				</Action>
			);
		},
	},
];

const Tag = styled.div`
	background: ${({ color, theme }) =>
		color === '#10B981' ? theme.colors.success50 : theme.colors.neutral100};
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

const Action = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	span {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
`;

const Toggle = styled.div`
	position: relative;
	background: ${({ bgColor }) => bgColor};
	height: 13px;
	width: 16px;
	border-radius: 45%;
	cursor: pointer;

	span {
		background: ${({ color }) => color};
		opacity: 1;
		position: absolute;
		top: 50%;
		left: 15%;
		transform: ${({ status }) =>
			status === 'Active' ? 'translate(90%, -50%)' : 'translate(10%, -50%)'};
		transition: 0.2s ease-in-out;
		height: 6px;
		width: 6px;
		border-radius: 100%;
	}
`;
