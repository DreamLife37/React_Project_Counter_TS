import React from 'react';
import './App.css';
import {Display} from "./Components/Display";
import {UniversalButton} from "./Components/UniversalButton";
import s from './Components/Display.module.css'
import {UniversalInput} from './Components/UniversalInput';
import {
    displayMessageAC,
    incrementCountAC,
    resetCountAC,
    setMaxValueAC,
    setStartValueAC, setValuesAC
} from "./bll/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";

export const Count = () => {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppStateType, string>(state => state.counter.error)

    const dispatch = useDispatch()
    const onClickIncrementHandler = () => {
        dispatch(incrementCountAC())
    }
    const onClickResetHandler = () => {
        if (value != startValue) {
            dispatch(resetCountAC())
        }
    }

    const onClickSetStartValueHandler = (value: number) => {
        if (value >= maxValue || value < 0) {
            dispatch(displayMessageAC('Incorrect value'))
        } else
            dispatch(displayMessageAC('enter values and press SET'))
        dispatch(setStartValueAC(value))
    }
    const onClickSetMaxValueHandler = (value: number) => {
        if (value <= startValue) {
            dispatch(displayMessageAC('Incorrect value'))
        } else
            dispatch(displayMessageAC('enter values and press SET'))
        dispatch(setMaxValueAC(value))
    }

    const onClickSetValuesHandler = () => {
        dispatch(setValuesAC())
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className={s.app}>
                    <div className={s.inputClass}>
                        <UniversalInput name={'Start Value:'} callback={onClickSetStartValueHandler} error={error}
                                        value={startValue}/>
                        <UniversalInput name={'Max Value:'} callback={onClickSetMaxValueHandler} error={error}
                                        value={maxValue}/>
                    </div>

                    <div className={s.button}>
                        <UniversalButton callback={onClickSetValuesHandler} count={value} name={'SET'}
                                         condition={startValue === maxValue || error === 'Incorrect value'}/>
                    </div>
                </div>

                <div className={s.app}>
                    <div className={s.display}>
                        <Display count={value} maxValue={maxValue} error={error}/></div>

                    <div className={s.button}>
                        <UniversalButton callback={onClickIncrementHandler} count={value} name={'INC'}
                                         condition={value === maxValue
                                             || error === 'Incorrect value'
                                             || error === 'enter values and press SET'}/>
                        <UniversalButton callback={onClickResetHandler} count={value} name={'RESET'}
                                         condition={value === startValue}/>
                    </div>
                </div>
            </header>
        </div>
    );
}


