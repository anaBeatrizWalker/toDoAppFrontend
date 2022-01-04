import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({//concatena todos os reducers
    todo: todoReducer
})

export default rootReducer