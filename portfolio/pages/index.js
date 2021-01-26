import React, {useState} from 'react';
import Header from '../comps/Header';
import Button from '../comps/Button';
import Router from 'next/router';

function GoToUIUX(){
    Router.push("/ui-ux-design");
}

function RouteGraphic(){
    Router.push("/graphic-design");
}


export default function Home () {
    return <div>

        <Header />



        {/* HOME TITLE & IMAGE SECTION */}

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
            <img className='desktophomeimg' src="/placeholder.png"></img>
        </div>}

    
    </div>




    <div className='downarrowcont'>
        <img className='downarrow' src='/downarrow.svg'></img>
    </div>




    {/* UI PROJECTS SECTION */}

    <div className='graphicdesignhome'>

        <div className='uihomeimgcont'>
            <img className='uihomeimg' src='/placeholder.png'></img>
        </div>

        <div className='graphichometext'>
        <h3 className='homesectiontitle'>UI/UX Design Projects</h3>
        <p className='homesectiondesc'>Description for this section here...</p>

        <div className='sectionhomebutton'>
            <Button text='SEE PROJECTS' onClick={()=>{
                GoToUIUX();
            }}/>
        </div>
        </div>
    </div>


    {/* GRAPHIC DESIGN PROJECTS SECTION */}

<div className='graphicdesignhome'>
    
    <div className='uihomeimgcont'>
        <img className='uihomeimg' src='/placeholder.png'></img>
    </div>

    <div className='graphichometext'>
    <h3 className='homesectiontitle'>Graphic Design Projects</h3>
    <p className='homesectiondesc'>Description for this section here...</p>

    <div className='sectionhomebutton'>
        <Button text='SEE PROJECTS' onClick={()=>{
            RouteGraphic();
        }}/>
    </div>
</div>

</div>


    </div>
}


