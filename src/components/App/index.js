import React, { Component } from 'react';

import Film from './../Film';
import Hoc from './../Hoc';
import './App.css';

const filmUrl = 'http://www.omdbapi.com/?i=tt1285016&apikey=2847dfc8';
const HocFilm = Hoc(filmUrl)(Film)

class App extends Component {

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<HocFilm />
				</header>
			</div>
		);
	}
}

export default App;
