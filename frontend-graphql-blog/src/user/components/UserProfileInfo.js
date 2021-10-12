import React, { useState } from 'react';

import './UserProfileInfo.css';
import dummy_image from '../../Images/user_dummy.png';
import Button from '../../shared/components/FormElements/Button';

import UpdatePictureModal from '../../shared/components/UIElements/UpdatePictureModal';

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

				{changeImage && (
					<UpdatePictureModal
						header="Update Profile Picture"
						canCancel
						canConfirm
						onCancel={cancelCreateEventHandler}
						onConfirm={updateProfileImageHandler}></UpdatePictureModal>
				)}
			</div>
			<Button onClick={startChangeImageHandler}>Change Image</Button>

			<div className="c-user-profile__info">
				<h2 className="c-user-profile__info__fullname">
					{props.firstname + ' ' + props.middlename + ' ' + props.lastname}
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
				{/* {updating && (
					<UpdateModal
						header="Update Profile"
						canCancel
						canConfirm></UpdateModal>
				)} */}
			</div>
		</div>
	);
};

export default UserProfileInfo;
