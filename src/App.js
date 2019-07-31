import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
	'Buenos Aires,ar',
	'Washington,us',
	'Bogota,col',
	'Cali,col',
	'Madrid,es',
	'Lima,pe',
];
//Esto es una prueba de commits
class App extends Component {
	render() {
		return (
			<div className="App" >
				<header className="App-header" >
					<LocationList cities={cities}></LocationList>
				</header>
			</div>
		);
	}

}

export default App;