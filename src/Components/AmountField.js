import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateOutput, setTo, setFrom, setRate } from '../Redux/Actions'
import {
    InputField,
    FlexContainer,
} from '../Components/Styles/General'

export default function AmountField(props) {
    const output = useSelector(state => state.output);
    const from = useSelector(state => state.from);
    const to = useSelector(state => state.to);
    const dispatch = useDispatch();

    if (props.fromTo === 'To') {
        if (props.selected === 'USD - Dollar')
            dispatch(setTo('USD'));
        else if (props.selected === 'EUR - Euro')
            dispatch(setTo('EUR'));
        else if (props.selected === 'JPY - Japanese Yen')
            dispatch(setTo('JPY'));

        return (
            <FlexContainer mobileFlexDirection={'row'} >
                <h1 style={{ fontSize: 72, marginTop: 32, marginBottom: 0 }}>{props.sign}</h1>

                <InputField disabled placeholder={Math.round(output * 100) / 100} />
            </FlexContainer>
        );
    }

    else {
        if (props.selected === 'USD - Dollar')
            dispatch(setFrom('USD'));
        else if (props.selected === 'EUR - Euro')
            dispatch(setFrom('EUR'));
        else if (props.selected === 'JPY - Japanese Yen')
            dispatch(setFrom('JPY'));

        if (from && to) {
            fetch(('https://api.exchangeratesapi.io/latest?base=' + from), {
                method: 'GET'
            })
                .then(res => res.json())
                .then(json => {
                    if (from !== to)
                        dispatch(setRate(json.rates[to]));
                    else
                        dispatch(setRate(1));
                });
        }

        return (
            <FlexContainer mobileFlexDirection={'row'} >
                <h1 style={{ fontSize: 72, marginTop: 32, marginBottom: 0 }}>{props.sign}</h1>

                <InputField id="input" disabled={!props.isSelected} placeholder={props.placeholder} onChange={() => {
                    console.log(parseInt(document.getElementById("input").value));
                    dispatch(calculateOutput(document.getElementById("input").value));
                }} />
            </FlexContainer>
        );
    }
}