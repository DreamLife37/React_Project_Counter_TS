import {counterReducer} from "./counter-reducer";

test('user reducer should increment only age', () => {
    const startState = {value: 10, startValue: 9, maxValue: 21, error: ''};

    const endState = counterReducer(startState, {type: 'INCREMENT-COUNT'})

    expect(endState.value).toBe(11);
    //expect(endState.childrenCount).toBe(2);
});

test('user reducer should increment only childrenCount', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Dimych'};
    // your code here
});
