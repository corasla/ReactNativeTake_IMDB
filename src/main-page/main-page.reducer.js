const initialState = {
    isLoaded: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'APP_LOADED':
            return { ...state, isLoaded: true }
        default:
            return state
    }
}
