import React from 'react';
import styled from 'styled-components';




const Container = styled.div`
    background-color: black;
    color: white;
    margin-top: 150px;
`;

const Name = styled.h1`
    margin: 0;
`;

const SubTitle = styled.h5`
    color: #c0c0c0;
    margin: 0;
`;

const MainText = styled.div`
    padding: 10%;
`;

const Location = styled.p`
    font-size: 15pt;
    margin-top: 40px;
`;

const Email = styled.p`
    font-size: 13pt;
    color: #15C4B6;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
`;

const Phone = styled.p`
    font-size: 13pt;
    color: #15C4B6;
    font-weight: bold;
    margin: 0;
`;

const Contacts = styled.div`
    margin-top: 70px;
`;

const Socials = styled.div`
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
    max-width: 500px;
`;

const SocialLink = styled.h4`
    cursor: pointer;
    transition: 0.3s;
    :hover{
        color: #15C4B6;
    }
`;



const Footer = () => {

    return <Container>
         
         <MainText>
            <Name>CLAUDIA CASTONGUAY</Name>
            <SubTitle>DIGITAL DESIGN / FRONT-END DEVELOPMENT</SubTitle>
            <br />
            <Location>Vancouver, BC, Canada</Location>

        <Contacts>
            <Email>claudcastonguay@gmail.com</Email>
            <br />
            <Phone>604-396-8378</Phone>
        </Contacts>

        <Socials>
            <SocialLink>RESUME</SocialLink>
            <SocialLink>LINKED IN</SocialLink>
            <SocialLink>INSTAGRAM</SocialLink>
        </Socials>
            
         </MainText>

    </Container>
}




Footer.defaultProps = {

}


export default Footer;