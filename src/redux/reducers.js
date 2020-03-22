import { combineReducers } from 'redux'
import initialState from './store'

const user = (state = [], action) => {
    switch(action.type){
        case "LOG_IN":
            return Object.assign({}, state, {
                loggedIn: action.value
            });
        case "LOG_OUT":
            return Object.assign({}, state, {
                loggedIn: action.value
            })
        default:
            return state
    }
}

const restaurants = (state = [], action) => {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            return [ ...state, action.value ]
        case 'REMOVE_RESTAURANT':
            let confirm = window.confirm('Are you sure you want to delete this?')
            const restaurants = [ ...state ]
            if (confirm){
              let restaurant = restaurants.find(x => x.id === action.value)
              let index = restaurants.indexOf(restaurant)
              restaurants.splice(index, 1)
            }
            return restaurants
        default:
            return state
    }
}

export default combineReducers({ initialState, user, restaurants })