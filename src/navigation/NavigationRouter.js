import { Scene, Router, Reducer } from 'react-native-router-flux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { store } from '../App'

import MainPage from '../main-page/MainPage'

const reducerCreate = params => {
    const defaultReducer = Reducer(params)
    return (state, action) => {
        if (action.type === 'REACT_NATIVE_ROUTER_FLUX_PUSH') {
        //store.dispatch(updateScreen(action.key))
        }
        return defaultReducer(state, action)
    }
}

class NavigationRouter extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <Router createReducer={reducerCreate}>
                <Scene key='mainPage' title='My first page!' component={MainPage} initial/>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRouter)
