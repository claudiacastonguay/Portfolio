import React, {useState} from 'react';
import Header from '../../comps/Header';
import Button from '../../comps/Button';
import Router from 'next/router';
import Footer from '../../comps/Footer';
import NextLink from 'next/link';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';





export default function UIUXDesign () {
    return <div className='uiux'>

    <Header uicolor={"#15C4B6"}/>


        {/* INTRO */}

        <div className='uititlecont'>
            
            <div className='subtitlecont'>
                <h1 className='uiuxtitle'>UI/UX DESIGN</h1>
                <h5 className='uiuxsubtitle'>Below are my biggest projects of web applications I've helped design and develop with different teams.</h5>
            </div>

            <NextLink className='scroll' href="/ui-ux-design#earthherocont">
                <div className='downarrowcont2'>
                    <img className='downarrow' src='/whitedownarrow.svg'></img>
                </div>
            </NextLink>
        </div>



        {/* EARTH HERO */}

    <div id='earthherocont'>
        <h1 className='earthherotitle'>EARTH HERO</h1>
    </div>

        <div className='flexearthhero'>
            <div className='earthheroimg'>
                {/* <img className='EHimg' src='/earthherogallery.png'></img> */}
                <Slider 
                    speed={1000}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={false}
                    dots={true}
                    >

                    <img src='/earthherogallery.png' />
                    <img src='/earthherogallery2.png' />
                    <img src='/earthherogallery3.png' />
                </Slider>
            </div>

        </div>

        <div className='downloadsflex'>
            <div className='uidownloads'>
                
                    <h4>The PDFs of Earth Hero's style guide and user research documentation are available here:</h4>
                

                <div className="flexbuttons">
                    
                    <Button text="STYLE GUIDE" externallink={"https://drive.google.com/file/d/1tC4xmnL_hHuwGkZ-MN74B2kE7ABWEeR9/view?usp=sharing"}/>
                    <Button text="USER RESEARCH" externallink={"https://drive.google.com/file/d/10GdGj15OcSi283O86dAk0oBJm9tpzY3M/view?usp=sharing"}/>

                </div>
            </div>
        </div>

    <div className='uiprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Earth Hero is a mobile educational web application that teaches users about climate change issues around the world. It allows you to select a topic to learn about and quizzes you afterwards on the information you've read. This app is aimed to a young target audience, specifically kids around the age of 10-17. The language used is simple for the users to understand, and Earth Hero's clean and intuitive UI allows it to effectively educate its user.</p>
        <p className='uiprojecttext'>Climate change is still a severe problem to this day, and the goal for Earth Hero is simply to educate and inform. The user for this app doesn't need to be someone in the younger generations; it can be for anyone who wants to learn and discover the different major climate change issues existing today.</p>
        <p className='uiprojecttext'>However, we didn't want Earth Hero to only inform people. So we implemented a card within each climate change topic that gives a few ways the user can help to make a difference. With that, we hope users can take away some valuable knowledge and experiences from using Earth Hero.</p>

        <h2 className='uisubtitle'>ROLES</h2>
        <p className='uiprojecttext'>This app was created with a group of three team members, including myself. All three team members were enrolled as designers and front-end developers. I was responsible for most of the development of this app and only helped out with a few design aspects.</p>

        <h2 className='uisubtitle'>TRY IT OUT</h2>
        <p className='uiprojecttext'>You can try out Earth Hero on your phone's browser or on a desktop browser. If you choose to view it on a desktop, make sure you right-click the screen and click 'Inspect.' Then press <b>Ctrl (Cmd) + Shift + M</b> to switch to a mobile view.</p>

        <div className='uibutton'>
            <Button text='TRY EARTH HERO' externallink={"http://earth-hero.herokuapp.com/Home-page"}/>
        </div>

    </div>



    <NextLink className='scroll' href="/ui-ux-design#craigslistcont">
        <div className='downarrowcont'>
            <img className='downarrow' src='/downarrow.svg'></img>
        </div>
    </NextLink>


    
    {/* CRAIGSLIST REDESIGN */}


    <div id='craigslistcont'>
        <h1 className='earthherotitle'>CRAIGSLIST REDESIGN</h1>
    </div>

        <div className='flexearthhero'>
            <div className='craigslistgallery'>
                {/* <img className='EHimg' src='/placeholder.png'></img> */}
                <Slider 
                    speed={1000}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={false}
                    dots={true}
                    >

                    <img src='/craigslistgallery.png' />
                    <img src='/craigslistgallery2.png' />
                    <img src='/craigslistgallery3.png' />
                    <img src='/craigslistgallery4.png' />
                </Slider>
            </div>
        </div>


        <div className='downloadsflex'>
            <div className='uidownloads'>
                
                    <h4>The PDFs of the Craigslist Redesign style guide and user research documentation are available here:</h4>
                

                <div className="flexbuttons">
                    
                    <Button text="STYLE GUIDE" externallink={"https://drive.google.com/file/d/1cfvHDrGYT3pkHCzYiLulWMQ53h4ApzFX/view?usp=sharing"}/>
                    <Button text="USER RESEARCH" externallink={"https://drive.google.com/file/d/1qNdOuBEtLCiNvrgJ5E3Y7-7srY4R8dLD/view?usp=sharing"}/>

                </div>
            </div>
        </div>


    <div className='uiprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Most of us have visited <a target='_blank' href='https://craigslist.org'>Craigslist.com</a>, whether it be to buy something cheap, check out discussion forums, or sell something for a bit of extra cash in the pocket. However, you may have noticed that Craigslist's website looks a little bit... messy? Perhaps, cluttered and old-looking too? Well, as a UI/UX designer student, I was assigned to give Craigslist a whole new look. The project required that we completely redesign Craigslist and give it an entirely new user interface and a much better user experience.</p>
        <p className='uiprojecttext'>We noticed that the orignal Craigslist lacks a lot of white space, the links and text are all cluttered together, and the interface is not as intuitive as it could be. With our redesign, we made use of lots of white space, more visuals, more color, and bigger font. For a better UX, we gave the new Craigslist some better functionalities. For instance, we added a clear and easy-to-use filter and some drop-downs from the header menu.</p>

        <h2 className='uisubtitle'>ROLES</h2>
        <p className='uiprojecttext'>This was created with a team of four members, including myself. The team consisted of one designer/front-end developer, one front-end developer, a full-stack developer for the back-end, and one designer, myself. I was responsible for the majority of the design of this web application. I created about 90% of the high-fidelity mockups which included both mobile and desktop versions.</p>

        <h2 className='uisubtitle'>PROTOTYPES</h2>
        <p className='uiprojecttext'>The prototypes of this app are available for you to check out below for desktop and mobile.</p>


        <div className='uibuttonflex'>
            <div className='uibutton'>
                <Button text='MOBILE PROTOTYPE' externallink={"https://xd.adobe.com/view/b4cb4a2b-74c9-42d6-8a9c-35e4b8345d7e-e198/?fullscreen"}/>
            </div>

            <div className='uibutton'>
                <Button text='DESKTOP PROTOTYPE' externallink={"https://xd.adobe.com/view/68a6fd50-d9a4-4b03-b4aa-ac426d8ea144-3df5/?fullscreen"} />
            </div>
        </div>

    </div>




    <NextLink className='scroll' href="/ui-ux-design#ddcont">
        <div className='downarrowcont'>
            <img className='downarrow' src='/downarrow.svg'></img>
        </div>
    </NextLink>







    {/* DAIRY DELIGHT */}


    <div id='ddcont'>
        <h1 className='earthherotitle'>DAIRY DELIGHT</h1>
    </div>

        <div className='flexearthhero'>
            <div className="ddgallery">
                {/* <img className='EHimg' src='/placeholder.png'></img> */}
                <Slider 
                    speed={1000}
                    slidesToScroll={1}
                    slidestoShow={1}
                    infinite={false}
                    dots={true}
                    >

                    <img src='/ddgallery.png' />
                    <img src='/ddgallery2.png' />
                    <img src='/ddgallery3.png' />
                </Slider>
            </div>
        </div>


        <div className='downloadsflex'>
            <div className='uidownloads'>
                
                    <h4>The PDFs of Dairy Delight's style guide and wireframes are available here:</h4>
                

                <div className="flexbuttons">
                    
                    <Button text="STYLE GUIDE" externallink={"https://drive.google.com/file/d/1GXxWpWGI94Mkb2Iux1WnP2hIhy1nUsdc/view?usp=sharing"}/>
                    <Button text="WIREFRAMES" externallink={"https://drive.google.com/file/d/1Lyjo9UaNr1XzoouNLnfp_UfGkVwZRLRx/view?usp=sharing"}/>

                </div>
            </div>
        </div>



    <div className='uiprojectinfo'>

        <h2 className='overview'>OVERVIEW</h2>
        <p className='uiprojecttext'>Dairy Delight is a faux small ice cream business that sells ice cream, milkshakes, and cakes made with natural ingredients. They also offer an online delivery service providing tubs of ice cream on their website.</p>
        <p className='uiprojecttext'>The purpose of this project was to come up with any type of small business and give it branding and a website. This site was not developed, it was only made into a high-fidelity mockup.</p>

        <h2 className='uisubtitle'>ROLES</h2>
        <p className='uiprojecttext'>This project was completed by a team of two members, including myself. Since this project was solely design-focused, the design was split evenly between my team member and I. I was responsible for designing the Home page, the Menu page, and the Ice Cream Menu page. I also created the header and footer for this mockup.</p>

        <h2 className='uisubtitle'>PROTOTYPE</h2>
        <p className='uiprojecttext'>Click below to try out the desktop prototype of Dairy Delight!</p>


            <div className='uibutton'>
                <Button text='SEE PROTOTYPE' externallink={"https://xd.adobe.com/view/e920124e-9f4e-4bfa-ae13-5ab5774b44b8-bc73/?fullscreen"} />
            </div>
        

    </div>



    <div>
        <Footer />
    </div>



    </div>
}