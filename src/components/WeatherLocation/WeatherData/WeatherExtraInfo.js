import React from 'react';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
	<div className="weatherExtraInfoCont">
		<span>{`Humedad: ${humidity} %  `}</span>
		<span>{`Viento: ${wind}`}</span>
	</div>

);

export default WeatherExtraInfo;