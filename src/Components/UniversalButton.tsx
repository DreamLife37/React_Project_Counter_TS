import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from './Display.module.css'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type UniversalButtonType = DefaultButtonPropsType & {
    callback: () => void
    count: number | null
    name: string
    condition?: boolean
}

//export const UniversalButton = (props: UniversalButtonType) => {
export const UniversalButton: React.FC<UniversalButtonType> = (
    {
        callback, count, name, condition, ...restProps
    }) => {


    return (<span>
            <button disabled={condition}
                    onClick={callback} className={s.buttonClass}>{name}</button>
            </span>)

}


