import React, { useState } from 'react';

import './UserProfileInfo.css';
import dummy_image from '../../Images/user_dummy.png';
import Button from '../../shared/components/FormElements/Button';

import UpdateModal from '../../shared/components/UIElements/UpdateModal';

import { useForm } from '../../shared/hooks/form-hook';
const UserProfileInfo = (props) => {
	const [updating, setUpdating] = useState(false);
	const [changeImage, setChangeImage] = useState(false);

	const startCreateEventHandler = () => {
		setUpdating(!updating);
	};

	const startChangeImageHandler = () => {
		setChangeImage(!changeImage);
	};

	const cancelCreateEventHandler = () => {
		setUpdating(!updating);
	};

	// const updateProfileHandler = async (event) => {
	// 	event.preventDefault();
	// 	fetch('http://localhost:5000/users/signup', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			username: formState.inputs.name.value,
	// 			email: formState.inputs.email.value,
	// 			password: formState.inputs.name.value,
	// 			firstname: formState.inputs.firstname.value,
	// 			middlename: formState.inputs.middlename.value,
	// 			lastname: formState.inputs.lastname.value,
	// 		}),
	// 	});
	// };

	const updateProfileImageHandler = () => {
		console.log('Update Profile Image');
	};

	return (
		<div className="c-user-profile">
			<div className="c-user-profile__image">
				<img
					className="c-user-profile__image-pic"
					src={dummy_image}
					alt={props.username}
				/>
				<Button onClick={startChangeImageHandler}>Change Image</Button>
				{changeImage && (
					<UpdateModal
						header="Update Profile Picture"
						canCancel
						canConfirm
						onCancel={cancelCreateEventHandler}
						onConfirm={updateProfileImageHandler}></UpdateModal>
				)}
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
				{updating && (
					<UpdateModal
						header="Update Profile"
						canCancel
						canConfirm
						// onCancel={cancelCreateEventHandler}
						// onConfirm={updateProfileHandler}
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
