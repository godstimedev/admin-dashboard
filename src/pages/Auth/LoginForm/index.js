import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Approutes } from '../../../constants';
import { Button, InputGroup } from '../../../ui';
import { Container } from './styles';

const LoginForm = () => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			password: '',
			email: '',
		},
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	console.log(errors);

	return (
		<Container>
			<div className="form--header">
				<h2>Log in</h2>
				<p>Welcome back! Please enter your details.</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup
					size="medium"
					type="email"
					name="email"
					label="Email"
					placeholder="@gmail.com"
					errorMsg={errors.email}
					register={{
						...register('email', {
							required: 'Please enter email',
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
								message: 'The email you provided is invalid',
							},
						}),
					}}
				/>

				<InputGroup
					size="medium"
					type="password"
					label="Password"
					placeholder="••••••••"
					errorMsg={errors.password}
					register={{
						...register('password', {
							required: 'Please enter password',
							// minLength: {
							// 	value: 7,
							// 	message: 'The password is incorrect. 3 attempts left.',
							// },
						}),
					}}
				/>
			</form>
			<div className="button--con">
				<Button
					onClick={handleSubmit(onSubmit)}
					disabled={watch('email') === '' || watch('password') === '' ? true : false}
				>
					Sign in
				</Button>
				<Link to={Approutes.auth.resetPassword}>
					<Button type="text">Reset password</Button>
				</Link>
			</div>
		</Container>
	);
};

export default LoginForm;
