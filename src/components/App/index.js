import React, { Component } from 'react';

import Film from './../Film';
import Hoc from './../Hoc';
import './App.css';

const filmUrl = 'https://api.themoviedb.org/3/movie/297802?api_key=b227c496d142da161ca31bdf56e487d8';
const imgUrl = 'https://image.tmdb.org/t/p/original/';
const HocFilm = Hoc(filmUrl, imgUrl)(Film);

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
