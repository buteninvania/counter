/***********************Settings**************************/
import React ,{useEffect, useState} from 'react';
import s from './settings.module.css'
import Button from '../button/Button';
import {SpanError} from '../error/Error';
import {CounterActionsType} from '../counter/counter_types';

export const Settings: React.FC<SettingsPropsType> = ({minNumber, maxNumber, onClickSettings}) => {

    useEffect(() => {
        setSettingsMaxNumber(maxNumber)
        setSettingsMinNumber(minNumber)
    },[])

    const [settingsMaxNumber, setSettingsMaxNumber] = useState(0)
    const [settingsMinNumber, setSettingsMinNumber] = useState(0)
    const [settingsError, setSettingsError] = useState('')

    const changingValueNumberHandler = (stateValue: 'min' | 'max', type: 'inc' | 'dec') => {
        if(type === 'dec') {
            stateValue === 'min' ? setSettingsMinNumber(settingsMinNumber - 1) :
                                   setSettingsMaxNumber(settingsMaxNumber - 1)
        }
        if(type === 'inc') {
            stateValue === 'min' ? setSettingsMinNumber(settingsMinNumber + 1) :
                                   setSettingsMaxNumber(settingsMaxNumber + 1)
        }
    }

    useEffect(() => {
        if(settingsMaxNumber <= settingsMinNumber) {
            setSettingsError('Invalid value')
        } else {
            setSettingsError('')
        }

    },[settingsMaxNumber, settingsMinNumber])

    return (
        <div className={s.wrapper}>
            <div>Counter settings</div>
            <div className={s.control}>
                <span>Min value:</span>
                <Button children={"-"}
                        disabled={settingsMinNumber === 0}
                        onClick={() => changingValueNumberHandler('min', 'dec')}/>
                <span>{settingsMinNumber}</span>
                <Button children={"+"}
                        error={!!settingsError}
                        onClick={() => changingValueNumberHandler('min', 'inc')}/>
            </div>
            <div className={s.control}>
                <span>Max value:</span>
                <Button children={"-"}
                        error={!!settingsError}
                        onClick={() => changingValueNumberHandler('max', 'dec')}/>
                <span>{settingsMaxNumber}</span>
                <Button children={"+"}
                        onClick={() => changingValueNumberHandler('max', 'inc')}/>
            </div>
            <div className={s.conservation}>
                <Button onClick={(e) => onClickSettings(e.currentTarget.innerHTML, settingsMinNumber, settingsMaxNumber)}
                        disabled={!!settingsError}>
                    Apply
                </Button>
                <Button onClick={(e) => onClickSettings(e.currentTarget.innerHTML, settingsMinNumber, settingsMaxNumber)}
                        disabled={!!settingsError}>
                    Save
                </Button>
            </div>
            {settingsError && <SpanError message={settingsError}/>}
        </div>
    )
}

type SettingsPropsType = {
    minNumber: number
    maxNumber: number
    onClickSettings:(type: string, minNumber: number, maxNumber: number) => void
}


/**********************************************************/