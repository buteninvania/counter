/***********************Settings**************************/
import React ,{useEffect, useState} from 'react';
import s from './settings.module.css'
import Button from '../button/Button';
import {SpanError} from '../error/Error';
import {SettingsStateType} from '../../brms/settings/settings-reducer.types';
import {useDispatch} from 'react-redux';
import {changeValueTC, settingsActions} from '../../brms/settings/settings-reducer';

export const Settings: React.FC<SettingsPropsType> = ({settingsData, onClickSettings}) => {

    const {settingsMaxNumber, settingsMinNumber, settingsError} = settingsData

    const dispatch = useDispatch()

    return (
        <div className={s.wrapper}>
            <div>Counter settings</div>
            <div className={s.control}>
                <span>Min value:</span>
                <Button children={"-"}
                        disabled={settingsMinNumber === 0}
                        onClick={() => dispatch(changeValueTC('settingsMinNumber', 'dec'))}/>
                <span>{settingsMinNumber}</span>
                <Button children={"+"}
                        error={!!settingsError}
                        onClick={() => dispatch(changeValueTC('settingsMinNumber', 'inc'))}/>
            </div>
            <div className={s.control}>
                <span>Max value:</span>
                <Button children={"-"}
                        error={!!settingsError}
                        onClick={() => dispatch(changeValueTC('settingsMaxNumber', 'dec'))}/>
                <span>{settingsMaxNumber}</span>
                <Button children={"+"}
                        onClick={() => dispatch(changeValueTC('settingsMaxNumber', 'inc'))}/>
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
    settingsData: SettingsStateType
    onClickSettings:(type: string, minNumber: number, maxNumber: number) => void
}


/**********************************************************/