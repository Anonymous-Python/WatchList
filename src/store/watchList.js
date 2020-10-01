let initialState = {
    movies : []
}

export default (state = initialState, action) => {
    let { type, payload } = action

    switch(type) {
        case 'ADD_TO_FAVORITES':
            let movies = state.movies
            if(!movies.includes(payload)){
                movies.push(payload)
            }
            return { movies };

        case 'DELETE_FROM_FAVORITES':
            let movies1 = state.movies.filter(movie => movie !== payload)
            return { movies: movies1 }
     
            default:
            return state;
    }
}

export const addToFavorites = name =>{
    
    return {
        type: 'ADD_TO_FAVORITES',
        payload: name
    }
}

export const deleteFromFavorites = name =>{
    return {
        type: 'DELETE_FROM_FAVORITES',
        payload: name,
    }
}

