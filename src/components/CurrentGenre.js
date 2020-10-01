import React from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../store/watchList'

const CurrentGenre = (props) => {
    return (
        <>
        {console.log('props', props)}
        <ul>
            {props.CurrentGenre.map(movie => {
                return <li key={movie.id}>
                    {/* <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /> */}
                    <h4>{movie.title}</h4>
                    <h5>Rating: {movie.vote_average}</h5>
                    <p>{movie.overview}</p>
                    <button onClick={() => props.addToFavorites(movie)}>Add to Watch List</button>
                </li>
            })}
        </ul>
        </>
    )
}


const mapStateToProps = state => {
    return {
        CurrentGenre: state.genre.movies,
    }
}
const mapDispatchToProps = { addToFavorites };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentGenre);