import s from './Display.module.css'

type DisplayPropsType = {
    count: number
    maxValue:number
}
export const Display = (props: DisplayPropsType) => {
    return <div className={props.count == props.maxValue ? s.error : ''}>{props.count}</div>
}