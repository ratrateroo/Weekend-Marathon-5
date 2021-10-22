import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';
import './ImageUpload.css';

const ImageUpload = (props) => {
	const [file, setFile] = useState();
	const [previewUrl, setPreviewUrl] = useState();
	const [isValid, setIsValid] = useState(false);

	const filePickerRef = useRef();

	useEffect(() => {
		if (!file) {
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result);
			props.onUpload(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}, [file]);

	const pickedHandler = (event) => {
		let pickedFile;
		let fileIsValid = isValid;
		if (event.target.files && event.target.files.length === 1) {
			pickedFile = event.target.files[0];
			setFile(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		} else {
			setIsValid(false);
			fileIsValid = false;
		}
		props.onInput(props.id, pickedFile, fileIsValid);
	};

	const pickImageHandler = () => {
		filePickerRef.current.click();
	};

	return (
		<div className="form-control">
			{/* <div className={`image-upload ${props.center && 'center'}`}>
				<div className="image-upload__preview">
					{previewUrl ? (
						<img
							src={previewUrl}
							className="c-user-updateprofile__image-pic"
							alt="Preview"
						/>
					) : (
						<img
							src={props.currentimage}
							className="c-user-updateprofile__image-pic"
							alt="Preview"
						/>
					)}
					{!props.currentimage && <p>Please pick an image.</p>}
				</div>
			</div> */}
			<input
				id={props.id}
				ref={filePickerRef}
				style={{ display: 'none' }}
				type="file"
				accept=".jpg,.png,.jpeg"
				onChange={pickedHandler}
			/>

			<Button type="button" onClick={pickImageHandler}>
				PICK IMAGE
			</Button>
			{!isValid && <p>{props.errorText}</p>}
		</div>
	);
};

export default ImageUpload;
