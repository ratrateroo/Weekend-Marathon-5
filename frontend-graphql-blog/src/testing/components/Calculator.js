import React, { useState } from 'react';

import TemperatureInput from './TemperatureInput';

const Calculator = (props) => {
	const [temperature, setTemperature] = useState('');

	handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	return (
		<div>
			<TemperatureInput scale="c" />
			<TemperatureInput scale="f" />
		</div>
	);
};

export default Calculator;