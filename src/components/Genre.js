import React from 'react';
import { connect } from 'react-redux';

import { changeGenre } from '../store/genre.js';

const Genre = (props) => {
  let genreMap = props.genre.genres;
    return (
        <div>
            <ul>
                {genreMap.map(genre => {
                    return <li key={genre.name}>
                        <button key={genre.name} onClick={ ()=> props.changeGenre(genre.id)}>{genre.name}</button>
                    </li>
                })}
            </ul>          
        </div>
    )
}

const mapStateToProps = state => {
  return{
    genre: state.genre, 
  } 
}

const mapDispatchToProps = { changeGenre }


export default connect(mapStateToProps, mapDispatchToProps)(Genre);