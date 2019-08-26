export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({ type: SET_CITY, payload });

const api_key = "6b8f3a23bfa7d826edc42f9ddbc85eec";
const url_base_weather = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchForecast = payload => {

	return dispatch => {
		const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;

		// activar en el estado un indicador de búsqueda de datos
		fetch(url_forecast).then(
			data => (data.json())
		).then(
			weather_data => {
				const forecastData = transformForecast(weather_data);
				console.log(forecastData);
				//Modificar el estado con el resultado de la promise(fetch)
			}
		);
		return;
	};
};