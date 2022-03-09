import {ChangeEvent, useState} from "react";

type MaxValuePropsType = {
    MAXVALUE: number
    set: (value:string)=>void
}

export const MaxValue = (props: MaxValuePropsType) => {
    //let [maxValues, setMaxValues] = useState<ChangeEvent<HTMLInputElement> | number | string>(props.MAXVALUE)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //console.log(e.currentTarget.value)
        //setMaxValues(e.currentTarget.value)
     //   maxValues = e.currentTarget.value
        // setValue(e.currentTarget.value)

        //props.MAXVALUE=Number(maxValues)
        props.set(e.currentTarget.value)
      //  console.log(maxValues)
    }
    return <span>Max Value:<input onChange={onChangeHandler} type="text"/></span>
}