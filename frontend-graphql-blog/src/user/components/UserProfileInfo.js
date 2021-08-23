import React, { useState } from 'react';

import './UserProfileInfo.css';
import dummy_image from '../../Images/user_dummy.png';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import SimpleModal from '../../shared/components/UIElements/SimpleModal';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
const UserProfileInfo = (props) => {
	const [creating, setCreating] = useState(false);

	const startCreateEventHandler = () => {
		setCreating(!creating);
	};

	const cancelCreateEventHandler = () => {
		setCreating(!creating);
	};

	const updateProfileSubmitHandler = () => {
		console.log('Update Profile Submit Clicked');
	};

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

	return (
		<div className="c-user-profile">
			<div className="c-user-profile__image">
				{/* <img
					className="c-user-profile__image-pic"
					src={props.image}
					alt={props.name}
				/> */}

				<img
					className="c-user-profile__image-pic"
					src={dummy_image}
					alt={props.username}
				/>
			</div>

			<div className="c-user-profile__info">
				<h2 className="c-user-profile__info__fullname">
					{props.firstname.concat(
						' ',
						props.middlename,
						' ',
						props.lastname
					)}
				</h2>
				<ul className="c-user-profile__info__detail-list">
					<li className="c-user-profile__info__detail-item">
						Blogs: {props.createdBlogs.length}
					</li>
					<li className="c-user-profile__info__detail-item">
						Friends: {props.friends}
					</li>
				</ul>
				<Button onClick={startCreateEventHandler}>Update Profile</Button>
				{creating && (
					<SimpleModal
						header="Update Profile"
						canCancel
						canConfirm
						onCancel={cancelCreateEventHandler}
						onConfirm={updateProfileSubmitHandler}
						// footer={
						// 	<React.Fragment>
						// 		<Button submit onClick={console.log('Clicked Update')}>
						// 			Update
						// 		</Button>
						// 		<Button cancel onClick={cancelCreateEventHandler}>
						// 			Cancel
						// 		</Button>
						// 	</React.Fragment>
						// }
					>
						<div className="c-form">
							<form
								onSubmit={updateProfileSubmitHandler}
								className="c-form__body">
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
					</SimpleModal>
				)}
			</div>
		</div>
	);
};

export default UserProfileInfo;
