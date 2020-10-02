import React from 'react';
import { connect } from 'react-redux'
import { deleteFromFavorites } from '../store/watchList'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { If, Then, Else } from 'react-if'

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
    toolbar: {
      background: 'linear-gradient(45deg, #8360c3 30%, #2ebf91 90%)',//'linear-gradient(45deg, #c31432 30%, #240b36 90%)',
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  appBar: {
    zIndex: 1000
    },
}));

const WatchList = (props) => {
    const classes = useStyles();
    return (
        <>
        <Container>
        <AppBar className={classes.appBar} position="relative">
            <Toolbar className={classes.toolbar}>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="h2">
                            My Watch List 
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            <If condition={props.watchList.movies.length === 0}>
                <Then>
                    <p>Add a movie for it to display here!</p>
            
                </Then>
                <Else>
                {props.watchList.movies.map(movie => {
                return (
                    <Grid item key={movie.id} xs={12} sm={6} md={4}>
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
                            </CardContent>     
                        <CardActions>
                            <Button onClick={() => props.deleteFromFavorites(movie)} size="small" color="primary">
                                Remove From Watch List
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                )
            })}
                </Else>
            </If>
            </Grid>
            </Container>
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