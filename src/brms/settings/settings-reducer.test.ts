import {SettingsStateType} from './settings-reducer.types';
import {settingsActions, settingsReducer} from './settings-reducer';

let initialState: SettingsStateType

beforeEach(() => {
    initialState = {
        settingsMinNumber: 0,
        settingsMaxNumber: 10,
        settingsError: ''
    }
})

test('max number settings should inc', () => {

    const newState:SettingsStateType = settingsReducer(initialState, settingsActions.changeValueNumberAC('settingsMaxNumber', 'inc'))

    expect(newState).not.toBe(initialState)
    expect(newState.settingsMaxNumber).toBe(11)
    expect(newState.settingsMinNumber).toBe(0)
})

test('max number settings should dec', () => {
    const newState:SettingsStateType = settingsReducer(initialState, settingsActions.changeValueNumberAC('settingsMaxNumber', 'dec'))

    expect(newState).not.toBe(initialState)
    expect(newState.settingsMaxNumber).toBe(9)
    expect(newState.settingsMinNumber).toBe(0)
})

test('min number settings should inc', () => {
    const newState:SettingsStateType = settingsReducer(initialState, settingsActions.changeValueNumberAC('settingsMinNumber', 'inc'))

    expect(newState).not.toBe(initialState)
    expect(newState.settingsMaxNumber).toBe(10)
    expect(newState.settingsMinNumber).toBe(1)
})

test('min number settings should dec', () => {
    const newState:SettingsStateType = settingsReducer(initialState, settingsActions.setError('Invalid value'))

    expect(newState).not.toBe(initialState)
    expect(newState.settingsError).toBe('Invalid value')
})

test('error should disappeared', () => {
    const newState:SettingsStateType = settingsReducer(initialState, settingsActions.setError(''))

    expect(newState).not.toBe(initialState)
    expect(newState.settingsError).toBe('')
})

