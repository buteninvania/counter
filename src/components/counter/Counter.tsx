/***********************Counter**************************/
import React, {useEffect, useReducer} from 'react';
import Button from '../button/Button';
import {Settings} from '../settings/Settings';
import s from './counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../../brms/counter/counter-reducer';
import {AppStateType} from '../../brms/store';
import {SettingsStateType} from '../../brms/settings/settings-reducer.types';
import {CounterStateType} from '../../brms/counter/counter-reducer.types';

const Counter: React.FC<CounterPropsType> = ({}) => {

    const dispatch = useDispatch()

    const {counterNumber, maxNumber, isShowSettings, minNumber} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const settingsData = useSelector<AppStateType, SettingsStateType>(state => state.settings)

    const onClickSettingsHandler = (type: string, settingsMinNumber:number, settingsMaxNumber:number) => {
        if(isShowSettings && type === "Apply") {
            dispatch(counterActions.setValueNumberActionCreator('counterNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('minNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('maxNumber', settingsMaxNumber))
        } else if(isShowSettings){
            dispatch(counterActions.toggleIsSowSettingsActionCreator())
            dispatch(counterActions.setValueNumberActionCreator('counterNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('minNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('maxNumber', settingsMaxNumber))
            localStorage.setItem('maxValue', JSON.stringify(maxNumber))
            localStorage.setItem('minValue', JSON.stringify(minNumber))
        } else {
            dispatch(counterActions.toggleIsSowSettingsActionCreator())
        }
    }

    return (
        <div className={s.counterWrapper}>
            <div className={s.header}>
                <span className={isShowSettings ? s.active : ''}
                      onClick={() => dispatch(counterActions.toggleIsSowSettingsActionCreator())}>
                    settings
                </span>
            </div>
            <div className={counterNumber === maxNumber ? s.counter + ' ' + s.red : s.counter}>
                {counterNumber}
            </div>
            <div className={s.buttonsWrapper}>
                <Button children={'inc'}
                        disabled={counterNumber>=maxNumber}
                        className={s.btn}
                        onClick={()=>dispatch(counterActions.changingValueNumberActionCreator('counterNumber', 'inc'))}/>
                <Button children={'reset'}
                        disabled={counterNumber===minNumber}
                        className={s.btn}
                        onClick={()=>dispatch(counterActions.setValueNumberActionCreator('counterNumber', minNumber))}/>
            </div>
            {isShowSettings && <Settings settingsData={settingsData} onClickSettings={onClickSettingsHandler}/>}
            <div className={s.footer}>
                <span>Minimum value: {minNumber}</span>
                <span>Maximum value: {maxNumber}</span>
            </div>
        </div>

    )
}

type CounterPropsType = {

}

export default Counter
/**********************************************************/