import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Avatar } from '../../../assets/images';
import { Button, InputGroup } from '../../../ui';
import { Container } from './styles';

const Profile = () => {
	const [file, setFile] = useState(null);
	const [imgUrl, setImgUrl] = useState(null);

	const handleFile = (e) => {
		console.log(e.target.files[0]);
		const file = e.target.files[0];
		if (file && file.type.startsWith('image/')) {
			setFile(file);
			setImgUrl(URL.createObjectURL(file));
		} else {
			alert('Please select a valid image file.');
		}
	};

	const handleFileSubmit = (e) => {
		e.preventDefault();
	};

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Container>
			<div>
				<h6>My Profile</h6>
				<p>You can edit your name, photo and change your password.</p>
			</div>

			<div className="profile--details">
				<div>
					<h5>Profile photo</h5>
					{file ? (
						file.size < 5 * 1024 * 1024 ? (
							<img src={imgUrl} alt={file.name} />
						) : (
							<p>File to big!</p>
						)
					) : (
						<img src={Avatar} alt={'/'} />
					)}
					<form onSubmit={handleFileSubmit}>
						<Button type="secondary">
							<InputGroup type="file" label="Edit Photo" name="file" id="file" onChange={handleFile} />
							{/* <label htmlFor="file">
								<input type="file" id="file" onChange={handleFile} />
								Edit Photo
							</label> */}
						</Button>
					</form>
				</div>

				<div>
					<div>
						<h5>Account info</h5>

						<form onSubmit={handleSubmit(onSubmit)}>
							<InputGroup
								label="First Name"
								placeholder="Daniella"
								size="medium"
								errorMsg={errors.firstName}
								register={{
									...register('firstName', {
										pattern: {
											value: /^[A-Za-z]+$/,
											message: 'Only alphabet characters are valid.',
										},
									}),
								}}
							/>
							<InputGroup
								label="Last Name"
								placeholder="Ebele"
								size="medium"
								errorMsg={errors.lastName}
								register={{
									...register('lastName', {
										pattern: {
											value: /^[A-Za-z]+$/,
											message: 'Only alphabet characters are valid.',
										},
									}),
								}}
							/>
							<div className="role">
								<p>Marketing and Comms</p>{' '}
								<span>
									<p>Department</p>
								</span>
							</div>
						</form>

						<Button onClick={handleSubmit(onSubmit)}>Update Account Info</Button>
					</div>

					<div>
						<h5>Password</h5>
						<form>
							<InputGroup
								label="Old Password"
								placeholder="Enter your old password"
								size="medium"
								type="password"
							/>
							<InputGroup
								label="New Password"
								placeholder="Enter your new password"
								size="medium"
								type="password"
							/>
							<InputGroup
								label="Confirm New Password"
								placeholder="Enter your new password again"
								size="medium"
								type="password"
							/>
						</form>

						<Button>Update Password</Button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Profile;
