import s from './Display.module.css'

type DisplayPropsType = {
    count: number | null
    maxValue: number
    error: string
}
export const Display = (props: DisplayPropsType) => {

    return <div
        className={props.count == props.maxValue ? s.error : '' ||
        props.error == 'Incorrect value' ? s.error : ''}>
        {props.error ? props.error : props.count}
    </div>


}

