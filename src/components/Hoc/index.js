import React, { Component } from 'react';

const HocFilm = (url) => 
    (FilmComponent) => 
        class extends Component {
            constructor(props) {
                super(props);

                this.state = {
                    film: {}
                };
            }

            componentDidMount() {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => this.setState({ 
                        film: {
                            name: data.Title,
                            year: data.Year,
                            country: data.Country,
                            description: data.Plot,
                            banner: data.Poster
                        }
                    }));
            }

            render() {
                return <FilmComponent film={this.state.film} {...this.props} />;
            }
        }

export default HocFilm;