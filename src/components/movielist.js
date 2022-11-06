import React from 'react';
import Movie from './movie';
 
//MovieList: a container for all the Movie components and their data.

export default class MovieList extends React.Component {
    render() {
        let movieList = [
            {movieName: 'Pokemon the Movie: The Power of Us',
            movieDetail: 'Five strangers come together to save the day in Fula City when a series of threats endanger the annual Wind Festival and the city\'s entire population.'},

            {movieName: 'Pokemon: Mewtwo Stricks Back - Evolution',
            movieDetail: 'Pokémon: Mewtwo Strikes Back—Evolution is a 2019 Japanese computer-animated film directed by Kunihiko Yuyama and Motonori Sakakibara. The film is the 22nd installment in the Pokémon film series and a CGI remake of the first film. The film was animated by OLM, OLM Digital, and Sprite Animation Studios.'},

            {movieName: 'Pokémon the Movie: Secrets of the Jungle',
            movieDetail: 'Koko, a young boy who lives in the jungle with a solitary Zarude and is raised by Pokémon, journey out of the his home jungle. When he meets Ash and Pikachu, he discovers the human world and a plot threatening his home.'},

            
        ]

        return (
            <div className="container py-3 px-3">
                {movieList.map((movie, index) => <Movie key={index} {...movie} />)}
            </div>
        );
    }
}