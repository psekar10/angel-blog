const INITIAL_STATE = {
}

const pokemonListReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'POKEMON_LIST_SUCCESS':
            return {...state, ...action.payload};
        case 'POKEMON_LIST_FETCH_ERROR':
            console.log('error:', action.err);
            return null;
        default:
            return {...state};
    }
}

export default pokemonListReducer;