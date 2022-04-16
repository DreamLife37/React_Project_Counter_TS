export const initialState = {
    value: 6,
    startValue: 4,
    maxValue: 10,
    error: ''
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: counterReducerType): InitialStateType => {

    switch (action.type) {
        case 'INCREMENT-COUNT': {
            let newState = {...state}
            newState.value = newState.value + 1
            return newState
        }
        case "RESET-COUNT": {
            let newState = {...state}
            newState.value = newState.startValue
            return newState
        }
        case "SET-START-VALUE": {
            let newState = {...state}
            newState.startValue = action.value
            return newState
        }
        case "SET-MAX-VALUE": {
            let newState = {...state}
            newState.maxValue = action.value
            return newState
        }
        case "SET-VALUES": {
            return {...state, value: state.startValue, error: ''}
        }
        case "DISPLAY-MESSAGE": {
            let newState = {...state}
            newState.error = action.error
            return newState
        }
        default:
            return state
    }
}

type counterReducerType = IncrementCountActionType
    | ResetCountActionType
    | setStartValueActionType
    | setMaxValueActionType
    | setValuesActionType
    | displayMessageActionType

export type IncrementCountActionType = ReturnType<typeof incrementCountAC>
export type ResetCountActionType = ReturnType<typeof resetCountAC>
export type setStartValueActionType = ReturnType<typeof setStartValueAC>
export type setMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type setValuesActionType = ReturnType<typeof setValuesAC>
export type displayMessageActionType = ReturnType<typeof displayMessageAC>

export const incrementCountAC = () => {
    return {type: 'INCREMENT-COUNT'} as const
}

export const resetCountAC = () => {
    return {type: 'RESET-COUNT'} as const
}

export const setStartValueAC = (value: number) => {
    return {type: 'SET-START-VALUE', value} as const
}

export const setMaxValueAC = (value: number) => {
    return {type: 'SET-MAX-VALUE', value} as const
}
export const setValuesAC = () => {
    return {type: 'SET-VALUES'} as const
}
export const displayMessageAC = (error: string) => {
    return {type: 'DISPLAY-MESSAGE', error} as const
}