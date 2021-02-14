import React, {useState} from 'react';
import Header from '../comps/Header';
import Button from '../comps/Button';
import Router from 'next/router';
import Footer from '../comps/Footer';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from 'next/head';
import NextLink from 'next/link';




function GoToUIUX(){
    Router.push("/ui-ux-design");
}

function RouteGraphic(){
    Router.push("/graphic-design");
}


export default function Home () {
    return <div>

        <Header homecolor={"#15C4B6"}/>


        <Head>
            <link rel="shortcut icon" href="/favicon2.svg" />
            <title>Claudia Castonguay - Digital Design</title>
        </Head>



        {/* HOME TITLE & IMAGE SECTION */}

        {/* <div className='topmargin'></div> */}


    <div className='topbackground'>

       <div className='homedesktopflex'>

        <div className="hometitle">
            {process.browser && window.innerWidth <= 480 ? 
            <h2>Hi, I'm Claudia Castonguay.</h2> : <h1>Hi, I'm Claudia Castonguay.</h1>}

        {process.browser && window.innerWidth <= 480 ?
        <h5 className="homesubtitle">I'm an aspiring UI/UX and graphic designer in Vancouver, BC.</h5> : 
        <h5 className="desktophomesubtitle">I'm an aspiring UI/UX and graphic designer in Vancouver, BC.</h5>}

        </div>

        {process.browser && window.innerWidth <= 480 ? <div className='homeimgcont'>
            <img className='homeimg' src="/placeholder.png"></img>
        </div> : 
        <div className='desktophomeimgcont'>
            <img className='desktophomeimg' src="/homepage2.png"></img>
        </div>}

    
    </div>



    <NextLink className='scroll' href="/#uihomeimgcont">
        <div className='downarrowconthome'>
            <img className='downarrow' src='/downarrow.svg'></img>
        </div>
    </NextLink>


    </div>




    {/* UI PROJECTS SECTION */}

    <div className='subhome'>
     <div className='graphicdesignhome'>
        

            <div id='uihomeimgcont'>
                <img className='uihomeimg' src='/uiprojects.png'></img>
            </div>

            <div className='graphichometext'>
                <h3 className='homesectiontitle'>UI/UX Design Projects</h3>
                <p className='homesectiondesc'>See my biggest UI/UX web-application projects that I helped design and develop.</p>

                <div className='sectionhomebutton'>
                    <Button text='SEE PROJECTS' onClick={()=>{
                        GoToUIUX();
                    }}/>
                </div>
            </div>
        </div>
    </div> 




    


    {/* GRAPHIC DESIGN PROJECTS SECTION */}
    <div className='subhome'>
        <div className='graphicdesignhome'>
        
        <div className='uihomeimgcont'>
            <img className='uihomeimg' src='/graphicdesignprojects.png'></img>
        </div>

        <div className='graphichometext'>
        <h3 className='homesectiontitle'>Graphic Design Projects</h3>
        <p className='homesectiondesc'>See my best graphic design work I created using Adobe Photoshop and Illustrator.</p>

        <div className='sectionhomebutton'>
            <Button text='SEE PROJECTS' onClick={()=>{
                RouteGraphic();
            }}/>
        </div>
    </div>
</div>

</div>





<div>
    <Footer />
</div>


    </div>
}


