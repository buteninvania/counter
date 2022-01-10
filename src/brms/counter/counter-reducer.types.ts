export type CounterStateType = {
    isShowSettings: boolean
    maxNumber: number
    minNumber: number
    counterNumber: number
}

type CounterActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined ? {type: Key} : {type: Key; payload: M[Key]}
};

export enum CounterTypes {
    Change = "CHANGING-VALUE-NUMBER",
    ToggleShowSettings = 'TOGGLE-IS-SHOW-SETTINGS',
    SetCounterNumber = 'SET-COUNTER-NUMBER',
}

export type CounterMutableKeyType = "maxNumber" | "minNumber" | "counterNumber"

export type CounterChangeType = "inc" | "dec"

type CounterPayload = {
    [CounterTypes.SetCounterNumber]: {
        mutableKey: CounterMutableKeyType
        value: number
    },
    [CounterTypes.Change]: {
        value: CounterMutableKeyType
        changeType: string
    },
    [CounterTypes.ToggleShowSettings] : {

    }
}

export type CounterActionsType = CounterActionMap<CounterPayload>[keyof CounterActionMap<CounterPayload>]
