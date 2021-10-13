import React from 'react';

import Button from '../FormElements/Button';

import ImageUpload from '../FormElements/ImageUpload';

import { useForm } from '../../hooks/form-hook';

import './UpdateModal.css';

const modal = (props) => (
	<div className={`c-modal`} style={props.style}>
		<header className={`c-modal__header`}>
			<h2 className={`c-modal__title`}>{props.title}</h2>
		</header>
		<div>
			<div className={`c-modal__content-`}>
				<div>
					{/* <div>
						<input type="file" onChange={} />
						<button onClick={}>Upload!</button>
					</div> */}
				</div>

				<div className="c-user-profile">
					<div className="c-user-profile__image">
						<img
							className="c-user-profile__image-pic"
							src={props.profileimage}
							alt={props.username}
						/>
					</div>
					<ImageUpload
						id="image"
						// onInput={inputHandler}
						errorText="Please provide an image."
					/>
				</div>
			</div>
			<footer className={`c-modal__footer`}>
				{props.canCancel && (
					<div className="c-form-button">
						<Button cancel onClick={props.onCancel}>
							Cancel
						</Button>
					</div>
				)}

				{props.canConfirm && (
					<div className="c-form-button">
						<Button submit onClick={props.onConfirm}>
							Ok
						</Button>
					</div>
				)}
			</footer>
		</div>
	</div>
);

export default modal;
