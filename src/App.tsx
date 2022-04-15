import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Components/Display";
import {UniversalButton} from "./Components/UniversalButton";
import s from './Components/Display.module.css'
import {UniversalInput} from './Components/UniversalInput';

function App() {
    const [startValues, setStartValues] = useState<any>(0)
    const [maxValues, setMaxValues] = useState<any>(5)
    const [count, setCount] = useState<number | null>(0)
    let [error, setError] = useState('')

    //Создание callback должно быть на уровне бизнес логики:
    const countAdd = () => {
        if (count !== null && count < maxValues) { //условие обязательно делать здесь
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        if (count != startValues) { //условие обязательно делать здесь
            setCount(startValues)
        }
    }

    const setStartValue = (value: number) => {
        console.log("appStartValues" + value)
        console.log('start БЫЛО' + startValues)
        setStartValues((Number(value)))
        if (startValues > value || startValues < 0) {
            error = 'Incorrect value'
            setError(error)
        } else setError('enter values and press SET')
    }

    const setMaxValue = (value: number) => {
        console.log("appMaxValues" + value)
        console.log('max БЫЛО' + maxValues)
        setMaxValues((Number(value)))
        if (startValues > value || startValues < 0) {
            error = 'Incorrect value'
            setError(error)
        } else setError('enter values and press SET')
    }

    useEffect(() => {
        let localValue = localStorage.getItem('startValues')
        if (localValue) {
            setStartValues(Number(localValue))
        }
    }, [])

    useEffect(() => {
        let localValue = localStorage.getItem('maxValues')
        if (localValue) {
            setMaxValues(Number(localValue))
        }
    }, [])

    useEffect(() => {
            localStorage.setItem('startValues', startValues)
        }, [startValues]
    )

    useEffect(() => {
            localStorage.setItem('maxValues', maxValues)
        }, [maxValues]
    )

    const setValue = () => {
        setCount(startValues)
        setError('')
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className={s.app}>
                    <div className={s.inputClass}>
                        <UniversalInput name={'Start Value:'} callback={setStartValue} error={error}
                                        value={startValues}/>
                        <UniversalInput name={'Max Value:'} callback={setMaxValue} error={error} value={maxValues}/>
                    </div>

                    <div className={s.button}>
                        <UniversalButton callback={() => setValue()} count={count} name={'SET'}
                                         condition={count === maxValues || error === 'Incorrect value'}/>
                    </div>
                </div>

                <div className={s.app}>
                    <div className={s.display}>
                        <Display count={count} maxValue={maxValues} error={error}/></div>

                    <div className={s.button}>
                        <UniversalButton callback={countAdd} count={count} name={'INC'}
                                         condition={count === maxValues || error === 'Incorrect value'}/>
                        <UniversalButton callback={resetCount} count={count} name={'RESET'}
                                         condition={count === startValues}/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
