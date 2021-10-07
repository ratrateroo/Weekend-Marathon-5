import React, { useState, useContext } from 'react';

import './UserLoginForm.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
const UserLoginForm = () => {
	const auth = useContext(AuthContext);

	const [isLoggedInMode, setIsLoggedInMode] = useState(false);

	const [formState, inputHandler] = useForm(
		{
			username: {
				value: '',
				isValid: true,
			},
			password: {
				value: '',
				isValid: true,
			},
		},
		false
	);

	const loginSubmitHandler = async (event) => {
		event.preventDefault();

		const requestBody = {
			query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
			// variables: {
			// 	email: email,
			// 	password: password,
			// },
		};

		fetch('http://localhost:8000/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error('Failed!');
				}
				setIsLoggedInMode((prevMode) => !prevMode);
				return res.json();
			})
			.then((resData) => {
				console.log(resData);
			})
			.catch((err) => {
				console.log(err);
			});

		console.log(formState.inputs);
		auth.login();
	};

	return !isLoggedInMode ? (
		<div className="c-form">
			<form action="" className="c-form__body" onSubmit={loginSubmitHandler}>
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
					id="password"
					type="password"
					placeholder="Enter your password here!"
					label="Password:"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid password with a minimum of 5 characters."
					onInput={inputHandler}
				/>

				<div className="c-form-button">
					<Button submit disabled={!formState.isValid}>
						Log In
					</Button>
				</div>
			</form>
		</div>
	) : (
		<div className="c-form">
			<form action="" className="c-form__body" onSubmit={loginSubmitHandler}>
				<div className="c-form-button">
					<Button button>Log Out</Button>
				</div>
			</form>
		</div>
	);
};

export default UserLoginForm;
