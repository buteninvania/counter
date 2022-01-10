export type SettingsStateType = {
    settingsMaxNumber: number
    settingsMinNumber: number
    settingsError: string
}

type SettingsActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined ? {type: Key} : {type: Key; payload: M[Key]}
};


export enum SettingsTypes {
    Change = "CHANGING-VALUE-NUMBER",
    SetError = "SET-ERROR"
}

export type SettingsMutableKeyType = "settingsMaxNumber" | "settingsMinNumber"

export type SettingsChangeType = "inc" | "dec"

type SettingsPayload = {
    [SettingsTypes.Change]: {
        value: SettingsMutableKeyType
        changeType: string
    },
    [SettingsTypes.SetError]: {
        message: string
    },
}

export type SettingsActionsType = SettingsActionMap<SettingsPayload>[keyof SettingsActionMap<SettingsPayload>]
