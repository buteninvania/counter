import {CounterChangeType, CounterActionsType, CounterStateType, CounterMutableKeyType, CounterTypes} from './counter-reducer.types';

export const counterInitialState: CounterStateType = {
    isShowSettings: false,
    maxNumber: 5,
    minNumber:0,
    counterNumber: 0,
}

export const counterReducer = (state: CounterStateType = counterInitialState, action: CounterActionsType): CounterStateType => {
    switch (action.type) {
        case CounterTypes.Change:
            return action.payload.changeType === 'inc' ? {...state, [action.payload.value]: state[action.payload.value] + 1}
                : {...state, [action.payload.value]: state[action.payload.value] - 1}
        case CounterTypes.ToggleShowSettings:
            return {...state, isShowSettings: !state.isShowSettings}
        case CounterTypes.SetCounterNumber:
            return {...state, [action.payload.mutableKey]: action.payload.value}
    }
    return state
}

export const counterActions = {
    changingValueNumberActionCreator: (mutableKey: CounterMutableKeyType, changeType: CounterChangeType) => ({
        type: CounterTypes.Change,
        payload: {value: mutableKey,changeType}
    } as const),
    toggleIsSowSettingsActionCreator: () => ({
        type: CounterTypes.ToggleShowSettings,
        payload: {}
    } as const),
    setValueNumberActionCreator: (mutableKey: CounterMutableKeyType, value: number) => ({
        type: CounterTypes.SetCounterNumber,
        payload: {mutableKey, value}
    } as const),
}

