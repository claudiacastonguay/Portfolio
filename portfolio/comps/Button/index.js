import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
    border: 5px solid #15C4B6;
    padding: 0px 15px 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    color: #15C4B6;
    max-width: 150px;
    :hover{
        color:white;
        background-color: #15C4B6;
    }
`;

const Text = styled.h3`
    font-size: 14pt;
`;


const Button = ({text, onClick}) => {

    return <Container onClick={onClick}>
         <Text>{text}</Text>
    </Container>

}




Button.defaultProps = {
    text:"DEFAULT",
    onClick:()=>{}
}


export default Button;