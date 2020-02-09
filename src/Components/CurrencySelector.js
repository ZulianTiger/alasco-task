import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import {
    ComponentContainer,
    ButtonText,
    Subtitle,
    FlexContainer,
} from '../Components/Styles/General'
import AmountField from './AmountField';

export default class CurrencySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Select currency',
            isSelected: false,
            sign: '',
            placeholder: '1,000',
        };
    }

    render() {
        return (
            <ComponentContainer width={'45%'} >
                <div style={{
                    borderBottom: '1px solid #36b3b3', marginTop: 75
                }}>
                    <Subtitle>{this.props.fromTo}</Subtitle>
                    <Dropdown style={{ paddingBottom: 10 }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
                            width: '100%',
                            color: 'transparent',
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            boxShadow: 'none',
                            height: 30,
                            padding: 0,
                        }}>
                            <FlexContainer mobileFlexDirection={'row'} >
                                <ButtonText>{this.state.selected}</ButtonText>
                                <i style={{ fontSize: 12, color: '#000', marginLeft: 8.7, marginTop: 9 }} class="fas fa-angle-down"></i>
                            </FlexContainer>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ width: '100%' }}>
                            <Dropdown.Item onClick={() => {
                                this.setState({ selected: 'USD - Dollar', isSelected: true, sign: '$', placeholder: '1,000' })
                            }}>USD - Dollar</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                this.setState({ selected: 'EUR - Euro', isSelected: true, sign: '€', placeholder: '1,000' })
                            }}>EUR - Euro</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                this.setState({ selected: 'JPY - Japanese Yen', isSelected: true, sign: '¥', placeholder: '1,000' })
                            }}>JPY - Japanese Yen</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <AmountField
                    selected={this.state.selected}
                    isSelected={this.state.isSelected}
                    fromTo={this.props.fromTo}
                    placeholder={this.state.placeholder}
                    sign={this.state.sign}
                />

            </ComponentContainer>
        )
    }
}