/***********************Counter**************************/
import React, {useEffect, useReducer} from 'react';
import Button from '../button/Button';
import {Settings} from '../settings/Settings';
import s from './counter.module.css'
import {counterActions, counterInitialState, counterReducer} from './counterReducer';

const Counter: React.FC<CounterPropsType> = ({}) => {

    console.log('render')

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

    useEffect(() => {
        state.minNumber >= state.maxNumber ? dispatch(counterActions.setErrorActionCreator('Invalid value')) :
                                             dispatch(counterActions.setErrorActionCreator(''))
    }, [state.maxNumber, state.minNumber])

    const onClickSettings = (type: string) => {
        if(state.isShowSettings && type === "Apply") {
            dispatch(counterActions.setValueNumberActionCreator('counterNumber', state.minNumber))
        } else if(state.isShowSettings){
            dispatch(counterActions.toggleIsSowSettingsActionCreator())
            dispatch(counterActions.setValueNumberActionCreator('counterNumber', state.minNumber))
            localStorage.setItem('maxValue', JSON.stringify(state.maxNumber))
            localStorage.setItem('minValue', JSON.stringify(state.minNumber))
        } else {
            dispatch(counterActions.toggleIsSowSettingsActionCreator())
        }
    }

    return (
        <div className={s.counterWrapper}>
            <div className={s.header}>
                <span className={state.isShowSettings ? s.active : ''} onClick={(e) => onClickSettings(e.currentTarget.innerHTML)}>settings</span>
            </div>
            <div className={state.counterNumber === state.maxNumber ? s.counter + ' ' + s.red : s.counter}>
                {state.counterNumber}
            </div>
            <div className={s.buttonsWrapper}>
                <Button children={'inc'}
                        disabled={state.counterNumber>=state.maxNumber || !!state.error}
                        className={s.btn}
                        onClick={()=>dispatch(counterActions.changingValueNumberActionCreator('counterNumber', 'inc'))}/>
                <Button children={'reset'}
                        disabled={state.counterNumber===state.minNumber || !!state.error}
                        className={s.btn}
                        onClick={()=>dispatch(counterActions.setValueNumberActionCreator('counterNumber', state.minNumber))}/>
            </div>
            {state.isShowSettings && <Settings maxNumber={state.maxNumber}
                                         minNumber={state.minNumber}
                                         onClickSettings={onClickSettings}
                                         error={state.error}
                                         dispatch={dispatch}/>}
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