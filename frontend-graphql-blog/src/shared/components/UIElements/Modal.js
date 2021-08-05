import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = (props) => {
	const content = (
		<div className={`c-modal`} style={props.style}>
			<header className={`c-modal__header`}>
				<h2 className={`c-modal__title`}>{props.header}</h2>
			</header>
			<form
			// onSubmit={
			// 	props.onSubmit
			// 		? props.onSubmit
			// 		: (event) => event.preventDefault()
			// }
			>
				<div className={`c-modal__content-`}>{props.children}</div>
				<footer className={`c-modal__footer`}>{props.footer}</footer>
			</form>
		</div>
	);

	//return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
	return content;
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{/* {props.show && <Backdrop onClick={props.onCancel} />} */}

			<ModalOverlay {...props} />
		</React.Fragment>
	);
};

export default Modal;
