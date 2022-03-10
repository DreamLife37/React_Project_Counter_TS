import {ChangeEvent, useState} from "react";
import s from './Display.module.css'

type MaxValuePropsType = {
    callback: (value: string) => void
    name: string
    error: string
}

export const UniversalInput = (props: MaxValuePropsType) => {
    // let [values, setValues] = useState<any>(0)
    //let [maxValues, setMaxValues] = useState<ChangeEvent<HTMLInputElement> | number | string>(props.MAXVALUE)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        props.callback(e.currentTarget.value)
        //  console.log(maxValues)
    }
    return <span>{props.name}<input className={props.error == 'Incorrect value' ? s.errorInputClass : ''}
                                    onChange={onChangeHandler} type="text"/></span>
}