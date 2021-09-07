import React, { useState } from 'react';

import Button from '../FormElements/Button';

import UpdateProfileForm from './UpdateProfileForm';

import './UpdateModal.css';

const Modal = (props) => {
	const [formValid, setFormValid] = useState(false);

	return (
		<div className={`c-modal`} style={props.style}>
			<header className={`c-modal__header`}>
				<h2 className={`c-modal__title`}>{props.title}</h2>
			</header>
			<div>
				<div className={`c-modal__content-`}>
					<UpdateProfileForm
						onChange={(validity) => console.log('We get: ' + validity)}
					/>
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
							{formValid && (
								<Button submit onClick={props.onConfirm}>
									Ok
								</Button>
							)}
						</div>
					)}
				</footer>
			</div>
		</div>
	);
};

export default Modal;
