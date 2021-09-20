import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';

import Calculator from '../components/Calculator';

const Testing = (props) => {
	return (
		<MainBody title={props.title}>
			<Calculator />
		</MainBody>
	);
};

export default Testing;
