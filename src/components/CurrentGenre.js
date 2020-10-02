import React from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../store/watchList'


import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        height: '50%'
    },
    
    cardContent: {
        flexGrow: 1,
    },
}));

const CurrentGenre = (props) => {
    
    const classes = useStyles();
    
    return (
        <>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {console.log('props', props)}
                    {props.CurrentGenre.map(movie => {
                        return <Grid item key={movie.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.cardMedia}
                                component="img"
                                alt="movie image"
                                image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                title={movie.title}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {movie.title}
                                    </Typography>
                                    <Typography>
                                    Rating: {movie.vote_average}
                                    </Typography>
                                    <Typography>
                                        {movie.overview}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => props.addToFavorites(movie)} size="small" color="primary">
                                        Add to Watch List
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>                            
                    })}
                </Grid>
            </Container>
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