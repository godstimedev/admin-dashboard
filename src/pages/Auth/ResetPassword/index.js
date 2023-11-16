import { useForm } from 'react-hook-form';
import { Button, InputGroup } from '../../../ui';
import { Container } from './styles';

const ResetPassword = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	return (
		<Container>
			<div className="form--header">
				<h2>Reset Password</h2>
				<p>Enter your company email address to receive a new password via email.</p>
			</div>

			<form>
				<InputGroup
					size="medium"
					type="email"
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
			</form>

			<div className="button--con">
				<Button onClick={handleSubmit()}>Reset password</Button>
			</div>
		</Container>
	);
};

export default ResetPassword;
