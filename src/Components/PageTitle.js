import React, { Component } from 'react'
import {
    Title,
    Subtitle
} from './Styles/General'

export default class PageTitle extends Component {

    render() {
        return (
            <React.Fragment>
                <Title>{this.props.title || 'This is a mysterious page.'}</Title>
                <Subtitle>{this.props.subtitle || '...and it does not have a subtitle'}</Subtitle>
            </React.Fragment>
        )
    }
}