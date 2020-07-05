const pokemons = {}

const counter = (state={}, action) => {
    switch (action.type) {
        case 'POKEMON_SUCCESS':
            for (let [key, value] of Object.entries(action.payload)) {
                pokemons[value['name']] = value['url']
            }
            return {...state, ...pokemons};
            case 'FETCH_ERROR':
                console.log('error:', action.err);
                return null;
        default:
            return {...state};
    }
}

export default counter;