import React, { useState } from 'react';

import Button from '../FormElements/Button';
import Modal from './Modal';
import './MainBody.css';

const MainBody = (props) => {
	const [showModal, setShowModal] = useState(false);

	const openModalHandler = () => {
		setShowModal(true);
	};
	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<React.Fragment>
			<Modal
				show={showModal}
				onCancel={closeModalHandler}
				header="Header Part"
				footer={<Button onClick={closeModalHandler}>Close</Button>}>
				<div>
					<h2>Modal</h2>
				</div>
			</Modal>
			<main className="o-main-area">
				<section className="o-section-container">
					<div className="o-page-heading">
						<Button heading onClick={openModalHandler}>
							{props.title}
						</Button>
					</div>

					<div className="o-page-body">{props.children}</div>
				</section>
			</main>
		</React.Fragment>
	);
};

export default MainBody;
