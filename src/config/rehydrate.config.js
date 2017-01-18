import { persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import reduxPersist from './persist.config'
//import { finishRehydrate } from '../register/register.actions'

const updateReducers = (store) => {
    const reducerVersion = reduxPersist.reducerVersion
    const config = reduxPersist.storeConfig

    AsyncStorage.getItem('reducerVersion')
        .then((localVersion) => {
        if (localVersion !== reducerVersion) {
            persistStore(store, config).purge()
            AsyncStorage.setItem('reducerVersion', reducerVersion)
            //store.dispatch(finishRehydrate())
        } else {
            persistStore(store, config, () => {
            //store.dispatch(finishRehydrate())
            })
        }
        })
        .catch(() => {
        persistStore(store, config, () => {
            //store.dispatch(finishRehydrate())
        })
        AsyncStorage.setItem('reducerVersion', reducerVersion)
        })
}

export default { updateReducers }
