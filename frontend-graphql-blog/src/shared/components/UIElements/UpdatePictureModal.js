import React, { useState } from 'react';

import Button from '../FormElements/Button';

import ImageUpload from '../FormElements/ImageUpload';

import { useForm } from '../../hooks/form-hook';

import './UpdatePictureModal.css';

const UpdatePictureModal = (props) => {
	const [currentimage, setCurrentImage] = useState(props.profileimage);
	console.log(currentimage);

	const currentImageHandler = (image) => {
		setCurrentImage(image);
	};

	return (
		<div className={`c-modal`} style={props.style}>
			<div className={`c-modal__header`}>
				<h2 className={`c-modal__title`}>{props.title}</h2>
			</div>
			<div className={`c-modal__body`}>
				<div className={`c-modal__content`}>
					{/* <div>
						
						<input type="file" onChange={} />
						<button onClick={}>Upload!</button>
					
					</div> */}

					<div className="c-user-updateprofile">
						<div className="c-user-updateprofile__image">
							<img
								className="c-user-updateprofile__image-pic"
								src={currentimage}
								alt={props.username}
							/>
						</div>
					</div>
					<ImageUpload
						id="image"
						// onInput={inputHandler}
						onUpload={currentImageHandler}
						currentimage={props.profileimage}
						errorText="Please provide an image."
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
							<Button submit onClick={props.onConfirm}>
								Ok
							</Button>
						</div>
					)}
				</footer>
			</div>
		</div>
	);
};

export default UpdatePictureModal;
