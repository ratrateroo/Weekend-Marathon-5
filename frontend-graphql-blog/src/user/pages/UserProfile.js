import React from 'react';
import { useParams } from 'react-router-dom';

import MainBody from '../../shared/components/UIElements/MainBody';
import UserProfileInfo from '../components/UserProfileInfo';

const UserProfile = (props) => {
	const USERS = [
		{
			_id: 'userid1',
			username: 'jamesbong',
			email: 'jamesbong@gmail.com',
			password: null,
			firstname: 'James Bong',
			middlename: 'Meister',
			lastname: 'Lee',
		},
		{
			_id: 'userid2',
			username: 'rose',
			email: 'parkchaeyoung@gmail.com',
			password: null,
			firstname: 'Roseanne ',
			middlename: 'Unknown',
			lastname: 'Park',
		},
		{
			_id: 'userid3',
			username: 'jisoo',
			email: 'kimjisoo@gmail.com',
			password: null,
			firstname: 'Jisoo ',
			middlename: 'Unknown',
			lastname: 'Kim',
		},
		{
			_id: 'userid4',
			username: 'lisa',
			email: 'lalisamanoban@gmail.com',
			password: null,
			firstname: 'Lalisa ',
			middlename: 'Unknown',
			lastname: 'Manoban',
		},
		{
			_id: 'userid5',
			username: 'jennie',
			email: 'kimjennie@gmail.com',
			password: null,
			firstname: 'Jennie ',
			middlename: 'Unknown',
			lastname: 'Kim',
		},
	];

	const userId = useParams().userId;
	const loadedUser = USERS.filter((user) => user.id === userId);
	// const loadedUser = USERS.find(user => user.id === userId);

	return (
		<MainBody title={props.title}>
			{console.log(loadedUser)}
			<UserProfileInfo
				// key={loadedUser.id}
				// uid={id}
				// image={image}
				// name={name}
				// blogCount={blogs}
				// friendCount={friends}
				{...loadedUser[0]}
			/>
		</MainBody>
	);
};

export default UserProfile;
