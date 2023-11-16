import { useState } from 'react';
import { AlertClose, Create, SuccessIcon } from '../../assets/svgs';
import { PageHeader } from '../../components';
import { Button, InputGroup, Modal } from '../../ui';
import TableContainer from '../../ui/TableContainer';
import { toMoney } from '../../utilities';
import { Container } from './styles';
import { columns } from './tableColumns';
import { ToastContainer, toast } from 'react-toastify';

const Events = () => {
	const [modal, setModal] = useState({
		addModal: false,
		editModal: false,
	});
	// const [editModal, setEditModal] = useState(false);
	const [editingEvent, setEditingEvent] = useState(null);
	const [data, setData] = useState([
		{
			key: '1',
			event: 'Product design',
			mode: 'Physical',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
		{
			key: '2',
			event: 'Product management',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Unpublished',
			action: '',
		},
		{
			key: '3',
			event: 'Software development',
			mode: 'Physical',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
		{
			key: '4',
			event: 'Product management',
			mode: 'Physical',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
		{
			key: '5',
			event: 'salesforce',
			mode: 'Physical',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Unpublished',
			action: '',
		},
		{
			key: '6',
			event: 'Web design',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
		{
			key: '7',
			event: 'Product design',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Unpublished',
			action: '',
		},
		{
			key: '8',
			event: 'Product design',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
		{
			key: '9',
			event: 'DevOps',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
		{
			key: '10',
			event: 'QA',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Unpublished',
			action: '',
		},
		{
			key: '11',
			event: 'Salesforce',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
		{
			key: '12',
			event: 'Cloud',
			mode: 'Virtual',
			price: '₦ 240,000',
			start: 'Sept 11, 2022',
			end: 'Sept 11, 2022',
			count: '23/56',
			status: 'Published',
			action: '',
		},
	]);
	const [addEvent, setAddEvent] = useState({
		key: '',
		event: '',
		mode: '',
		price: '',
		start: '',
		end: '',
		count: '',
		status: '',
	});
	// const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	// const [rowModal, setRowModal] = useState(false);
	// const [rowData, setRowData] = useState({});

	// const closeRowModal = () => {
	// 	setRowModal(!rowModal);
	// };

	const handleAddEventChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setAddEvent((prev) => ({ ...prev, [name]: value }));
	};

	const handleEditEventChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setEditingEvent((prev) => ({ ...prev, [name]: value }));
	};

	const closeCreateModal = () => {
		setModal((prev) => ({
			...prev,
			addModal: false,
		}));
	};
	const closeEditModal = () => {
		setModal((prev) => ({
			...prev,
			editModal: false,
		}));
	};

	const formOptions = {
		placeholder: 'Search events',
		button: 'Create event',
		filter: {
			placeholder: 'All Status',
			filterBy: [
				{ key: 'all', option: 'All status' },
				{ key: 'published', option: 'Published only' },
				{ key: 'unpublished', option: 'Unpublished only' },
			],
		},
	};

	const handleEditSave = (eventStatus, e) => {
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
				return prev.map((item) => {
					if (item.key === editingEvent.key) {
						return {
							...editingEvent,
							status: eventStatus,
							price: editingEvent?.price?.includes('₦', ',')
								? editingEvent.price
								: '₦ ' + toMoney(editingEvent.price, true),
						};
					} else {
						return item;
					}
				});
			});
			closeEditModal();
		}
	};

	const handleSave = (eventStatus, e) => {
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

				const updatedEvent = {
					...addEvent,
				};
				updatedEvent.key = randomNum;
				updatedEvent.status = eventStatus;
				updatedEvent.price = '₦ ' + toMoney(updatedEvent.price, true);
				return [updatedEvent, ...prev];
			});
			closeCreateModal();
			addEventNotify();
		}
	};

	const handleEditEventClick = (record) => {
		setModal((prev) => ({
			...prev,
			editModal: true,
		}));
		setEditingEvent(record);

		// if (rowModal) {
		// 	setRowModal(!rowModal);
		// }
	};

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(selectedRowKeys);
			// setSelectedRowKeys(selectedRowKeys);
			console.log(selectedRows);
		},
		// selectedRowKeys: selectedRowKeys,
		// selections: [
		// 	{
		// 		key: 'published',
		// 		text: 'Select Published',
		// 		onselect: (allkeys) => {
		// 			console.log(allkeys);
		// 			const selectedKeys = data.filter((item) => {
		// 				console.log(item);
		// 				return item.status === 'Published';
		// 			});

		// 			setSelectedRowKeys(selectedKeys);
		// 		},
		// 	},
		// ],
	};

	// const handleDeleteRow = () => {
	// 	console.log(selectedRowKeys.forEach((item) => item));

	// 	selectedRowKeys.map((item) => {
	// 		setData((prev) => {
	// 			return prev.filter((row) => row.key !== item);
	// 		});
	// 	});
	// };

	// console.log(selectedRowKeys);

	const modeOptions = (
		<>
			<option value="">Select mode</option>
			<option value="Virtual">Virtual</option>
			<option value="Physical"> Physical</option>
		</>
	);

	const addEventNotify = () =>
		toast.success('New event created', {
			// customId: 1,
		});

	return (
		<Container>
			<ToastContainer
				position="top-center"
				hideProgressBar={true}
				toastClassName="my--toast"
				closeButton={<AlertClose />}
				icon={<SuccessIcon />}
				autoClose={3000}
			/>

			<Modal
				size="large"
				showModal={modal.addModal}
				closeModal={closeCreateModal}
				heading={'Create Event'}
			>
				<form>
					<InputGroup
						name="event"
						label="Event name"
						value={addEvent.event}
						onChange={handleAddEventChange}
						placeholder="Placeholder"
						className="required"
						required
					/>

					<div className="input--con">
						<InputGroup
							type="date"
							label="Start date"
							name="start"
							value={addEvent.start}
							onChange={handleAddEventChange}
							className="required"
							required
						/>
						<InputGroup
							type="date"
							label="End date"
							name="end"
							value={addEvent.end}
							onChange={handleAddEventChange}
							className="required"
							required
						/>
					</div>

					<div className="input--con">
						<InputGroup
							type="date"
							label="Deadline"
							name="end"
							value={addEvent.end}
							onChange={handleAddEventChange}
							className="required"
							required
						/>

						<InputGroup
							label="Total slots"
							placeholder="1234"
							name="count"
							value={addEvent.count}
							onChange={handleAddEventChange}
							className="required"
							required
						/>
					</div>

					<div className="input--con">
						<InputGroup
							type="select"
							placeholder=""
							label="Mode"
							name="mode"
							value={addEvent.mode}
							onChange={handleAddEventChange}
							optionLists={modeOptions}
							className="required"
							required
						/>

						<InputGroup
							type="price"
							label="Price"
							value={addEvent.price}
							onChange={handleAddEventChange}
							name="price"
							placeholder="000 000"
							className="required"
							required
						/>
					</div>

					<InputGroup
						type="textarea"
						label="Provide more details"
						optional
						name="details"
						placeholder="Placeholder"
					/>
				</form>
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
						<Button value="Unpublished" onClick={(e) => handleSave('Unpublished', e)} type="secondary">
							Save
						</Button>
						<Button value="Published" onClick={(e) => handleSave('Published', e)}>
							Save & Publish
						</Button>
					</div>
				</div>
			</Modal>

			<Modal
				size="large"
				showModal={modal.editModal}
				closeModal={closeEditModal}
				heading={'Edit Event'}
				editing
			>
				<form>
					<InputGroup
						name="event"
						label="Event name"
						value={editingEvent?.event}
						onChange={handleEditEventChange}
						placeholder="Placeholder"
						className={'required'}
						required
					/>

					<div className="input--con">
						<InputGroup
							type="date"
							label="Start date"
							name="start"
							value={editingEvent?.start}
							onChange={handleEditEventChange}
							className={'required'}
							required
						/>
						<InputGroup
							type="date"
							label="End date"
							name="end"
							value={editingEvent?.end}
							onChange={handleEditEventChange}
							className={'required'}
							required
						/>
					</div>

					<div className="input--con">
						<InputGroup
							type="date"
							label="Deadline"
							name="end"
							value={editingEvent?.end}
							onChange={handleEditEventChange}
							className={'required'}
							required
						/>

						<InputGroup
							label="Total slots"
							placeholder="1234"
							name="count"
							value={editingEvent?.count}
							onChange={handleEditEventChange}
							className={'required'}
							required
						/>
					</div>

					<div className="input--con">
						<InputGroup
							type="select"
							placeholder=""
							label="Mode"
							name="mode"
							value={editingEvent?.mode}
							onChange={handleEditEventChange}
							optionLists={modeOptions}
							className={'required'}
							required
						/>

						<InputGroup
							type="price"
							label="Price"
							value={editingEvent?.price}
							onChange={handleEditEventChange}
							name="price"
							placeholder="000 000"
							className={'required'}
							required
						/>
					</div>

					<InputGroup
						type="textarea"
						label="Provide more details"
						optional
						name="details"
						placeholder="Placeholder"
					/>
				</form>
				<div className="button--group">
					<div>
						<Button
							onClick={() =>
								setModal((prev) => ({
									...prev,
									editModal: false,
								}))
							}
							type="text"
						>
							Cancel
						</Button>
					</div>
					{editingEvent?.status === 'Published' ? (
						<div>
							<Button onClick={(e) => handleEditSave('Unpublished', e)} type="error">
								Unpublish
							</Button>
							<Button onClick={(e) => handleEditSave('Published', e)}>Save Changes</Button>
						</div>
					) : (
						<div>
							<Button onClick={(e) => handleEditSave('Unpublished', e)} type="secondary">
								Save Only
							</Button>
							<Button onClick={(e) => handleEditSave('Published', e)}>Save & Publish</Button>
						</div>
					)}
				</div>
			</Modal>

			<PageHeader title="Events" />

			{/* <Button onClick={handleDeleteRow} type="error">
				Delete
			</Button> */}

			<TableContainer
				columns={columns({
					handleDeleteEventClick: (record) => {
						setData((prev) => {
							return prev.filter((row) => row.key !== record.key);
						});
					},
					handleEditEventClick: (record) => {
						handleEditEventClick(record);
					},
				})}
				title={`All Events: ${data.length}`}
				dataSource={data}
				options={formOptions}
				selection={rowSelection}
				setAddModal={setModal}
				// onRow={(record, rowIndex) => {
				// 	return {
				// 		onClick: () => {
				// 			if (window.innerWidth < 768) {
				// 				setRowModal(!rowModal);
				// 				setRowData(record);
				// 			}
				// 		},
				// 	};
				// }}
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

export default Events;

{
	/* <Modal showModal={rowModal} closeModal={closeRowModal}>
				<div className="row--content">
					<div className="row--items">
						<div>
							<p>Event</p>
							<p>{rowData.event}</p>
						</div>
						<div>
							<p>Mode</p>
							<p>{rowData.mode}</p>
						</div>
						<div>
							<p>Price</p>
							<p>{rowData.price}</p>
						</div>
						<div>
							<p>Start Date</p>
							<p>{rowData.start}</p>
						</div>
						<div>
							<p>Deadline</p>
							<p>{rowData.end}</p>
						</div>
						<div>
							<p>Count/Slots</p>
							<p>{rowData.count}</p>
						</div>
						<div>
							<p>Status</p>
							<p>{rowData.status}</p>
						</div>
					</div>
					<div className="button--group">
						<div>
							<Button onClick={() => setEditModal(!editModal)} type="text">
								Cancel
							</Button>
						</div>
						<div>
							<Button onClick={() => handleEditEventClick(rowData)} type="secondary">
								Edit
							</Button>
							<Button onClick={(e) => handleEditSave('Unpublished', e)} type="error">
								Unpublish
							</Button>
						</div>
					</div>
				</div>
			</Modal> */
}
