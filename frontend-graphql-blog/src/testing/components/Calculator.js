import React, { useState } from 'react';

import TemperatureInput from './TemperatureInput';

import { tryConvert } from '../helpers/conversions';

import { toCelsius } from '../helpers/conversions';

import { toFahrenheit } from '../helpers/conversions';

import BoilingVerdict from './BoilingVerdict';

const Calculator = (props) => {
	const [temperature, setTemperature] = useState('');
	const [scale, setScale] = useState('c');

	const celsius =
		scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit =
		scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	const handleChange = (e) => {
		setTemperature({ temperature: e.target.value });
	};
	const celsiusChangeHandler = (celsius) => {
		setScale('c');
		setTemperature(celsius);
	};

	const fahrenheitChangeHandler = (fahrenheit) => {
		setScale('f');
		setTemperature(fahrenheit);
	};
	return (
		<div>
			<TemperatureInput
				scale="c"
				temperature={celsius}
				onTemperatureChange={celsiusChangeHandler}
			/>
			<TemperatureInput
				scale="f"
				temperature={fahrenheit}
				onTemperatureChange={fahrenheitChangeHandler}
			/>
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	);
};

export default Calculator;
