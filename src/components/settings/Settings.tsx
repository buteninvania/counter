/***********************Settings**************************/
import React ,{useEffect, useState} from 'react';
import s from './settings.module.css'
import Button from '../button/Button';
import {SpanError} from '../error/Error';
import {CounterActionsType} from '../counter/counter_types';
import {counterActions} from '../counter/counterReducer';

export const Settings: React.FC<SettingsPropsType> = ({dispatch, minNumber, maxNumber, error, onClickSettings}) => {

    useEffect(() => {
        setSettingsMaxNumber(maxNumber)
        setSettingsMinNumber(minNumber)
    },[])

    const [settingsMaxNumber, setSettingsMaxNumber] = useState(0)
    const [settingsMinNumber, setSettingsMinNumber] = useState(0)

    console.log(settingsMaxNumber)



    return (
        <div className={s.wrapper}>
            <div>Counter settings</div>
            <div className={s.control}>
                <span>Min value:</span>
                <Button children={"-"}
                        disabled={minNumber === 0}
                        onClick={() => dispatch(counterActions.changingValueNumberActionCreator('minNumber', 'dec')) }/>
                <span>{minNumber}</span>
                <Button children={"+"}
                        error={!!error}
                        onClick={() => dispatch(counterActions.changingValueNumberActionCreator('minNumber', 'inc'))}/>
            </div>
            <div className={s.control}>
                <span>Max value:</span>
                <Button children={"-"}
                        error={!!error}
                        onClick={() => dispatch(counterActions.changingValueNumberActionCreator('maxNumber', 'dec'))}/>
                <span>{maxNumber}</span>
                <Button children={"+"}
                        onClick={() => dispatch(counterActions.changingValueNumberActionCreator('maxNumber', 'inc'))}/>
            </div>
            <div className={s.conservation}>
                <Button onClick={(e) => onClickSettings(e.currentTarget.innerHTML)} disabled={!!error}>Apply</Button>
                <Button onClick={(e) => onClickSettings(e.currentTarget.innerHTML)} disabled={!!error}>Save</Button>
            </div>
            {error && <SpanError message={error}/>}
        </div>
    )
}

type SettingsPropsType = {
    dispatch:  React.Dispatch<CounterActionsType>
    minNumber: number
    maxNumber: number
    error: string
    onClickSettings:(type: string) => void
}


/**********************************************************/