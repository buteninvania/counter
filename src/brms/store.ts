import {applyMiddleware, combineReducers, createStore} from 'redux';
import {counterReducer} from './counter/counter-reducer';
import thunk from 'redux-thunk';
import {loadState, saveState} from '../utility/localStorage';
import {settingsReducer} from './settings/settings-reducer';

const persistedState = loadState()

const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

export const store = createStore(rootReducer, persistedState,applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        settings: store.getState().settings
    });
});

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>