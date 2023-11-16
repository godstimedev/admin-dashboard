import { useState } from 'react';
import { Search, Info, Eye, EyeSlash } from '../../assets/svgs';
import { Container } from './styles';

const InputGroup = (props) => {
	const {
		type,
		placeholder,
		size,
		required,
		disabled,
		warnMsg,
		successMsg,
		errorMsg,
		onBlur,
		onChange,
		success,
		optional,
		label,
		name,
		optionLists,
		register,
		...rest
	} = props;

	const [password, setPassword] = useState('password');

	return (
		<Container tabIndex="1" size={size ? size : 'large'} className={success}>
			<div className="input--group">
				{type === 'textarea' ? (
					<>
						<textarea
							type="text"
							placeholder={placeholder}
							required={required}
							disabled={disabled}
							onBlur={(e) => {
								if (typeof onChange === 'function') onBlur(e);
							}}
							onChange={(e) => {
								if (typeof onChange === 'function') onChange(e);
							}}
							data-warnmsg={warnMsg}
							data-errormsg={errorMsg}
							data-successmsg={successMsg}
							{...rest}
						/>

						<label htmlFor="">
							{label} {optional && <span>(Optional)</span>}
						</label>
					</>
				) : type === 'date' ? (
					<>
						<input
							type="text"
							name={name}
							placeholder="MM/DD/YYYY"
							required={required}
							disabled={disabled}
							data-warnmsg={warnMsg}
							data-errormsg={errorMsg}
							data-successmsg={successMsg}
							onBlur={(e) => {
								if (typeof onChange === 'function') onBlur(e);
							}}
							// onFocus={(e) => {
							// 	if (e.currentTarget.type.includes('date')) e.currentTarget?.showPicker();
							// }}
							onFocus={(e) => (e.target.type = 'date')}
							onChange={(e) => {
								if (typeof onChange === 'function') onChange(e);
							}}
							{...rest}
						/>

						<label htmlFor="">
							{label} {optional && <span>(Optional)</span>}
						</label>
					</>
				) : type === 'select' ? (
					<>
						<select
							type="select"
							name={name}
							className={'select'}
							data-warnmsg={warnMsg}
							data-errormsg={errorMsg}
							data-successmsg={successMsg}
							// onBlur={(e) => {
							// 	if (typeof onChange === 'function') onBlur(e);
							// }}
							onChange={(e) => {
								if (typeof onChange === 'function') onChange(e);
							}}
							{...rest}
						>
							{optionLists}
						</select>

						<label htmlFor="">
							{label} {optional && <span>(Optional)</span>}
						</label>
					</>
				) : type === 'search' ? (
					<>
						<input
							type="text"
							name={name}
							placeholder={placeholder}
							className={'search'}
							required={required}
							disabled={disabled}
							data-warnmsg={warnMsg}
							data-errormsg={errorMsg}
							data-successmsg={successMsg}
							onBlur={(e) => {
								if (typeof onChange === 'function') onBlur(e);
							}}
							onChange={(e) => {
								if (typeof onChange === 'function') onChange(e);
							}}
							{...rest}
						/>
						<Search />
					</>
				) : type === 'price' ? (
					<>
						<input
							type="text"
							name={name}
							placeholder={placeholder}
							className={'price'}
							required={required}
							disabled={disabled}
							data-warnmsg={warnMsg}
							data-errormsg={errorMsg}
							data-successmsg={successMsg}
							onBlur={(e) => {
								if (typeof onChange === 'function') onBlur(e);
							}}
							onChange={(e) => {
								if (typeof onChange === 'function') onChange(e);
							}}
							{...rest}
						/>
						<label htmlFor="">
							{label} {optional && <span>(Optional)</span>}
						</label>
						<div className="currency">NGN</div>
					</>
				) : type === 'password' ? (
					<>
						<input
							type={password}
							name={name}
							placeholder={placeholder}
							required={required}
							disabled={disabled}
							onBlur={(e) => {
								if (typeof onChange === 'function') onBlur(e);
							}}
							onChange={(e) => {
								if (typeof onChange === 'function') onChange(e);
							}}
							data-warnmsg={warnMsg}
							data-errormsg={errorMsg}
							data-successmsg={successMsg}
							{...register}
							{...rest}
						/>

						<label htmlFor="">
							{label} {optional && <span>(Optional)</span>}
						</label>
						{errorMsg && (
							<div className="info--con">
								<Info /> {errorMsg.message}
							</div>
						)}
						{password === 'password' && (
							<div className="icon">
								<Eye onClick={() => setPassword('text')} />
							</div>
						)}
						{password === 'text' && (
							<div className="icon">
								<EyeSlash onClick={() => setPassword('password')} />
							</div>
						)}
					</>
				) : type === 'file' ? (
					<>
						<label htmlFor={name} className="file--label">
							{label}
							<input
								type={type ? type : 'text'}
								name={name}
								placeholder={placeholder}
								required={required}
								disabled={disabled}
								onBlur={(e) => {
									if (typeof onChange === 'function') onBlur(e);
								}}
								onChange={(e) => {
									if (typeof onChange === 'function') onChange(e);
								}}
								data-warnmsg={warnMsg}
								data-errormsg={errorMsg}
								data-successmsg={successMsg}
								{...register}
								{...rest}
							/>
						</label>
						{/* {errorMsg && (
							<div className="info--con">
								<Info /> {errorMsg.message}
							</div>
						)} */}
					</>
				) : (
					<>
						<input
							type={type ? type : 'text'}
							name={name}
							placeholder={placeholder}
							required={required}
							disabled={disabled}
							onBlur={(e) => {
								if (typeof onChange === 'function') onBlur(e);
							}}
							onChange={(e) => {
								if (typeof onChange === 'function') onChange(e);
							}}
							data-warnmsg={warnMsg}
							data-errormsg={errorMsg}
							data-successmsg={successMsg}
							{...register}
							{...rest}
						/>

						<label htmlFor="">
							{label} {optional && <span>(Optional)</span>}
						</label>
						{errorMsg && (
							<div className="info--con">
								<Info /> {errorMsg.message}
							</div>
						)}
					</>
				)}
			</div>

			{/* <div className="info--con error--con hidden">
				<Info />
			</div> */}
		</Container>
	);
};

export default InputGroup;
