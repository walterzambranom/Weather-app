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
	handleSelectedLocation = city => {
		console.log(`handleSelectedLocation ${city}`);
	}
	render() {
		return (
			<div className="App" >
				<header className="App-header" >
					<LocationList
						cities={cities}
						onSelectedLocation={this.handleSelectedLocation}>
					</LocationList>
				</header>
			</div>
		);
	}

}

export default App;