import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { changeGenre } from '../store/genre.js';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  genres: {
    margin: theme.spacing(3),
  },
}));


const Genre = ({genre, changeGenre}) => {
    let genreMap = genre.genres;
    useEffect(() => {
        let array = [28, 35, 18, 14, 27, 878]
        changeGenre(array[Math.floor(Math.random() * 6)]) 
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.genres}>
          <Typography variant="h5">Choose your Genre!</Typography>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                {genreMap.map(genre => {
                    return <Button
                     key={genre.name}
                     onClick={ ()=> changeGenre(genre.id)}
                     >
                       {genre.name}
                    </Button>
                })}
         </ButtonGroup>            
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