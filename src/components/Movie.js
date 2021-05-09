import React from 'react';
import PropTypes from 'prop-types';
import {IMAGE_BASE_URL} from '../Config.js';
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie(props) {
	return (
		<Link to = {{
				pathname: `/movie/${props.id}`,
				state: {props}
			}}
		>
			<div className="movie">
					<img 
						src={`${IMAGE_BASE_URL}w500${props.poster_path}`} 
						alt={props.title} 
						title={props.title} 
					/>
				<div className="movie_data">
					<h3 className="movie_title">{props.title}</h3>
					<h5 className="movie_release_date">{props.release_date}</h5>
					<ul className="movie_genre">
						{props.genre.map((genre, index) =>  (
							<li  key={index} className="genres_genre">
								{genre}
							</li>
						))}
					</ul>
					<p className="movie_summary">
						{props.overview.slice(0,140)}...
					</p>
				</div>
			</div>
		</Link>
	)
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	overview: PropTypes.string.isRequired,
	popularity: PropTypes.number.isRequired,
	vote_average: PropTypes.number.isRequired,
	release_date: PropTypes.string.isRequired,
	poster_path: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.number)
}

export default Movie