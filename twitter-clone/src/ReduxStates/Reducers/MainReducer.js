// Reducer for toggling view mode - day or night
const type = JSON.parse(localStorage.getItem('type'))

const mainReducer = (state = type ? type : {mode: 'home'}, action) => {
    switch (action.type) {
        case 'update':
            localStorage.setItem('type', JSON.stringify(action.payload))
            return action.payload
        default:
            return state
    }
}

export default mainReducer