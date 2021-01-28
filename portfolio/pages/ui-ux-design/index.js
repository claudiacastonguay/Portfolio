import React, {useState} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Router from 'next/router';
import Footer from '../../comps/Footer';


function routeEarthHero(){
    if(true){
        Router.push('http://earth-hero.herokuapp.com/Home-page');
    }
}

function routeMobile(){
    if(true){
        Router.push('https://xd.adobe.com/view/b4cb4a2b-74c9-42d6-8a9c-35e4b8345d7e-e198/?fullscreen');
    }
}

function routeDesktop(){
    if(true){
        Router.push('https://xd.adobe.com/view/68a6fd50-d9a4-4b03-b4aa-ac426d8ea144-3df5/?fullscreen');
    }
}

function routeDairyDelight(){
    if(true){
        Router.push("https://xd.adobe.com/view/e920124e-9f4e-4bfa-ae13-5ab5774b44b8-bc73/?fullscreen");
    }
}



export default function UIUXDesign () {
    return <div className='uiux'>

    <Header />


        {/* INTRO */}

        <div className='titlecont'>
            
            <div className='subtitlecont'>
                <h1 className='uiuxtitle'>UI/UX DESIGN</h1>
                <h5 className='uiuxsubtitle'>Below are my biggest projects of web applications I've helped design and develop with different teams.</h5>
            </div>
            
                <div className='downarrowcont2'>
                    <img className='downarrow' src='/downarrow.svg'></img>
                </div>
            
        </div>



        {/* EARTH HERO */}

    <div className='earthherocont'>
        <h1 className='earthherotitle'>EARTH HERO</h1>
    </div>

        <div className='flexearthhero'>
            <div className='earthheroimg'>
                <img className='EHimg' src='/placeholder.png'></img>
            </div>
        </div>


    <div className='uiprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Earth Hero is a mobile educational web application that teaches users about climate change issues around the world. It allows you to select a topic to learn about and quizzes you afterwards on the information you've read.</p>

        <h2 className='uisubtitle'>MY ROLES</h2>
        <p className='uiprojecttext'>This app was created with a group of three team members, including myself. I was responsible for most of the development of this app, and I helped out with a bit of the design.</p>

        <h2 className='uisubtitle'>PROTOTYPE</h2>
        <p className='uiprojecttext'>You can try out Earth Hero on your phone's browser or on a desktop browser. If you choose to view it on a desktop, make sure you right-click the screen and click 'Inspect,' then drag the divider so that the view width is a number between 300 and 400 pixels.</p>

        <div className='uibutton'><Button text='SEE PROTOTYPE' onClick={()=>{
            routeEarthHero();
        }}/></div>

    </div>




    <div className='downarrowcont'>
        <img className='downarrow' src='/downarrow.svg'></img>
    </div>


    
    {/* CRAIGSLIST REDESIGN */}


    <div className='earthherocont'>
        <h1 className='earthherotitle'>CRAIGSLIST REDESIGN</h1>
    </div>

        <div className='flexearthhero'>
            <div className='earthheroimg'>
                <img className='EHimg' src='/placeholder.png'></img>
            </div>
        </div>


    <div className='uiprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>The purpose of this project was to redesign the entire UI/UX of Craigslist.</p>

        <h2 className='uisubtitle'>MY ROLES</h2>
        <p className='uiprojecttext'>This was created with a team of four members, including myself. I was responsible for the majority of the design of this web application. I created about 90% of the high-fidelity mockups which included both mobile and desktop versions.</p>

        <h2 className='uisubtitle'>PROTOTYPE</h2>
        <p className='uiprojecttext'>The prototypes of this app are available for you to check out below for desktop and mobile.</p>


        <div className='uibuttonflex'>
            <div className='uibutton'><Button text='MOBILE PROTOTYPE' onClick={()=>{
                routeMobile();
            }}/></div>

            <div className='uibutton'><Button text='DESKTOP PROTOTYPE' onClick={()=>{
                routeDesktop();
            }}/></div>
        </div>

    </div>





    <div className='downarrowcont'>
        <img className='downarrow' src='/downarrow.svg'></img>
    </div>







    {/* DAIRY DELIGHT */}


    <div className='earthherocont'>
        <h1 className='earthherotitle'>DAIRY DELIGHT</h1>
    </div>

        <div className='flexearthhero'>
            <div className='earthheroimg'>
                <img className='EHimg' src='/placeholder.png'></img>
            </div>
        </div>


    <div className='uiprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Dairy Delight is a faux small ice cream business that sells ice cream, milkshakes, and cakes made with natural ingredients. They also offer an online delivery service on their website.</p>

        <h2 className='uisubtitle'>MY ROLES</h2>
        <p className='uiprojecttext'>This project was completed by a team of two members, including myself. I was responsible for half of the design for the website prototype.</p>

        <h2 className='uisubtitle'>PROTOTYPE</h2>
        <p className='uiprojecttext'>Click below to try out the desktop prototype of Dairy Delight!</p>


            <div className='uibutton'><Button text='SEE PROTOTYPE' onClick={()=>{
                routeDairyDelight();
            }}/></div>
        

    </div>



    <div>
        <Footer />
    </div>



    </div>
}