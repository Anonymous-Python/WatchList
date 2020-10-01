import React from 'react';
import { connect } from 'react-redux'
import { deleteFromFavorites } from '../store/watchList'
 
const WatchList = (props) => {
    console.log('THIS IS PORPS', props);
    return (
        <>
        <p>This is the watch list</p>
        <ul>
            {console.log('aweopifejawepoijfaw', props.watchList)}
            {props.watchList.movies.map(movie => {
                return <li key={movie.id}>
                    {/* <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /> */}
                    <h4>{movie.title}</h4>
                    <button onClick={() => props.deleteFromFavorites(movie)}>Remove from watch list</button>
                </li>
            })}
        </ul>
        </>
    )
}

const mapStateToProps = state => {
    return {
        watchList : state.watchList
    }
}

const mapDispatchToProps = { deleteFromFavorites }
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchList);