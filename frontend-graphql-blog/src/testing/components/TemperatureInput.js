import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit',
};

const TemperatureInput = (props) => {
	const inputChangeHandler = (e) => {
		props.onTemperatureChange(e.target.value);
	};
	return (
		<fieldset>
			<legend>Enter temperature in {scaleNames[props.scale]}:</legend>
			<input value={props.temperature} onChange={inputChangeHandler} />
		</fieldset>
	);
};

export default TemperatureInput;
