import {ChangeEvent, useState} from "react";

type InputProps={
    value:number
    set:(value:string)=>void
}

export const UniversalInput = (props: InputProps) => {
    let [values,setValue]=useState('')
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log(e.currentTarget.value)
        props.set(e.currentTarget.value)
        setValue(e.currentTarget.value)
        console.log(values)
    }
  return (

      <span>name:<input onChange={onChangeHandler} type="text"/></span>

  )
}