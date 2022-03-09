import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./Components/Display";
import {Button} from "./Components/Button";
import {UniversalButton} from "./Components/UniversalButton";
import s from './Components/Display.module.css'
import {UniversalInput} from "./Components/Input";
import {MaxValue} from "./Components/MaxValue";

function App() {

    //задание констант

    const STARTVALUE = 0
    let [maxValues, setMaxValues] = useState<any>(4)

    const [count, setCount] = useState(STARTVALUE)

    //Создание callback должно быть на уровне бизнес логики:
    const countAdd = () => {
        if (count < maxValues) { //условие обязательно делать здесь
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        if (count != STARTVALUE) { //условие обязательно делать здесь
            setCount(STARTVALUE)
        }
    }


    const set = (value:string) => {

        console.log("app"+ value)
        maxValues =(Number(value))
        console.log(maxValues)
        setMaxValues(maxValues)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className={s.app}>

                    <MaxValue MAXVALUE={maxValues} set={set}/>


                    {/*<UniversalInput value={1122} set={set}/>*/}
                    <div className={s.button}>
                        <UniversalButton callback={()=>set(maxValues)} count={count} name={'SET'}
                                         condition={count === maxValues}/>

                    </div>
                </div>
                <div className={s.app}>
                    <div className={s.display}>
                        <Display count={count} maxValue={maxValues}/></div>

                    <div className={s.button}>
                        <UniversalButton callback={countAdd} count={count} name={'INC'}
                                         condition={count === maxValues}/>
                        <UniversalButton callback={resetCount} count={count} name={'RESET'}
                                         condition={count === STARTVALUE}/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
