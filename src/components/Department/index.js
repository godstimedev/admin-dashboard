import { useState } from 'react';
import { Add, AlertBig, AlertClose, SuccessIcon } from '../../assets/svgs';
import { allPermissions } from '../../constants';
import { Button, InputGroup, Modal, PermissionTag } from '../../ui';
import { Container } from './styles';
import { ToastContainer, toast } from 'react-toastify';

const Department = ({ title, departmentPermissions, permissionKey, setPermissions }) => {
	const [modal, setModal] = useState({
		addPermissionModal: false,
		removePermissionModal: false,
	});
	const [data, setData] = useState({
		permission: '',
		permissionToRemove: '',
	});

	const closeRemovePermissionModal = () => {
		setModal((prev) => ({
			...prev,
			removePermissionModal: false,
		}));
	};

	const closeModal = () => {
		setModal((prev) => ({
			...prev,
			addPermissionModal: false,
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
			setPermissions((prev) => ({
				...prev,
				[permissionKey]: [...prev[permissionKey], allPermissions[data.permission]],
			}));
			closeModal();
			addPermissionNotify();
		}
	};

	const handleRemovePermission = () => {
		setPermissions((prev) => ({
			...prev,
			[permissionKey]: prev[permissionKey].filter(
				(permission) => permission !== data.permissionToRemove
			),
		}));
		closeRemovePermissionModal();
		removePermissionNotify();
	};

	const addPermissionNotify = () =>
		toast.success('Permission added', {
			// customId: 1,
		});

	const removePermissionNotify = () =>
		toast.success('Permission has been removed', {
			// customId: 1,
		});

	const permissionOptions = (
		<>
			<option value="">Select permission</option>
			{Object.keys(allPermissions)
				.filter((permission) => departmentPermissions.includes(allPermissions[permission]) === false)
				.map((permission) => (
					<option key={permission} value={permission}>
						{allPermissions[permission]}
					</option>
				))}
		</>
	);

	return (
		<Container department={title}>
			<ToastContainer
				position="top-center"
				hideProgressBar={true}
				toastClassName="my--toast"
				closeButton={<AlertClose />}
				icon={<SuccessIcon />}
				autoClose={3000}
			/>
			<Modal size="small" showModal={modal.addPermissionModal} closeModal={closeModal} heading={title}>
				<form onSubmit={handleSubmit}>
					<InputGroup
						type="select"
						label="Add Permission"
						name="permission"
						optionLists={permissionOptions}
						value={data?.permission}
						onChange={(e) =>
							setData((prev) => ({
								...prev,
								permission: e.target.value,
							}))
						}
						// onBlur={() =>
						// 	setData((prev) => ({
						// 		...prev,
						// 		permission: ' ',
						// 	}))
						// }
						className="required"
					/>
					<div className="button--group">
						<div>
							<Button onClick={() => setModal((prev) => !prev)} type="text">
								Cancel
							</Button>
						</div>

						<div>
							<Button onClick={handleSubmit}>Add Permision</Button>
						</div>
					</div>
				</form>
			</Modal>
			<Modal
				size="small"
				showModal={modal.removePermissionModal}
				closeModal={closeRemovePermissionModal}
			>
				<div className="alert--container">
					<div className="alert">
						<AlertBig />
					</div>
					<h1>Remove Permission</h1>
					<p>Are you sure you want to remove this permission? </p>
				</div>
				<div className="button--group">
					<div>
						<Button onClick={() => closeRemovePermissionModal()} type="text">
							Cancel
						</Button>
					</div>

					<div>
						<Button onClick={handleRemovePermission} type="danger">
							Remove Permission
						</Button>
					</div>
				</div>
			</Modal>
			<div className="header">
				<p>{title}</p>
				<div
					onClick={() =>
						setModal((prev) => ({
							...prev,
							addPermissionModal: true,
						}))
					}
				>
					<Add />
					<span>Add Permission</span>
				</div>
			</div>{' '}
			<div className="permissions">
				{departmentPermissions.map((title) => (
					<PermissionTag
						name={title}
						key={title}
						handleRemove={() => {
							setModal((prev) => ({
								...prev,
								removePermissionModal: true,
							}));
							setData((prev) => ({ ...prev, permissionToRemove: title }));
						}}
					/>
				))}
			</div>
		</Container>
	);
};

export default Department;
