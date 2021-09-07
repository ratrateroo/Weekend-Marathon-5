import React, { useEffect } from 'react';

import Input from '../FormElements/Input';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../util/validators';
import { useForm } from '../../hooks/form-hook';

import './UpdateProfileForm.css';

const UpdateProfileForm = (props) => {
	const [formState, inputHandler] = useForm(
		{
			username: {
				value: '',
				isValid: true,
			},
			email: {
				value: '',
				isValid: true,
			},
			password: {
				value: '',
				isValid: true,
			},
			firstname: {
				value: '',
				isValid: true,
			},
			middlename: {
				value: '',
				isValid: true,
			},
			lastname: {
				value: '',
				isValid: true,
			},
		},
		false
	);
	useEffect(() => {
		props.onChange(formState.isValid);
		console.log(formState);
	}, [formState]);

	return (
		<div className="c-form">
			<form onSubmit={props.onSubmit} className="c-form__body">
				<Input
					element="input"
					id="username"
					type="text"
					placeholder="Enter your username here!"
					label="Username:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid username."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="email"
					type="email"
					placeholder="Enter your email here!"
					label="Email:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid email."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="password"
					type="password"
					placeholder="Enter your password here!"
					label="Password:"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid password with a minimum of 5 characters."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="firstname"
					type="text"
					placeholder="Enter your firstname here!"
					label="First Name:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid firstname."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="middlename"
					type="text"
					placeholder="Enter your middlename here!"
					label="Middle Name:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid middlename."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="lastname"
					type="text"
					placeholder="Enter your lastname here!"
					label="Last Name:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid lastname."
					onInput={inputHandler}
				/>
			</form>
		</div>
	);
};

export default UpdateProfileForm;
