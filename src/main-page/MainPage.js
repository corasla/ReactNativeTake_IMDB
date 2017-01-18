import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class MainPage extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        console.log('rendering main page')
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello there!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
    }
})

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
