import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import rehydrate from './rehydrate.config'
import reduxPersist from './persist.config'
import thunk from 'redux-thunk'

export default (rootReducer) => {
    const middleware = []
    const enhancers = []

    // --- Redux Thunk middleware --- //
    middleware.push(thunk)

    // --- Assemble middleware --- //
    enhancers.push(applyMiddleware(...middleware))

    // --- Auto rehydrate enhancer --- //
    if (reduxPersist.active) {
        enhancers.push(autoRehydrate())
    }

    // create the store
    const store = createStore(rootReducer, compose(...enhancers))

    // check reducer version number
    if (reduxPersist.active) {
        rehydrate.updateReducers(store)
    }

    return store
}
