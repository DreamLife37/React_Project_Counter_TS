import {ChangeEvent, useState} from "react";

type StartValuePropsType = {
    set: (value:string)=>void
}

export const StartValue = (props: StartValuePropsType) => {
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
    return <span>Start Value:<input onChange={onChangeHandler} type="text"/></span>
}