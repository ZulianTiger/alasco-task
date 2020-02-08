import styled from 'styled-components'

export const LinkText = styled.p`
    font-weight: 400;
    font-size: 16;
    font-style: normal;
    color: #5d5f64;
    transition: 200ms;
    margin-bottom: 17.5px;
    margin-top: 17.5px;
    padding-left: 30px;
    padding-right: 30px;

    &:hover {
        color: #36b3b3;
    }
`
export const Title = styled.h1`
    color: #004466;
    line-height: 30px;
    font-size: 30px;
    letter-spacing: 0px;
    font-style: normal;
    font-weight: 700;
`
export const Styles = styled.div`
    .navbar {
        padding-top: 3px;
        padding-bottom: 3px;
        box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
    }
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-left: 32.5px;
        padding-right: 32.5px;
    }
`