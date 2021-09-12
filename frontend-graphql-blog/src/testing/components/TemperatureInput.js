import React, { useState } from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
};

const TemperatureInput = (props) => {
	const [temperature, setTemperature] = useState('');

	handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	return (
		<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}:</legend>
			<input value={temperature} onChange={this.handleChange} />
		</fieldset>
	);
};

export default TemperatureInput;
