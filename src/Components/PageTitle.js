import React, { Component } from 'react'
import {
    Title,
    Subtitle
} from './Styles/General'

export default class PageTitle extends Component {

    render() {
        return (
            <React.Fragment>
                <Title>{this.props.title}</Title>
                <Subtitle>{this.props.subtitle}</Subtitle>
            </React.Fragment>
        )
    }
}