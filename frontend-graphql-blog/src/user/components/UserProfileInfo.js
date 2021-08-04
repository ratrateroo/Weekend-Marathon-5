import React, { useState } from 'react';

import './UserProfileInfo.css';
import dummy_image from '../../Images/user_dummy.png';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
const UserProfileInfo = (props) => {
	const [creating, setCreating] = useState(false);

	const startCreateEventHandler = () => {
		setCreating(true);
	};

	const cancelCreateEventHandler = () => {
		setCreating(false);
	};

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
					<Modal
						header="Update Profile"
						footer={
							<React.Fragment>
								<Button submit onClick={console.log('Clicked Update')}>
									Update
								</Button>
								<Button cancel onClick={cancelCreateEventHandler}>
									Cancel
								</Button>
							</React.Fragment>
						}></Modal>
				)}
			</div>
		</div>
	);
};

export default UserProfileInfo;
