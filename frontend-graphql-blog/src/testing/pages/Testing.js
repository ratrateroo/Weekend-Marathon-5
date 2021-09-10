import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';

import BoilingVerdict from '../components/BoilingVerdict';

const Testing = (props) => {
	return (
		<MainBody title={props.title}>
			<BoilingVerdict />
		</MainBody>
	);
};

export default Testing;
