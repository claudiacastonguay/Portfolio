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
    display: flex;
    flex-direction: column;
`;

const Location = styled.p`
    font-size: 15pt;
    margin-top: 40px;
`;

const Email = styled.a`
    font-size: 13pt;
    font-family: 'Yantramanav', sans-serif;
    color: #15C4B6;
    font-weight: bold;
    text-decoration: none;
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
    margin-top: 15px;
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

const SocialLink = styled.a`
    cursor: pointer;
    font-family: NexaBold;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    :hover{
        color: #15C4B6;
    }
`;

const Name2 = styled.h1`
    margin: 0;
    font-size: 27pt;
`;

const SubTitle2 = styled.h5`
    color: #c0c0c0;
    margin: 0;
    margin-top: 10px;
    font-size: 13pt;
`;

const Location2 = styled.p`
    font-size: 13pt;
    margin-top: 40px;
`;

const SocialLink2 = styled.a`
    cursor: pointer;
    font-size: 11pt;
    font-family: NexaBold;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    :hover{
        color: #15C4B6;
    }
`;

const Socials2 = styled.div`
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
    max-width: 285px;
`;

const Copyright = styled.p`
    color: lightgray;
    font-family: 'Yantramanav', sans-serif;
    font-size: 11pt;
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`;


const Footer = () => {

    return <Container>


        {/* DESKTOP */}
         
        {process.browser && window.innerWidth >= 480 ? <MainText>
            <Name>CLAUDIA CASTONGUAY</Name>
            <SubTitle>DIGITAL DESIGN / FRONT-END DEVELOPMENT</SubTitle>
            <br />
            <Location>Vancouver, BC, Canada</Location>

        <Contacts>
            <Email target='_blank' href={'mailto:claudcastonguay@gmail.com'}>claudcastonguay@gmail.com</Email>
            {/* <br /> */}
            <Phone>604-396-8378</Phone>
        </Contacts>

        <Socials>
            <SocialLink target='_blank' href={'https://drive.google.com/file/d/16MF2KQmfGXc95W-q2_U5volZcxuLM0gT/view?usp=sharing'}>RESUME</SocialLink>
            <SocialLink target="_blank" href={'https://www.linkedin.com/in/claudiacastonguay/'}>LINKEDIN</SocialLink>
            <SocialLink onClick={()=>{
                alert('instagram');
            }}>INSTAGRAM</SocialLink>
        </Socials>
            
         </MainText> : null}



         {/* MOBILE */}

         {process.browser && window.innerWidth <= 480 ? <MainText>
            <Name2>CLAUDIA CASTONGUAY</Name2>
            <SubTitle2>DIGITAL DESIGN / FRONT-END DEVELOPMENT</SubTitle2>
            <br />
            <Location2>Vancouver, BC, Canada</Location2>

        <Contacts>
            <Email target='_blank' href={'mailto:claudcastonguay@gmail.com'}>claudcastonguay@gmail.com</Email>
            <br />
            <Phone>604-396-8378</Phone>
        </Contacts>

        <Socials2>
            <SocialLink2 target='_blank' href={'https://drive.google.com/file/d/16MF2KQmfGXc95W-q2_U5volZcxuLM0gT/view?usp=sharing'}>RESUME</SocialLink2>
            <SocialLink2 target="_blank" href={'https://www.linkedin.com/in/claudiacastonguay/'}>LINKEDIN</SocialLink2>
            <SocialLink2 onClick={()=>{
                alert('instagram');
            }}>INSTAGRAM</SocialLink2>
        </Socials2>
            
         </MainText> : null}

            {/* <Center>
                <Copyright>Copyright © 2021 Claudia Castonguay - All Rights Reserved</Copyright>
            </Center> */}

    </Container>
}




Footer.defaultProps = {

}


export default Footer;