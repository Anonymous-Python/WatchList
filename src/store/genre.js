import axios from 'axios';

let initialState = {
    genres : [
        { id: 28, name: 'Action' },
        { id: 35, name: 'Comedy' },
        { id: 18, name: 'Drama' },
        { id: 14, name: 'Fantasy' },
        { id: 27, name: 'Horror' },
        { id: 878, name: 'Science Fiction' },
    ],
    movies : []
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch(type) {
        case 'CHANGE_GENRE':
            console.log('PAYLOAD', action.payload)
           return { ...state, movies: action.payload}
           
        default:
            return state;
    }

}
// let API_URL = '6a687d5c19937c71f3ca3bc1a0a6a1ab';
export const changeGenre = id =>{

    return async function (dispatch) {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6a687d5c19937c71f3ca3bc1a0a6a1ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_genres=${id}`)
        dispatch({ type: 'CHANGE_GENRE', payload: response.data.results })
    }
}
