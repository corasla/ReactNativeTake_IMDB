import { combineReducers } from 'redux'

import mainReducer from './main-page/main-page.reducer.js'

const appReducer = combineReducers({
    mainReducer,
})

export default (state, action) => {
  return appReducer(state, action)
}
