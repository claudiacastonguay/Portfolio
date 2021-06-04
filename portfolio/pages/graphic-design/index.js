import React, {useState} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Router from 'next/router';
import Footer from '../../comps/Footer';
import NextLink from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Head from 'next/head';



function ToTop(){
    document.documentElement.scrollTop = 0;
}



export default function GraphicDesign(){


    return <div>
        
    <Header graphiccolor="#15C4B6" graphicfont="27pt"/>

    <Head>
        <link rel="shortcut icon" href="/favicon2.svg" />
        <title>Claudia Castonguay - Digital Design</title>
    </Head>


    {/* INTRO */}

    <div className='titlecont'>
            
            <div className='subtitlecont'>
                <h1 className='uiuxtitle'>GRAPHIC DESIGN</h1>
                <h5 className='uiuxsubtitle'>Here are some of my best graphic design creations using Adobe Photoshop and Illustrator.</h5>
            </div>
            
            <NextLink className='scroll' href="/graphic-design#audiofina">
                <div className='downarrowcont2'>
                    <img className='downarrow' src='/whitedownarrow.svg'></img>
                </div>
            </NextLink>
        </div>






        
        {/* REALISTIC VECTOR DRAWING */}

    

        {process.browser && window.innerWidth >= 1512 ? <div className='graphicproject'>
            <div className='subgraphicproject'>

        <div id='vector'>
                {/* <img className='gamecube' src='/realisticgamecube.png'></img> */}
                <Slider 
                    speed={500}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={true}
                    dots={true}
                    >

                    <img src='/realisticgamecube.png' />
                    <img src='/originalvector.png' />
                    <img src='/vector1.png' />
                    <img src='/vector2.png' />
                </Slider>
            </div>


            <div className='leftmargin'>

                    <h1>REALISTIC VECTOR DRAWING</h1>

                    <p className='graphictext'>For this project, I was assigned to create a vector drawing in Adobe Illustrator as realistic as possible to a reference image of my choice.</p>

                    <p className='graphictext'>This is the final result of my GameCube controller vector drawing. I used various effects, textures, and shapes to make it look as realistic as I could.</p>

                    <p className='graphictext'>Scroll through the gallery to see a couple of the stages of the process of creating this vector graphic. The second image is the original reference image.</p>

            </div>


            

        </div>

    </div> :

    //MOBILE

    <div className='graphicproject'>
            <div className='subgraphicproject'>


        <div id='vector'>
                <img className='gamecube' src='/realisticgamecube.png'></img>
            </div>


            <div className='leftmargin'>

                    <h1 className='graphictitle'>REALISTIC VECTOR DRAWING</h1>

                    <p className='graphictext'>For this project, I was assigned to create a vector drawing in Adobe Illustrator as realistic as possible to a reference image of my choice.</p>

                    <p className='graphictext'>This is the final result of my GameCube controller vector drawing. I used various effects, textures, and shapes to make it look as realistic as I could.</p>


            </div>


            

        </div>

    </div>}







    <NextLink className='scroll' href="/graphic-design#painting">
            <div className='downarrowcont'>
                    <img className='downarrow' src='/downarrow.svg'></img>
            </div>
    </NextLink>






    {/* REALISTIC PAINTING */}

    {/* DESKTOP */}
    
    {process.browser && window.innerWidth >= 1512 ? <div className='graphicproject'>
        <div className='subgraphicproject'>

            <div className='paintingtext'>

                    <h1>REALISTIC PAINTING</h1>

                    <p className='graphictext'>The purpose of this project was to practice and understand Adobe Photoshop brushes and techniques. I was required to paint a portrait of someone in black and white as realistic and similar to a reference image as possible.</p>

                    <p className='graphictext'>This was the final product that was created in Adobe Photoshop. The painting involved using several brush settings and techniques. In addition, it involved using various effects and textures to make it appear as realistic as possible.</p>

                    <p className='graphictext'>Scroll through the gallery to see the original reference image, as well as the different stages in the process of making the painting.</p>

            </div>


            <div id='painting'>
                {/* <img className='logos' src='/realisticpainting.png'></img> */}
                <Slider 
                    speed={500}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={true}
                    dots={true}
                    >

                    <img src='/realisticpainting.png' />
                    <img src='/originalpainting.png' />
                    <img src='/paintingv1.png' />
                    <img src='/paintingv2.png' />
                    <img src='/paintingv3.png' />
                    
                </Slider>
            </div>

        </div>

    </div> :

    // MOBILE

    <div className='graphicproject'>
        <div className='subgraphicproject'>



        <div id='painting'>
                <img className='logos' src='/realisticpainting.png'></img>
            </div>


            <div className='paintingtext'>

                    <h1 className='graphictitle'>REALISTIC PAINTING</h1>

                    <p className='graphictext'>The purpose of this project was to practice and understand Adobe Photoshop brushes and techniques. I was required to paint a portrait of someone in black and white as realistic and similar to a reference image as possible.</p>

                    <p className='graphictext'>This was the final product that was created in Adobe Photoshop. The painting involved using several brush settings and techniques. In addition, it involved using various effects and textures to make it appear as realistic as possible.</p>


            </div>

        </div>

    </div>}







    <NextLink className='scroll' href="/graphic-design#albumcover">
    <div className='downarrowcont'>
                    <img className='downarrow' src='/downarrow.svg'></img>
        </div>
    </NextLink>









    {/* MOTION GRAPHICS VIDEO */}



    {process.browser && window.innerWidth >= 680 ? <div className='graphicproject'>
        <div id='promoanimation'>

            <div className='videotext'>

                    <h1 id='animatetitle'>MOTION GRAPHICS VIDEO</h1>
                   

                    <p className='graphictext'>This project required me to animate a thirty-second video in Adobe After Effects. All assets and images were to be created by myself and animated along with an audio clip of my choice.</p>

                    <p className='graphictext'>I created a short motion graphic video using vector drawings I made in Adobe Illustrator. I chose this animation to be about some things I like. The music used is an instrumental version of a song titled "The Mother We Share" by CHVRCHES.</p>

            </div>


            <div id='painting'>

            <iframe className='animation' width="560" height="250" src="https://www.youtube.com/embed/OSVp9-YLh7Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
            </div>

        </div>

    </div> :

    //MOBILE

<div className='graphicproject'>
    <div id='promoanimation'>

    <div className='videotext'>

            <h1 id='animatetitle'>MOTION GRAPHICS VIDEO</h1>

            <p className='graphictext'>This project required me to animate a thirty-second video in Adobe After Effects. All assets and images were to be created by myself and animated along with an audio clip of my choice.</p>

            <p className='graphictext'>I created a short motion graphic video using vector drawings I made in Adobe Illustrator. I chose this animation to be about some things I like. The music used is an instrumental version of a song titled "The Mother We Share" by CHVRCHES.</p>

    </div>


    <div id='painting'>

        <iframe className='animation' width="560" height="250" src="https://www.youtube.com/embed/OSVp9-YLh7Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
    </div>

</div>

</div>}










    <NextLink className='scroll' href="/graphic-design#albumcover">
    <div className='downarrowcont'>
                <img className='downarrow' src='/downarrow.svg'></img>
        </div>
    </NextLink>






    
    {/* AUDIOFINA LOGOS */}

    {/* DESKTOP */}

    {process.browser && window.innerWidth >= 1512 ? <div className='graphicproject'>
        <div className='subgraphicproject'>

            <div className='graphicprojecttext'>

                    <h1 className='graphictitle'>AUDIOFINA LOGO DESIGNS</h1>

                    <p className='graphictext'>This project required me to create five different logos for any type of non-existing company. Audiofina is a mock music brand that offers online music sharing.</p>

                    <p className='graphictext'>The left column shows all five logos in only black and white. The middle column shows the colorized logos with only solid colors. The right column also shows the colorized logos but with the use of gradients and various effects.</p>

            </div>


            <div id='audiofina'>
                <img className='logos' src='/musiclogos.png'></img>
            </div>

        </div>

    </div> :

    //MOBILE 
    
    <div className='graphicproject'>
        <div className='subgraphicproject'>


    <div id='audiofina'>
            <img className='logos' src='/musiclogos.png'></img>
    </div>


        <div className='graphicprojecttext'>

                <h1 className='graphictitle'>AUDIOFINA LOGO DESIGNS</h1>

                <p className='graphictext'>This project required me to create five different logos for any type of non-existing company. Audiofina is a mock music brand that offers online music sharing.</p>

                <p className='graphictext'>The left column shows all five logos in only black and white. The middle column shows the colorized logos with only solid colors. The right column also shows the colorized logos but with the use of gradients and various effects.</p>

        </div>

    </div>

</div>}










    <NextLink className='scroll' href="/graphic-design#albumcover">
    <div className='downarrowcont'>
                    <img className='downarrow' src='/downarrow.svg'></img>
        </div>
    </NextLink>





    {/* MOCK ALBUM COVER */}

    {/* DESKTOP */}

    {process.browser && window.innerWidth >= 1512 ? <div className='graphicproject'>
        <div className='subgraphicproject'>


        <div id='albumcover'>
                {/* <img className='logos' src='/mockalbumcover.png'></img> */}
                <Slider 
                    speed={500}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={true}
                    dots={true}
                    >

                    <img src='/mockalbumcover.png' />
                    <img src='/albumv1.png' />
                    <img src='/albumv2.png' />
                    <img src='/albumv3.png' />
                    <img src='/albumv4.png' />
                    <img src='/albumv5.png' />
                </Slider>
            </div>


            <div className='leftmargin'>

                    <h1 className='graphictitle'>MOCK ALBUM COVER</h1>

                    <p className='graphictext'>For this project I was told to create anything I wanted in Adobe Photoshop, as long as it met certain requirements in terms of technical things like using brushes and effects.</p>

                    <p className='graphictext'>I put together this mock album cover using a couple of royalty-free images, some vector shapes, lots of different brushes, and lots of effects.</p>

                    <p className='graphictext'>Scroll through the gallery to see the creation process of this project.</p>

            </div>


            

        </div> 



    </div> : 

    //MOBILE

    <div className='graphicproject'>
        <div className='subgraphicproject'>


        <div id='albumcover'>
                <img className='logos' src='/mockalbumcover.png'></img>
            </div>


            <div className='leftmargin'>

                    <h1 className='graphictitle'>MOCK ALBUM COVER</h1>

                    <p className='graphictext'>For this project I was told to create anything I wanted in Adobe Photoshop, as long as it met certain requirements in terms of technical things like using brushes and effects.</p>

                    <p className='graphictext'>I put together this mock album cover using a couple of royalty-free images, some vector shapes, lots of different brushes, and lots of effects.</p>


            </div>


            

        </div> 



    </div>}





    <NextLink className='scroll' href="/graphic-design#motiongraphicproject">
    <div className='downarrowcont'>
                    <img className='downarrow' src='/downarrow.svg'></img>
        </div>
    </NextLink>





{/* SHIMA JAVAN DESIGN ANIMATION */}

    {/* DESKTOP */}


    {process.browser && window.innerWidth >= 680 ? <div className='graphicproject'>
        <div id='motiongraphicproject'>

            <div className='videotext'>

                    <h1 className='graphictitle'>SHIMA JAVAN INTERIOR DESIGN</h1>
                    <h3 id='animatesubtitle'>PROMOTIONAL ANIMATION</h3>

                    <p className='graphictext'>I worked for a start-up interior design business named Shima Javan Interior Design. This business required a short animation to help promote its website and social media accounts.</p>

                    <p className='graphictext'>I created the first half of this animation as well as the outro of the video; my co-worker completed the second half. This was animated using Adobe After Effects.</p>

            </div>


            <div id='painting'>
                <iframe className='animation' width="560" height="250" src="https://www.youtube.com/embed/eJdJT5Fq2ys" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
            </div>

        </div>

    </div> :

    //MOBILE

<div className='graphicproject'>
    <div id='motiongraphicproject'>

    <div className='videotext'>

                    <h1 className='graphictitle'>SHIMA JAVAN INTERIOR DESIGN</h1>
                    <h3 id='animatesubtitle'>PROMOTIONAL ANIMATION</h3>

            <p className='graphictext'>I worked for a start-up interior design business named Shima Javan Interior Design. This business required a short animation to help promote its website and social media accounts.</p>

            <p className='graphictext'>I created the first half of this animation as well as the outro of the video; my co-worker completed the second half. This was animated using Adobe After Effects.</p>

    </div>


    <div id='painting'>
                <iframe className='animation' width="560" height="250" src="https://www.youtube.com/embed/eJdJT5Fq2ys" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
            </div>

</div>

</div>}







    <div className='margintop'>
        <div className='backtotop'>
            <img onClick={ToTop} className='totoparrow' src='/uparrow.svg' />
            <h4 className='totoptext'>Back to Top</h4>
        </div>
    </div>


    <div>
        <Footer />
    </div>



    </div>

}