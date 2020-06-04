import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
// import rootReducer from '../reducers/index'
import {configureStore} from '@reduxjs/toolkit'
import {filterState, contacts} from '../reducers/contacts'

// const globalState = createStore(rootReducer, devToolsEnhancer());

const rootReducer = {
    filterState,
    contacts
}

const globalState = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production"
})

export default globalState