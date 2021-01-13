import { applyMiddleware, compose, createStore } from 'redux'
import promiseMiddleware from 'redux-promise'
import appReducers from './reducers/index'

const ReduxStore = () => {
    const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        appReducers,
        composeEnhances(applyMiddleware(promiseMiddleware))
    )

    return store;
}

export default ReduxStore;