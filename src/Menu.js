import React from "react";
import './index.css';

function Menu() {
    return(
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
                <p>Tacos</p>
                <p>Tortas</p>
                <p>Burritos</p>
                <p>Quesadillas</p>
                <p>Quesabirrias(only on weekends)</p>
              </div>
          </div>
    )
}

export default Menu;