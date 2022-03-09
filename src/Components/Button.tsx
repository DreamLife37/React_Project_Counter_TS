import React from "react";

type ButtonTypeProps = {
    countAdd: () => void
    resetCount: () => void
    count: number
}
export const Button = (props: ButtonTypeProps) => {

    const onClickIncHandler = () => {
        props.countAdd()
    }

    const onClickResetHandler = () => {
        props.resetCount()
    }
    return (
        <span>
               <button disabled={(props.count>4) ? true : false} onClick={onClickIncHandler}>inc</button>
               <button disabled={(props.count===0) ? true : false} onClick={onClickResetHandler}>reset</button>
        </span>)
}