import {CounterStateType} from './counter_types';
import {counterActions, counterReducer} from './counterReducer';

test('The setting menu display value should change', () => {
    //data:
    const initialState: CounterStateType = {
        isShowSettings: false,
        maxNumber: 5,
        minNumber:0,
        counterNumber: 0,
        error: ''
    }

    //action:
    const changedState = counterReducer(initialState, counterActions.toggleIsSowSettingsActionCreator())

    //exception:
    expect(changedState.isShowSettings).toBe(true)
    expect(initialState.isShowSettings).toBe(false)
    expect(changedState).not.toBe(initialState)
})

test('The value of the maximum number should increase', () => {
    //data:
    const initialState: CounterStateType = {
        isShowSettings: false,
        maxNumber: 5,
        minNumber:0,
        counterNumber: 0,
        error: ''
    }

    //action:
    const changedState = counterReducer(initialState, counterActions.changingValueNumberActionCreator("maxNumber", 'inc'))

    //exception:
    expect(changedState.maxNumber).toBe(6)
    expect(initialState.maxNumber).toBe(5)
    expect(changedState).not.toBe(initialState)
})

test('The counter value should change', () => {
    //data:
    const initialState: CounterStateType = {
        isShowSettings: false,
        maxNumber: 5,
        minNumber:1,
        counterNumber: 0,
        error: ''
    }

    //action:
    const changedState = counterReducer(initialState, counterActions.setValueNumberActionCreator('counterNumber', 6))

    //exception:
    expect(changedState.counterNumber).toBe(6)
    expect(initialState.counterNumber).toBe(0)
    expect(changedState).not.toBe(initialState)
})

test('An error should appear', () => {
    //data:
    const initialState: CounterStateType = {
        isShowSettings: false,
        maxNumber: 5,
        minNumber:1,
        counterNumber: 0,
        error: ''
    }

    //action:
    const changedState = counterReducer(initialState, counterActions.setErrorActionCreator("Wrong number"))

    //exception:
    expect(changedState.error).toBe("Wrong number")
    expect(initialState.error).toBe("")
    expect(changedState).not.toBe(initialState)
})