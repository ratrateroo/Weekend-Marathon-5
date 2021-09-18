import React, { useState } from 'react';

import TemperatureInput from './TemperatureInput';

const Calculator = (props) => {
	const [temperature, setTemperature] = useState('');
	const [scale, setScale] = useState('c');

	handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	celsiusChangeHandler = (temperature) => {
		setScale('c');
		setTemperature(temperature);
	};

	fahrenheitChangeHandler = (temperature) => {
		setScale('f');
		setTemperature(temperature);
	};
	return (
		<div>
			<TemperatureInput
				scale="c"
				temperature={temperature}
				onTemperatureChange={celsiusChangeHandler}
			/>
			<TemperatureInput
				scale="f"
				temperature={temperature}
				onTemperatureChange={fahrenheitChangeHandler}
			/>
		</div>
	);
};

export default Calculator;
