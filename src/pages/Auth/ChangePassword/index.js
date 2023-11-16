import { useForm } from 'react-hook-form';
import { ValidInput } from '../../../assets/svgs';
import { Button, InputGroup } from '../../../ui';
import { Container } from './styles';

const ChangePassword = () => {
	const {
		handleSubmit,
		register,
		watch,
		// formState: { errors },
	} = useForm({
		defaultValues: {
			password: '',
		},
	});
	const onSubmit = (data) => {
		// console.log(data);
	};

	const password = watch('password');
	return (
		<Container>
			<div className="form--header">
				<h2>Change Password</h2>
				<p>
					Enter the password sent to your email as an old password and then create a new password that
					you would be easier for you to remember.{' '}
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup size="medium" type="password" label="Temporary Password" placeholder="••••••••" />

				<InputGroup size="medium" type="password" label="New Password" placeholder="••••••••" />

				<InputGroup
					size="medium"
					type="password"
					label="Confirm New Password"
					placeholder="••••••••"
					register={{
						...register('password', {
							required: 'Please enter password',
						}),
					}}
				/>

				<div className="form--valid">
					<div>
						{password?.length > 7 ? <ValidInput /> : <span />} <p>Contains at least 7+ Characters</p>
					</div>
					<div>
						{/\d+/.test(password) ? <ValidInput /> : <span />} <p>Contains at least 1 number</p>
					</div>
					<div>
						{/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+/.test(password) ? <ValidInput /> : <span />}
						<p>Contains both lower (a-z) and upper case letters (A - Z)</p>
					</div>
				</div>
			</form>

			<div className="button--con">
				<Button
					onClick={handleSubmit(onSubmit)}
					disabled={
						password?.length > 7 &&
						/\d+/.test(password) &&
						/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+/.test(password)
							? false
							: true
					}
				>
					Save Password & Sign in
				</Button>
			</div>
		</Container>
	);
};

export default ChangePassword;
