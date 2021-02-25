import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {MOVIE_URL} from './Config.js';
import Movie from "./Movie.js";
import "./App.css";

function App() {
  
	const [Loading, setLoading] = useState(true)
	const [Movies, setMovies] = useState([])
	
	useEffect(()=> {
		
		getMovies(MOVIE_URL);
		
	}, [])
	
	const getMovies = (url) => {
		axios.get(url)
			.then(response => {
				setMovies(response.data.results)
				console.log(response.data.results)
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			})
		
	}
	
    return (
		<section className="container">
			{Loading ? (
				<div className="loader">
					<span className = "loader_text">Loading...</span>
				</div>
			):(
				<div className="movies">
					{Movies && Movies.map((movie, index) => (
						<React.Fragment key = {index}>
							<Movie
								id={movie.id}
								title={movie.title}
								overview={movie.overview}
								popularity={movie.popularity}
								vote_average={movie.vote_average}
								release_date={movie.release_date}
								poster_path={movie.poster_path}
								genre={movie.genre_ids}
							/>
						</React.Fragment>
					))}
				</div>
			)}
		</section>
    );
}

export default App;
