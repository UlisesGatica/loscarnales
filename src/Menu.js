import React from "react";
import './index.css';

function Menu() {
    return (
        <div>
            <div className='midMenu'>
                <div className='proteins'>
                    <h2>Proteins</h2>
                    <div className='protein'>
                        <p>Carne, </p>
                        <p>Asada,</p>
                        <p>Chorizo,</p>
                        <p>Pollo,</p>
                        <p>Pastor,</p>
                        <p>Cabeza</p>
                    </div>
                </div>
                <div className='drinks'>
                    <h2>Drinks</h2>
                    <div className='drink'>
                        <p>Water,</p>
                        <p>Cocacola,</p>
                        <p>Fanta,</p>
                        <p>Jarritos,</p>
                        <p>Horchata,</p>
                        <p>Jamaica</p>
                    </div>
                </div>
            </div>
            <div className='foodOptions'>
                <h2>Entrees</h2>
                <div className='entreeBox'>
                    <div className='tacos'>
                        <h3>Tacos</h3>
                        <div className="entreeContent">
                            <p>This is going to have a description of the food and let customers know what the food is</p>
                            <img src='https://scontent.fslc3-1.fna.fbcdn.net/v/t39.30808-6/420115812_399190482593728_4766117736295239001_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=KM-K-jHs8KkAX8G2k9U&_nc_ht=scontent.fslc3-1.fna&oh=00_AfA9jA00QuMREppsqwhEECogBo4NsJO9z8m61eZxUvnqJw&oe=65BBA9B1' alt='this is a photo of a taco' />
                        </div>
                    </div>
                    <div className='tortas'>
                        <h3>Tortas</h3>
                        <div className="entreeContent">
                            <p>This is going to have a description of the food and let customers know what the food is</p>
                            <img src='https://scontent.fslc3-2.fna.fbcdn.net/v/t39.30808-6/420097052_399190595927050_6908695582551882246_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=BNAZbqJaOGEAX-2-SHR&_nc_ht=scontent.fslc3-2.fna&oh=00_AfAEvxkoxwqcaVdajuUXE9ff2QF3apgQNbaFG5rxxFBYYw&oe=65BB6DA5' alt='this is a photo of a torta' />
                        </div>
                    </div>
                </div>
                <div className='entreeBox'>
                    <div className='burritos'>
                        <h3>Burritos</h3>
                        <div className="entreeContent">
                            <p>This is going to have a description of the food and let customers know what the food is</p>
                            <img src='https://scontent.fslc3-2.fna.fbcdn.net/v/t39.30808-6/421915452_399190459260397_6810761490390053452_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=9k3ycGOZbA8AX-90Ftm&_nc_ht=scontent.fslc3-2.fna&oh=00_AfAi1TrjUchNajMdVMhX_Bv5c_uBaHM8HLAhms1GDIuwNw&oe=65BB4AD6' alt='this is a photo of a burrito' />
                        </div>
                    </div>
                    <div className='quesadillas'>
                        <h3>Quesadillas</h3>
                        <div className="entreeContent">
                            <p>This is going to have a description of the food and let customers know what the food is</p>
                            <img src='https://scontent.fslc3-2.fna.fbcdn.net/v/t39.30808-6/421854618_399190615927048_255275936670233132_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Kr3eLmsJVjQAX9-wuev&_nc_ht=scontent.fslc3-2.fna&oh=00_AfCh0r9bhbqcqTACNstOMXlTD7POydbwSoKSuGhcHDULkw&oe=65BCCFD1' />
                        </div>
                    </div>
                </div>
                 <div className='entreeBox'>  
                    <div className='quesabirrias'>
                        <h3>Quesabirrias(only on weekends)</h3>
                        <div className="entreeContent">
                            <p>This is going to have a description of the food and let customers know what the food is</p>
                            <img src='https://scontent.fslc3-1.fna.fbcdn.net/v/t39.30808-6/421853816_399190645927045_3931350396436079107_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=UZjBPyblmHwAX9Oj1SJ&_nc_ht=scontent.fslc3-1.fna&oh=00_AfDqUzRPHvUhUcXmHFOua4YfUflNYI6kR-bd9wBq8ANUkw&oe=65BBFAC7' alt='this is a photo of a quesabirrias' />
                        </div>
                    </div>
                 </div>   
            </div>
        </div>
    );
}

export default Menu;
