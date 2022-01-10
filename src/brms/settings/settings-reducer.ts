import {
    SettingsActionsType,
    SettingsChangeType,
    SettingsMutableKeyType,
    SettingsStateType,
    SettingsTypes
} from './settings-reducer.types';

export const initialState: SettingsStateType = {
    settingsMaxNumber: 0,
    settingsMinNumber: 5,
    settingsError: ''
}

export const settingsReducer = (state: SettingsStateType = initialState, action: SettingsActionsType): SettingsStateType => {
    switch (action.type) {
        case SettingsTypes.Change:
            return action.payload.changeType === 'inc' ? {...state, [action.payload.value]: state[action.payload.value] + 1} : {...state, [action.payload.value]: state[action.payload.value] - 1}
        case SettingsTypes.SetError:
            return {...state, settingsError: action.payload.message}
    }
    return state
}

export const settingsActions = {
    changeValueNumberAC: (mutableKey: SettingsMutableKeyType, changeType: SettingsChangeType) => ({
        type: SettingsTypes.Change,
        payload:{value: mutableKey, changeType}
    } as const),
    setError: (message: string) => ({
        type: SettingsTypes.SetError,
        payload:{message: message}
    } as const)
}