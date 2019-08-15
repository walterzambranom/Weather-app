import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import {
	CLOUD,
	SUN,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZLE,
} from './../../../constants/weathers';

const icons = {
	[CLOUD]: "cloudy",
	[SUN]: "day-sunny",
	[RAIN]: "rain",
	[SNOW]: "snow",
	[THUNDER]: "day-thunderstorm",
	[DRIZZLE]: "day-showers"
}
const getWeatherIcon = weatherState => {
	const icon = icons[weatherState];
	const sizeIcon = "3x";
	if (icon)
		return <WeatherIcons name={icon} size={sizeIcon} />;
	else
		return <WeatherIcons name={"day-sunny"} size={sizeIcon} />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
	<div className="weatherTemperatureCont">
		{
			getWeatherIcon(weatherState)
		}
		<span className="temperature">{`${temperature}`}</span><span className="temperatureType">C°</span>


	</div>
);

export default WeatherTemperature;