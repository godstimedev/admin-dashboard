import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AlertBig, AlertClose, Create, SuccessIcon } from '../../../assets/svgs';
import { allDepartments } from '../../../constants';
import { Button, InputGroup, Modal, TableContainer } from '../../../ui';
import { Container } from './styles';
import { columns } from './tableColumns';

const Users = () => {
	const [clickedRow, setClickedRow] = useState(null);
	const [modal, setModal] = useState({
		addModal: false,
		removeModal: false,
	});
	const [data, setData] = useState([
		{
			key: 1,
			// user: 'Kianna Philips',
			first_name: 'Kianna',
			last_name: 'Philips',
			email_address: 'kianna.philips@gmail.com',
			department: 'Business Operations',
			status: 'Active',
		},
		{
			key: 2,
			// user: 'Gretchen Lubin',
			first_name: 'Gretchen',
			last_name: 'Lubin',
			email_address: 'gretchen.lubin@gmail.com',
			department: 'People Operations',
			status: 'Inactive',
		},
		{
			key: 3,
			// user: 'Carla Siphron',
			first_name: 'Carla',
			last_name: 'Siphron',
			email_address: 'carla.siphron@gmail.com',
			department: 'Programs Department',
			status: 'Inactive',
		},
		{
			key: 4,
			// user: 'Mira Franci',
			first_name: 'Mira',
			last_name: 'Franci',
			email_address: 'mira.franci@gmail.com',
			department: 'Sales and Customer Success',
			status: 'Active',
		},
		{
			key: 5,
			// user: 'Kianna Philips',
			first_name: 'Kianna',
			last_name: 'Philips',
			email_address: 'kianna.philips@gmail.com',
			department: 'Business Operations',
			status: 'Active',
		},
		{
			key: 6,
			// user: 'Gretchen Lubin',
			first_name: 'Gretchen',
			last_name: 'Lubin',
			email_address: 'gretchen.lubin@gmail.com',
			department: 'People Operations',
			status: 'Inactive',
		},
		{
			key: 7,
			// user: 'Carla Siphron',
			first_name: 'Carla',
			last_name: 'Siphron',
			email_address: 'carla.siphron@gmail.com',
			department: 'Programs Department',
			status: 'Inactive',
		},
		{
			key: 8,
			// user: 'Mira Franci',
			first_name: 'Mira',
			last_name: 'Franci',
			email_address: 'mira.franci@gmail.com',
			department: 'Sales and Customer Success',
			status: 'Active',
		},
		{
			key: 9,
			// user: 'Kianna Philips',
			first_name: 'Kianna',
			last_name: 'Philips',
			email_address: 'kianna.philips@gmail.com',
			department: 'Business Operations',
			status: 'Active',
		},
		{
			key: 10,
			// user: 'Gretchen Lubin',
			first_name: 'Gretchen',
			last_name: 'Lubin',
			email_address: 'gretchen.lubin@gmail.com',
			department: 'People Operations',
			status: 'Inactive',
		},
		{
			key: 11,
			// user: ' Siphron',
			first_name: 'Carla',
			last_name: 'Siphron',
			email_address: 'carla.siphron@gmail.com',
			department: 'Programs Department',
			status: 'Inactive',
		},
		{
			key: 12,
			// user: 'Mira Franci',
			first_name: 'Mira',
			last_name: 'Franci',
			email_address: 'mira.franci@gmail.com',
			department: 'Sales and Customer Success',
			status: 'Active',
		},
	]);
	const [addUser, setAddUser] = useState({
		key: '',
		first_name: '',
		last_name: '',
		email_address: '',
		department: '',
		status: '',
	});

	const handleAddUserChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setAddUser((prev) => ({ ...prev, [name]: value }));
	};

	const handleDeleteUserClick = (record) => {
		setModal((prev) => ({
			...prev,
			removeModal: true,
		}));
		setClickedRow(record);
	};
	const handleDelete = () => {
		// console.log(clickedRow);

		setData((prev) => {
			return prev.filter((row) => row.key !== clickedRow.key);
		});
		setModal((prev) => ({
			...prev,
			removeModal: false,
		}));
		removeUserNotify();
	};

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(selectedRowKeys);
			// setSelectedRowKeys(selectedRowKeys);
			console.log(selectedRows);
		},
	};

	const closeRemoveModal = () => {
		setModal((prev) => ({
			...prev,
			removeModal: false,
		}));
	};

	const closeAddModal = () => {
		setModal((prev) => ({
			...prev,
			addModal: false,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const requiredFields = document.querySelectorAll('.required');
		let formValid = true;

		requiredFields.forEach((field) => {
			if (field.value === '') {
				formValid = false;
			}
		});

		if (formValid) {
			setData((prev) => {
				const randomNum = parseInt(Math.random() * 100);

				const newUser = {
					...addUser,
				};
				newUser.key = randomNum;
				newUser.status = 'Inactive';

				return [newUser, ...prev];
			});
			closeAddModal();
			addUserNotify();
		}
	};

	const formOptions = {
		placeholder: 'Search users',
		filter: {
			placeholder: 'Filter',
			filterBy: [
				{ key: 'all', option: 'All Status' },
				{ key: 'business operations', option: 'Business Operations' },
				{ key: 'people operations', option: 'People Operations' },
				{ key: 'programs department', option: 'Programs Department' },
				{ key: 'sales and customer success', option: 'Sales and Customer Success' },
			],
		},
		button: 'Add User',
	};

	const permissionOptions = (
		<>
			<option value="">Select Department</option>
			{Object.keys(allDepartments).map((department) => (
				<option key={department} value={allDepartments[department]}>
					{allDepartments[department]}
				</option>
			))}
		</>
	);

	const addUserNotify = () =>
		toast.success('User added', {
			// customId: 1,
		});
	const removeUserNotify = () =>
		toast.success('User has been removed', {
			// customId: 2,
		});
	const deactivateUserNotify = () =>
		toast.success('User has been deactivated and would be denied login access', {
			toastStyle: { maxWidth: '700px', innerWidth: 'fit-content' },
			// customId: 3,
		});
	const activateUserNotify = () =>
		toast.success('User has been activated and would be denied login access', {
			// customId: 4,
		});

	return (
		<Container>
			<Modal size="small" showModal={modal.addModal} closeModal={closeAddModal} heading="Add User">
				<form onSubmit={handleSubmit}>
					<InputGroup
						type="email"
						label="Email address"
						name="email_address"
						placeholder="Enter email address"
						value={addUser?.email_address}
						onChange={handleAddUserChange}
						className="required"
					/>
					<div className="flex--group">
						<InputGroup
							type="text"
							label="First name"
							name="first_name"
							placeholder="Enter first name"
							value={addUser?.first_name}
							onChange={handleAddUserChange}
							className="required"
						/>
						<InputGroup
							type="text"
							label="Last name"
							name="last_name"
							placeholder="Enter last name"
							value={addUser?.last_name}
							onChange={handleAddUserChange}
							className="required"
						/>
					</div>
					<InputGroup
						type="select"
						label="Department"
						name="department"
						optionLists={permissionOptions}
						value={addUser?.department}
						onChange={handleAddUserChange}
						className="required"
					/>
					<div className="button--group">
						<div>
							<Button
								onClick={() =>
									setModal((prev) => ({
										...prev,
										addModal: false,
									}))
								}
								type="text"
							>
								Cancel
							</Button>
						</div>

						<div>
							<Button onClick={handleSubmit}>Add User</Button>
						</div>
					</div>
				</form>
			</Modal>

			<ToastContainer
				position="top-center"
				hideProgressBar={true}
				toastClassName="my--toast"
				closeButton={<AlertClose />}
				icon={<SuccessIcon />}
				autoClose={3000}
			/>

			<Modal size="small" showModal={modal.removeModal} closeModal={closeRemoveModal}>
				<div className="alert--container">
					<div className="alert">
						<AlertBig />
					</div>
					<h1>Remove User</h1>
					<p>Are you sure you want to remove this user? You can deactivate this user instead </p>
				</div>
				<div className="button--group">
					<div>
						<Button onClick={() => closeRemoveModal()} type="text">
							Cancel
						</Button>
					</div>

					<div>
						<Button type="danger" onClick={handleDelete}>
							Remove User
						</Button>
					</div>
				</div>
			</Modal>
			<TableContainer
				columns={columns({
					handleDeleteUserClick: (record) => {
						handleDeleteUserClick(record);
					},
					handleToggleClick: (record) => {
						setData((prev) => {
							return prev.map((item) => {
								if (item.key === record.key) {
									record.status === 'Active' ? deactivateUserNotify() : activateUserNotify();
									return {
										...record,
										status: record.status === 'Active' ? 'Inactive' : 'Active',
									};
									// console.log(data)
								} else {
									return item;
								}
							});
						});

						console.log(data);
					},
				})}
				title={`All Users: ${data.length}`}
				dataSource={data}
				options={formOptions}
				selection={rowSelection}
				setAddModal={setModal}
			/>

			<div className="create--mobile">
				<Create
					onClick={() =>
						setModal((prev) => ({
							...prev,
							addModal: true,
						}))
					}
				/>
			</div>
		</Container>
	);
};

export default Users;

// const StyledContainer = styled(ToastContainer)`
//   // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
//   &&&.Toastify__toast-container {
//   }
//   .Toastify__toast {
//   }
//   .Toastify__toast-body {
//   }
//   .Toastify__progress-bar {
//   }
// `;
