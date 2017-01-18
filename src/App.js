import React, { Component } from 'react'
import { Provider } from 'react-redux'

import rootReducer from './app.reducer'
import createStore from './config/store.config'
import NavigationRouter from './navigation/NavigationRouter'

export const store = createStore(rootReducer)

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <NavigationRouter />
            </Provider>
        )
    }
}

export default App
