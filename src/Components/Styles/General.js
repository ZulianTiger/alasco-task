import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 1.1px;
    color: #5d5f64;
    margin-top: 50px;
`
export const Subtitle = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #36b3b3;
    margin-bottom: 0px;
    margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`
export const PageContainer = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    padding-right: 200px;
    padding-left: 200px;
    @media only screen and (max-width: 600px) {
        padding-right: 20px;
        padding-left: 20px;
    }
`
export const ComponentContainer = styled.div`
    width: ${props => (props.width)};
    margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-left: 0px;
    }
    @media only screen and (max-width: 992px) {
        width: 100%;
    }
`
export const FlexContainer = styled.div`
    flex-direction: row;
    display: flex;
    @media only screen and (max-width: 1200px) {
        flex-direction: ${props => (props.mobileFlexDirection ? props.mobileFlexDirection : 'column')};
    }
`
export const ButtonText = styled.p`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.1px;
    color: #5d5f64;
    margin-bottom: 0px;
    text-align: left;
    width: 97%;
`
export const InputField = styled.input`
    font-size: 72px;
    width: ${props => (props.width)};
    background: transparent;
    border-width: 0px;
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 20px;
    padding-left: 5px;
    max-width: 95%;
    color: #5d5f64;
`