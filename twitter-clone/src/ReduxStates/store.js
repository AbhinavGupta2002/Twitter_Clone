import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers/index'

export const store = createStore(reducers, {mode:'home'}, applyMiddleware(thunk))

export default store