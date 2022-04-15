import {ChangeEvent, useState} from "react";
import s from './Display.module.css'

type MaxValuePropsType = {
    callback: (value: number) => void
    name: string
    error: string
    value: number
}

export const UniversalInput = (props: MaxValuePropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(+e.currentTarget.value)
    }

    return <span>{props.name}<input className={props.error === 'Incorrect value' ? s.errorInputClass : ''}
                                    onChange={onChangeHandler} type="number" value={props.value}/></span>
}