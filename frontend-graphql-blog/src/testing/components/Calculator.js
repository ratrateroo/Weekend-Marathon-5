import React, { useState } from 'react';

import TemperatureInput from './TemperatureInput';

const Calculator = (props) => {
	const [temperature, setTemperature] = useState('');

	handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	return (
		<div>
			<TemperatureInput scale="c" onTemperatureChange={handleChange} />
			<TemperatureInput scale="f" onTemperatureChange={handleChange} />
		</div>
	);
};

export default Calculator;
