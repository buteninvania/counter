export type CounterStateType = {
    isShowSettings: boolean
    maxNumber: number
    minNumber: number
    counterNumber: number
    error: string
}

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        }
};

export enum Types {
    Change = "CHANGING-VALUE-NUMBER",
    ToggleShowSettings = 'TOGGLE-IS-SHOW-SETTINGS',
    SetCounterNumber = 'SET-COUNTER-NUMBER',
    SetError = 'SET-ERROR'
}

export type MutableKeyType = "maxNumber" | "minNumber" | "counterNumber"

export type ChangeType = "inc" | "dec"

type CounterPayload = {
    [Types.SetCounterNumber]: {
        mutableKey: MutableKeyType
        value: number
    },
    [Types.SetError]: {
        message: string
    },
    [Types.Change]: {
        value: MutableKeyType
        changeType: string
    },
    [Types.ToggleShowSettings] : {

    }
}

export type CounterActionsType = ActionMap<CounterPayload>[keyof ActionMap<CounterPayload>]