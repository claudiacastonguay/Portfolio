import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
    width: 100vw;
    height: 80px;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Nav = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;

    :hover{
        color: #15C4B6;
    }
`;

const Navigations = styled.div`
    display: flex;
`;

const HomeNav = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
`;

const SubCont = styled.div`
    // display: flex;
    // justify-content: center;
    // border: 1px solid red;
    // width: 100%;
`;

const Header = () => {

    return <Container>
        {/* <SubCont> */}

    <HomeNav>
        <Nav>CLAUDIA CASTONGUAY</Nav>
    </HomeNav>
         
    <Navigations>

        <Nav>UI/UX DESIGN</Nav>

        <Nav>GRAPHIC DESIGN</Nav>

        <Nav>ABOUT</Nav>

    </Navigations>

    {/* </SubCont> */}

    </Container>

}




Header.defaultProps = {

}


export default Header;