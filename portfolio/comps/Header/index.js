import React, {useState} from 'react';
import styled from 'styled-components';
import Router from 'next/router';


const Container = styled.div`
    width: 100vw;
    height: 80px;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Menu = styled.div`
    display: ${props=>props.showmenu ? "flex" : "none"};
    opacity: ${props=>props.showmenu ? "1" : "0"};
    z-index: 2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.4s;
`;

const Nav = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;

    :hover{
        color: #15C4B6;
    }
`;

const MobileNav = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    transition: 0.25s;

    :hover{
        color: #15C4B6;
    }
`;

const Navigations = styled.div`
    display: ${props=>props.mobilehidden ? 'none' : 'flex'};
`;

const HomeNav = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
`;

const SubCont = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
`;

const HamMenu = styled.img`
    height: 40px;
    display: ${props=>props.show ? 'flex' : 'none'};
    margin-right: 20px;
    cursor: pointer;
`;

const Close = styled.img`
    display: ${props=>props.showclose ? 'flex' : 'none'};
    // display: flex;
    height: 40px;
    margin-right: 20px;
    cursor: pointer;
    z-index: 3;
    position: absolute;
    top: 3;
    right: 0;
`;


function routeHome(){
    if(true){
        Router.push("/");
    }
}

function routeUIUX(){
    if(true){
        Router.push("/ui-ux-design");
    }
}

function routeGraphicDesign(){
    if(true){
        Router.push("/graphic-design");
    }
}

function routeAbout(){
    if(true){
        Router.push("/about")
    }
}



const Header = ({show, mobilehidden}) => {

    const [showmenu, setMenu] = useState(false);
    const [showclose, setClose] = useState(false);

    return <Container>
        

        <Close src='close.svg' showmenu={'flex'} showclose={showclose} showmenu={showmenu} onClick={()=>{
            setClose(!showclose);
            setMenu(!showmenu);
        }} />

        <Menu showmenu={showmenu}>
            <MobileNav onClick={()=>{
            routeUIUX();
        }}>UI/UX DESIGN</MobileNav>
            <MobileNav onClick={()=>{
            routeGraphicDesign();
        }}>GRAPHIC DESIGN</MobileNav>
            <MobileNav onClick={()=>{
            routeAbout();
        }}>ABOUT</MobileNav>
        </Menu>

<SubCont>
        <HomeNav>
            <Nav onClick={()=>{
            routeHome();
        }}>CLAUDIA CASTONGUAY</Nav>
        </HomeNav>


        {process.browser && window.innerWidth <= 1200 ?
            <HamMenu src='/menu.svg' show={'flex'} showmenu={showmenu} showclose={showclose} onClick={()=>{
                setMenu(!showmenu);
                setClose(!showclose);
            }} /> : null}


    
   
         
    {process.browser && window.innerWidth >= 1200 ?
        <Navigations mobilehidden={mobilehidden}>

        <Nav onClick={()=>{
            routeUIUX();
        }}>UI/UX DESIGN</Nav>

        <Nav onClick={()=>{
            routeGraphicDesign();
        }}>GRAPHIC DESIGN</Nav>

        <Nav onClick={()=>{
            routeAbout();
        }}>ABOUT</Nav>

    </Navigations> : null}

    </SubCont>

    </Container>

}




Header.defaultProps = {
    show: 'none'
}


export default Header;