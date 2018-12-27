import React, { Component } from 'react';

const HocFilm = (url, imgUrl) => 
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
                            name: data.original_title,
                            year: (new Date(data.release_date)).getFullYear(),
                            country: data.production_countries[0].name,
                            description: data.overview,
                            banner: imgUrl + data.backdrop_path
                        }
                    }));
            }

            render() {
                return <FilmComponent film={this.state.film} {...this.props} />;
            }
        }

export default HocFilm;