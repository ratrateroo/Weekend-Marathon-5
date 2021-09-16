import React, { useState } from 'react';

import TemperatureInput from './TemperatureInput';

const Calculator = (props) => {
	const [temperature, setTemperature] = useState('');
	const [scale, setScale] = useState('c');

	handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	return (
		<div>
			<TemperatureInput
				scale="c"
				temperature={temperature}
				onTemperatureChange={handleChange}
			/>
			<TemperatureInput
				scale="f"
				temperature={temperature}
				onTemperatureChange={handleChange}
			/>
		</div>
	);
};

export default Calculator;
