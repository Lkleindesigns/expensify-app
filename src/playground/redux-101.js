import { createStore } from 'redux'

// Action Generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
    })

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
})

// Reducers
// 1. Reducers are pure function
// 2. Never change state or action
let result
const add = (a, b) => {
    result = a + b;
}

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET': 
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    } 
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(decrementCount())

store.dispatch(resetCount({resetBy: 200}))

store.dispatch(setCount( {count: 101}))

unsubscribe()

