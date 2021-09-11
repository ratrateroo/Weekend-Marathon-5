import React, { useState } from 'react';

import BoilingVerdict from './BoilingVerdict';

const Calculator = (props) => {
	const [temperature, setTemperature] = useState('');

	handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	return (
		<fieldset>
			<legend>Enter temperature in Celsius:</legend>
			<input value={temperature} onChange={handleChange} />
			<BoilingVerdict celsius={parseFloat(temperature)} />
		</fieldset>
	);
};

export default Calculator;
