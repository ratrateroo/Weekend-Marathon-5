import React, { useState } from 'react';

import TemperatureInput from './TemperatureInput';

import { tryConvert } from '../helpers/conversions';

import { toCelsius } from '../helpers/conversions';

import { toFahrenheit } from '../helpers/conversions';

const Calculator = (props) => {
	const [temperature, setTemperature] = useState('');
	const [scale, setScale] = useState('c');

	const celsius =
		scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit =
		scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	celsiusChangeHandler = (celsius) => {
		setScale('c');
		setTemperature(celsius);
	};

	fahrenheitChangeHandler = (fahrenheit) => {
		setScale('f');
		setTemperature(fahrenheit);
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
