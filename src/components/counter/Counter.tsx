/***********************Counter**************************/
import React, {useEffect, useReducer} from 'react';
import Button from '../button/Button';
import {Settings} from '../settings/Settings';
import s from './counter.module.css'
import {counterActions, counterInitialState, counterReducer} from './counterReducer';

const Counter: React.FC<CounterPropsType> = ({}) => {

    useEffect(() => {
        const max = Number(localStorage.getItem('maxValue'))
        const min = Number(localStorage.getItem('minValue'))
        if(min || max){
            dispatch(counterActions.setValueNumberActionCreator('minNumber', min))
            dispatch(counterActions.setValueNumberActionCreator('counterNumber', min))
            dispatch(counterActions.setValueNumberActionCreator('maxNumber', max))
        }
    }, [])

    const [state, dispatch] = useReducer(counterReducer, counterInitialState)

    const onClickSettingsHandler = (type: string, settingsMinNumber:number, settingsMaxNumber:number) => {
        if(state.isShowSettings && type === "Apply") {
            dispatch(counterActions.setValueNumberActionCreator('counterNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('minNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('maxNumber', settingsMaxNumber))
        } else if(state.isShowSettings){
            dispatch(counterActions.toggleIsSowSettingsActionCreator())
            dispatch(counterActions.setValueNumberActionCreator('counterNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('minNumber', settingsMinNumber))
            dispatch(counterActions.setValueNumberActionCreator('maxNumber', settingsMaxNumber))
            localStorage.setItem('maxValue', JSON.stringify(state.maxNumber))
            localStorage.setItem('minValue', JSON.stringify(state.minNumber))
        } else {
            dispatch(counterActions.toggleIsSowSettingsActionCreator())
        }
    }

    return (
        <div className={s.counterWrapper}>
            <div className={s.header}>
                <span className={state.isShowSettings ? s.active : ''}
                      onClick={() => dispatch(counterActions.toggleIsSowSettingsActionCreator())}>
                    settings
                </span>
            </div>
            <div className={state.counterNumber === state.maxNumber ? s.counter + ' ' + s.red : s.counter}>
                {state.counterNumber}
            </div>
            <div className={s.buttonsWrapper}>
                <Button children={'inc'}
                        disabled={state.counterNumber>=state.maxNumber}
                        className={s.btn}
                        onClick={()=>dispatch(counterActions.changingValueNumberActionCreator('counterNumber', 'inc'))}/>
                <Button children={'reset'}
                        disabled={state.counterNumber===state.minNumber}
                        className={s.btn}
                        onClick={()=>dispatch(counterActions.setValueNumberActionCreator('counterNumber', state.minNumber))}/>
            </div>
            {state.isShowSettings && <Settings maxNumber={state.maxNumber}
                                         minNumber={state.minNumber}
                                         onClickSettings={onClickSettingsHandler}/>}
            <div className={s.footer}>
                <span>Minimum value: {state.minNumber}</span>
                <span>Maximum value: {state.maxNumber}</span>
            </div>
        </div>

    )
}

type CounterPropsType = {}
export default Counter
/**********************************************************/