import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateOutput, setTo, setFrom, setRate } from '../Redux/Actions'
import {
    InputField,
    FlexContainer,
} from '../Components/Styles/General'

export default function AmountField(props) {
    //hooks for react-redux
    const output = useSelector(state => state.output);
    const from = useSelector(state => state.from);
    const to = useSelector(state => state.to);
    const dispatch = useDispatch();

    //A function used for validation, when an incorrect character is entered, it will delete it
    function backSpace() {
        let arrayexit = document.getElementById("input").value;
        for (let i = 0; i < arrayexit.length; i++) {
            let output = arrayexit.slice(0, -1);
            document.getElementById("input").value = output;
        }
    }

    //Checking if this AmountField should be editable or not
    //First case: this field is used for output
    if (props.fromTo === 'To') {
        //setting to which currency it should convert in redux state
        if (props.selected === 'USD - Dollar')
            dispatch(setTo('USD'));
        else if (props.selected === 'EUR - Euro')
            dispatch(setTo('EUR'));
        else if (props.selected === 'JPY - Japanese Yen')
            dispatch(setTo('JPY'));
        //Rendering the non-editable field
        return (
            <FlexContainer mobileFlexDirection={'row'} >
                <h1 style={{ fontSize: 72, marginTop: 32, marginBottom: 0 }}>{props.sign}</h1>
                <InputField disabled placeholder={Math.round(output * 100) / 100} />
            </FlexContainer>
        );
    }
    //Checking if this AmountField should be editable or not
    //Second case: this field is used for input
    else {
        //Setting from which currency it should convert in redux state
        if (props.selected === 'USD - Dollar')
            dispatch(setFrom('USD'));
        else if (props.selected === 'EUR - Euro')
            dispatch(setFrom('EUR'));
        else if (props.selected === 'JPY - Japanese Yen')
            dispatch(setFrom('JPY'));

        //Getting the exchange rates from an external API
        if (from && to) {
            fetch(('https://api.exchangeratesapi.io/latest?base=' + from), {
                method: 'GET'
            })
                .then(res => res.json())
                .then(json => {
                    //Setting the new rate into redux state
                    if (from !== to)
                        dispatch(setRate(json.rates[to]));
                    //An exception is when the same currency is selected on both dropdowns
                    else
                        dispatch(setRate(1));
                });
        }
        //Rendering the edittable input field
        return (
            <FlexContainer mobileFlexDirection={'row'} >
                <h1 style={{ fontSize: 72, marginTop: 32, marginBottom: 0 }}>{props.sign}</h1>

                <InputField id="input" disabled={!props.isSelected} placeholder={props.placeholder} onChange={(e) => {
                    //Form validation, user is prevented from enterring anything other than a number
                    const reg = /^[0-9\b]+$/;
                    if (!(e.target.value === '' || reg.test(e.target.value))) 
                        backSpace();
                    //If validation is okay, the new input is dispatched to the redux state
                    dispatch(calculateOutput(document.getElementById("input").value));
                }} />
            </FlexContainer>
        );
    }
}