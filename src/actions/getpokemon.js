
export const getpokemon = dispatch => {
    dispatch({type: 'FETCH_STARTED'});
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(result => result.json())
    .then(data => {
        dispatch({
            type: 'POKEMON_SUCCESS',
            payload: data.results
        })
    }).catch(err => {
        dispatch({type: 'FETCH_ERROR', err});
    })
}

export const getpokemonlist = url => dispatch => {
    dispatch({type: 'POKEMON_LIST_FETCH_STARTED'});
    fetch(url)
    .then(result => result.json())
    .then(data => {
        dispatch({
            type: 'POKEMON_LIST_SUCCESS',
            payload: data
        })
    }).catch(err => {
        dispatch({type: 'POKEMON_LIST_FETCH_ERROR'}, err);
    })
}

export const getCommonStates = status => dispatch => {
    dispatch({
        type: 'MODEL_STATUS',
        payload: status
    });

}