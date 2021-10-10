import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MainBody from '../../shared/components/UIElements/MainBody';
import UserProfileInfo from '../components/UserProfileInfo';

import { AuthContext } from '../../shared/context/auth-context';

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
			createdBlogs: [],
			friends: 0,
		},
		{
			_id: 'userid2',
			username: 'rose',
			email: 'parkchaeyoung@gmail.com',
			password: null,
			firstname: 'Roseanne ',
			middlename: 'Unknown',
			lastname: 'Park',
			createdBlogs: [],
			friends: 0,
		},
		{
			_id: 'userid3',
			username: 'jisoo',
			email: 'kimjisoo@gmail.com',
			password: null,
			firstname: 'Jisoo ',
			middlename: 'Unknown',
			lastname: 'Kim',
			createdBlogs: [],
			friends: 0,
		},
		{
			_id: 'userid4',
			username: 'lisa',
			email: 'lalisamanoban@gmail.com',
			password: null,
			firstname: 'Lalisa ',
			middlename: 'Unknown',
			lastname: 'Manoban',
			createdBlogs: [],
			friends: 0,
		},
		{
			_id: 'userid5',
			username: 'jennie',
			email: 'kimjennie@gmail.com',
			password: null,
			firstname: 'Jennie ',
			middlename: 'Unknown',
			lastname: 'Kim',
			createdBlogs: [],
			friends: 0,
		},
	];
	const userId = useParams().uid;
	const auth = useContext(AuthContext);
	const [loadedUser, setLoadedUser] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const requestBody = {
					query: `
					query User($_id: ID!) {
					user(_id: $_id) {
						_id
						username
						email
						password
						firstname
						middlename
						lastname
				
					}
					}
				`,
					variables: {
						_id: userId,
					},
				};

				fetch('http://localhost:8000/graphql', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + auth.token,
					},
					body: JSON.stringify(requestBody),
				})
					.then((res) => {
						if (res.status !== 200 && res.status !== 201) {
							throw new Error('Failed!');
						}

						return res.json();
					})
					.then((resData) => {
						console.log(resData.data);
						console.log(resData.data.user);
						setLoadedUser(resData.data.users);
					})
					.catch((err) => {
						console.log(err);
					});

				console.log('Logging In');
			} catch (err) {
				console.log(err);
			}
		};
		fetchUsers();
	}, [auth.token]);

	const loadedUser = USERS.filter((user) => user._id === userId);
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
