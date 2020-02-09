import React, { Component } from 'react'
import PageTitle from '../Components/PageTitle'
import CurrencySelector from '../Components/CurrencySelector'
import {
    PageContainer,
    FlexContainer,
} from '../Components/Styles/General'

export default class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime: '',
        };
    }

    componentDidMount() {
        //Set current data and time on load
        var tempDate = new Date();
        this.setState({
            datetime: tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() + ' ' + tempDate.getHours() + ':' + tempDate.getMinutes() + ':' + tempDate.getSeconds(),
        });
    }

    render() {
        return (
            <PageContainer>
                <PageTitle title={'Currency Converter'} subtitle={this.state.datetime} />
                <FlexContainer>
                    <CurrencySelector fromTo={'From'} />
                    <div style={{
                        width: '10%',
                    }}></div>
                    <CurrencySelector fromTo={'To'} />
                </FlexContainer>
            </PageContainer>
        )
    }
}