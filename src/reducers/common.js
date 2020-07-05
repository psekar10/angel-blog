const common = (state={}, action) => {
    switch (action.type) {
        case 'MODEL_STATUS':
            let status = {modelStatus:action.payload}
            return {...state, ...status};
        default:
            return {...state};
    }
}

export default common;