import React, { useState } from 'react';

import './UserProfileInfo.css';
import dummy_image from '../../Images/user_dummy.png';
import Button from '../../shared/components/FormElements/Button';

import UpdateModal from '../../shared/components/UIElements/UpdateModal';

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
					<UpdateModal
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
					></UpdateModal>
				)}
			</div>
		</div>
	);
};

export default UserProfileInfo;
