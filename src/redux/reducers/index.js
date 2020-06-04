import {combineReducers} from 'redux';
import filter from './filters';
import {contacts, filterState} from './contacts'

const rootReducer = combineReducers({
    
    contacts: contacts,
    filterState: filterState
})



export default rootReducer
