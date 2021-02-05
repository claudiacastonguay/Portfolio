import React, {useState} from 'react';
import styled from 'styled-components';
import Router from 'next/router';


const Container = styled.div`
    // width: 100vw;
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

const NavUI = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;
    color: ${props=>props.uicolor ? "#15C4B6" : "black"};

    :hover{
        color: #15C4B6;
    }
`;

const NavGraphic = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;
    color: ${props=>props.graphiccolor ? "#15C4B6" : "black"};

    :hover{
        color: #15C4B6;
    }
`;

const NavAbout = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;
    color: ${props=>props.aboutcolor ? "#15C4B6" : "black"};

    :hover{
        color: #15C4B6;
    }
`;

const NavHome = styled.h4`
    margin-right: 60px;
    cursor: pointer;
    transition: 0.25s;

    :hover{
        color: #15C4B6;
    }
`;

const MobileNavUI = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    transition: 0.25s;
    color: ${props=>props.uicolor ? "#15C4B6" : "black"};

    :hover{
        color: #15C4B6;
    }
`;

const MobileNavGraphic = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    transition: 0.25s;
    color: ${props=>props.graphiccolor ? "#15C4B6" : "black"};

    :hover{
        color: #15C4B6;
    }
`;

const MobileNavAbout = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    transition: 0.25s;
    color: ${props=>props.aboutcolor ? "#15C4B6" : "black"};

    :hover{
        color: #15C4B6;
    }
`;

const MobileNavHome = styled.h3`
    cursor: pointer;
    margin-bottom: 60px;
    transition: 0.25s;
    color: ${props=>props.homecolor ? "#15C4B6" : "black"};

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





const Header = ({show, mobilehidden, uicolor, graphiccolor, aboutcolor, homecolor}) => {

    const [showmenu, setMenu] = useState(false);
    const [showclose, setClose] = useState(false);

    return <Container>
        

        <Close src='close.svg' showmenu={'flex'} showclose={showclose} showmenu={showmenu} onClick={()=>{
            setClose(!showclose);
            setMenu(!showmenu);
        }} />

        <Menu showmenu={showmenu}>
        <MobileNavHome homecolor={homecolor} onClick={()=>{
            routeHome();
        }}>HOME</MobileNavHome>
            <MobileNavUI uicolor={uicolor} onClick={()=>{
            routeUIUX();
        }}>UI/UX DESIGN</MobileNavUI>
            <MobileNavGraphic graphiccolor={graphiccolor} onClick={()=>{
            routeGraphicDesign();
        }}>GRAPHIC DESIGN</MobileNavGraphic>
            <MobileNavAbout aboutcolor={aboutcolor} onClick={()=>{
            routeAbout();
        }}>ABOUT</MobileNavAbout>
        </Menu>

<SubCont>
        <HomeNav>
            <NavHome onClick={()=>{
            routeHome();
        }}>CLAUDIA CASTONGUAY</NavHome>
        </HomeNav>


        {process.browser && window.innerWidth <= 1200 ?
            <HamMenu src='/menu.svg' show={'flex'} showmenu={showmenu} showclose={showclose} onClick={()=>{
                setMenu(!showmenu);
                setClose(!showclose);
            }} /> : null}


    
   
         
    {process.browser && window.innerWidth >= 1200 ?
        <Navigations mobilehidden={mobilehidden}>

        <NavUI uicolor={uicolor} onClick={()=>{
            routeUIUX();
        }}>UI/UX DESIGN</NavUI>

        <NavGraphic graphiccolor={graphiccolor} onClick={()=>{
            routeGraphicDesign();
        }}>GRAPHIC DESIGN</NavGraphic>

        <NavAbout aboutcolor={aboutcolor} onClick={()=>{
            routeAbout();
        }}>ABOUT</NavAbout>

    </Navigations> : null}

    </SubCont>

    </Container>

}




Header.defaultProps = {
    show: 'none',
    textcolor: "black"
}


export default Header;