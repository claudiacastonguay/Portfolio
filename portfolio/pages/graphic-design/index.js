import React, {useState} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Router from 'next/router';
import Footer from '../../comps/Footer';



export default function GraphicDesign(){


    return <div>
        
    <Header />


    {/* INTRO */}

    <div className='titlecont'>
            
            <div className='subtitlecont'>
                <h1 className='uiuxtitle'>GRAPHIC DESIGN</h1>
                <h5 className='uiuxsubtitle'>Here is some of my best graphic design work using Adobe Photoshop and Illustrator.</h5>
            </div>
            
                <div className='downarrowcont2'>
                    <img className='downarrow' src='/whitedownarrow.svg'></img>
                </div>
            
        </div>



    
    {/* AUDIOFINA LOGOS */}

    {/* DESKTOP */}

    {process.browser && window.innerWidth >= 1512 ? <div className='graphicproject'>
        <div className='subgraphicproject'>

            <div className='graphicprojecttext'>

                    <h1 className='graphictitle'>AUDIOFINA LOGO DESIGNS</h1>

                    <p className='graphictext'>This project required me to create five different logos for any type of non-existing company. Audiofina is a mock music brand that offers online music sharing.</p>

                    <p className='graphictext'>The left column shows all five logos in only black and white. Next, the middle column shows the colorized logos with only solid colors. Lastly, the right column also shows the colorized logos but with the use of gradients and various effects.</p>

            </div>


            <div className='projectimage'>
                <img className='logos' src='/musiclogos.png'></img>
            </div>

        </div>

    </div> :

    //MOBILE 
    
    <div className='graphicproject'>
        <div className='subgraphicproject'>


    <div className='projectimage'>
            <img className='logos' src='/musiclogos.png'></img>
    </div>


        <div className='graphicprojecttext'>

                <h1 className='graphictitle'>AUDIOFINA LOGO DESIGNS</h1>

                <p className='graphictext'>This project required me to create five different logos for any type of non-existing company. Audiofina is a mock music brand that offers online music sharing.</p>

                <p className='graphictext'>The left column shows all five logos in only black and white. Next, the middle column shows the colorized logos with only solid colors. Lastly, the right column also shows the colorized logos but with the use of gradients and various effects.</p>

        </div>

    </div>

</div>}







    <div className='downarrowcont'>
                    <img className='downarrow' src='/downarrow.svg'></img>
        </div>






        {/* REALISTIC VECTOR DRAWING */}

    

        <div className='graphicproject'>
            <div className='subgraphicproject'>

        <div className='gamecubecont'>
                <img className='gamecube' src='/realisticgamecube.png'></img>
            </div>


            <div className='leftmargin'>

                    <h1>REALISTIC VECTOR DRAWING</h1>

                    <p className='graphictext'>For this project, I was assigned to create a vector drawing in Adobe Illustrator as realistic as possible to a reference image of my choice.</p>

                    <p className='graphictext'>This is the final result of my GameCube controller vector drawing. I used various effects, textures, and shapes to make it look as realistic as I could.</p>

            </div>


            

        </div>

    </div> 







    <div className='downarrowcont'>
                    <img className='downarrow' src='/downarrow.svg'></img>
        </div>






    {/* REALISTIC PAINTING */}

    {/* DESKTOP */}
    
    {process.browser && window.innerWidth >= 1512 ? <div className='graphicproject'>
        <div className='subgraphicproject'>

            <div className='paintingtext'>

                    <h1>REALISTIC PAINTING</h1>

                    <p className='graphictext'>The purpose of this project was to practice and understand Adobe Photoshop brushes and techniques. I was required to paint a portrait of someone in black and white as realistic and similar to a reference image as possible.</p>

                    <p className='graphictext'>This was the final product that was created in Adobe Photoshop. The painting involved using several brush settings and techniques. In addition, it involved using various effects and textures to make it appear as realistic as possible.</p>

            </div>


            <div className='projectimage'>
                <img className='logos' src='/realisticpainting.png'></img>
            </div>

        </div>

    </div> :

    // MOBILE

    <div className='graphicproject'>
        <div className='subgraphicproject'>



        <div className='projectimage'>
                <img className='logos' src='/realisticpainting.png'></img>
            </div>


            <div className='paintingtext'>

                    <h1 className='graphictitle'>REALISTIC PAINTING</h1>

                    <p className='graphictext'>The purpose of this project was to practice and understand Adobe Photoshop brushes and techniques. I was required to paint a portrait of someone in black and white as realistic and similar to a reference image as possible.</p>

                    <p className='graphictext'>This was the final product that was created in Adobe Photoshop. The painting involved using several brush settings and techniques. In addition, it involved using various effects and textures to make it appear as realistic as possible.</p>

            </div>

        </div>

    </div>}







    <div className='downarrowcont'>
                    <img className='downarrow' src='/downarrow.svg'></img>
        </div>






    {/* MOCK ALBUM COVER */}

    

    <div className='graphicproject'>
        <div className='subgraphicproject'>


        <div className='projectimage'>
                <img className='logos' src='/mockalbumcover.png'></img>
            </div>


            <div className='leftmargin'>

                    <h1 className='graphictitle'>MOCK ALBUM COVER</h1>

                    <p className='graphictext'>For this project, I was told to create anything I wanted in Adobe Photoshop, as long as it met certain requirements in terms of technical things like using brushes and effects.</p>

                    <p className='graphictext'>I put together this mock album cover using a couple of royalty-free images, some vector shapes, lots of different brushes, and lots of effects.</p>

            </div>


            

        </div>

    </div>



    <div>
        <Footer />
    </div>



    </div>

}