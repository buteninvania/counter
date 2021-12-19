import {ChangeType, CounterActionsType, CounterStateType, MutableKeyType, Types} from './counter_types';

export const counterInitialState: CounterStateType = {
    isShowSettings: false,
    maxNumber: 5,
    minNumber:0,
    counterNumber: 0,
    error: ''
}

export const counterReducer = (state: CounterStateType, action: CounterActionsType): CounterStateType => {
    switch (action.type) {
        case Types.Change:
           return action.payload.changeType === 'inc' ? {...state, [action.payload.value]: state[action.payload.value] + 1}
                                                      : {...state, [action.payload.value]: state[action.payload.value] - 1}
        case Types.ToggleShowSettings:
            return {...state, isShowSettings: !state.isShowSettings}
        case Types.SetCounterNumber:
            return {...state, [action.payload.mutableKey]: action.payload.value}
        case Types.SetError:
            return {...state, error: action.payload.message}
    }
    return state
}

export const counterActions = {
    changingValueNumberActionCreator: (mutableKey: MutableKeyType, changeType: ChangeType) => ({
        type: Types.Change,
        payload: {value: mutableKey,changeType}
    } as const),
    toggleIsSowSettingsActionCreator: () => ({
        type: Types.ToggleShowSettings,
        payload: {}
    } as const),
    setValueNumberActionCreator: (mutableKey: MutableKeyType, value: number) => ({
        type: Types.SetCounterNumber,
        payload: {mutableKey, value}
    } as const),
    setErrorActionCreator: (message: string) => ({
        type: Types.SetError,
        payload: {message}
    } as const),
}