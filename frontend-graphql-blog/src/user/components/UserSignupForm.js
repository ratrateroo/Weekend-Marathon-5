import React from 'react';

import './UserSignupForm.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const UserSignupForm = (props) => {
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

	const signupSubmitHandler = async (event) => {
		event.preventDefault();
		fetch('http://localhost:5000/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: formState.inputs.name.value,
				email: formState.inputs.email.value,
				password: formState.inputs.name.value,
				firstname: formState.inputs.firstname.value,
				middlename: formState.inputs.middlename.value,
				lastname: formState.inputs.lastname.value,
			}),
		});
		console.log(formState.inputs);
	};

	return (
		<div className="c-form">
			<form onSubmit={signupSubmitHandler} className="c-form__body">
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

				<div className="c-form-button">
					<Button submit disabled={!formState.isValid}>
						Sign Up
					</Button>
				</div>
			</form>
		</div>
	);
};

export default UserSignupForm;
