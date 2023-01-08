import {combineReducers} from 'redux'
import mainReducer from './MainReducer'

const reducers = combineReducers({
    type: mainReducer
})

export default reducers