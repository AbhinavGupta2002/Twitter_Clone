// Reducer for toggling view mode - day or night
const type = localStorage.getItem('type')

const mainReducer = (state = type ? type : 'home', action) => {
    switch (action.type) {
        case 'update':
            localStorage.setItem('type', action.payload)
            return action.payload
        default:
            return state
    }
}

export default mainReducer