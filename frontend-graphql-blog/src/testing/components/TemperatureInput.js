import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
};

const TemperatureInput = (props) => {
	inputChangeHandler = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	return (
		<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}:</legend>
			<input value={temperature} onChange={inputChangeHandler} />
		</fieldset>
	);
};

export default TemperatureInput;