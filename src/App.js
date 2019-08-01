import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
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
			<Grid>
				<Row>
					<AppBar position='sticky'>
						<Toolbar>
							<Typography variant='h6' color='inherit'>
								Weather App
							</Typography>
						</Toolbar>
					</AppBar>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<LocationList
							cities={cities}
							onSelectedLocation={this.handleSelectedLocation}>
						</LocationList>
					</Col>
					<Col xs={12} md={6}>
						<Paper elevation={4}>
							<div className="details"></div>
						</Paper>
					</Col>
				</Row>

			</Grid>
		);
	}

}

export default App;