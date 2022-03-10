import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./Components/Display";
import {Button} from "./Components/Button";
import {UniversalButton} from "./Components/UniversalButton";
import s from './Components/Display.module.css'
import {MaxValue} from "./Components/MaxValue";
import {StartValue} from "./Components/StartValue";
import {UniversalInput} from './Components/UniversalInput';

function App() {

    //задание констант


    let [startValues, setStartValues] = useState<any>(0)
    let [maxValues, setMaxValues] = useState<any>(0)
    const [count, setCount] = useState<number | null>(null)
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

    const setStartValue = (value: string) => {
        console.log("appStartValues" + value)
        console.log('start БЫЛО' + startValues)
        setStartValues((Number(value)))
        debugger
        if (startValues > value || startValues < 0) {
            error = 'Incorrect value'
            setError(error)
        } else setError('')
        console.log(error)
    }


    const setMaxValue = (value: string) => {
        console.log("appMaxValues" + value)
        console.log('max БЫЛО' + maxValues)
        setMaxValues((Number(value)))
        console.log(maxValues)
        debugger
        if (startValues > value || startValues < 0) {
            error = 'Incorrect value'
            setError(error)
        } else setError('')
    }

    //setError('enter values and press SET')


    const setValue = () => {
        setCount(startValues)
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className={s.app}>

                    <div className={s.inputClass}>
                        <UniversalInput name={'Start Value:'} callback={setStartValue} error={error}/>
                        <UniversalInput name={'Max Value:'} callback={setMaxValue} error={error}/>
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
