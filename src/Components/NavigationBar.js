import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {
    Styles,
    LinkText,
    Title,
} from './Styles/NavigationBar'
import { Link } from 'react-router-dom'

export default class NavigationBar extends Component {
    render() {
        return (
            <Styles>
                <Navbar variant="light" expand="lg">
                    <Navbar.Brand href="/">
                        <Title>
                            Alasco Task
                        </Title>
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Link style={{ textDecoration: "none" }} to={'/'}>
                                    <LinkText>Rectangles</LinkText>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link style={{ textDecoration: "none" }} to={'dices'}>
                                    <LinkText>Dices</LinkText>
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link style={{ textDecoration: "none" }} to={'currency'}>
                                    <LinkText>Currency Converter</LinkText>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}