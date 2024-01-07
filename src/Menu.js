import React from "react";
import './index.css';

function Menu() {
    return(
        <div>
              <div className='proteins'>
                <h2>Proteins</h2>
                  <p>Carne Asada,Chorizo,Pollo,Pastor,Cabeza</p>
              </div>
              <div className='foodOptions'>
                <h2>Entrees</h2>
                <p>Tacos</p>
                <p>Tortas</p>
                <p>Burritos</p>
                <p>Quesadillas</p>
                <p>Quesabirrias(only on weekends)</p>
              </div>
              <div className='drinks'>
                <h2>Drinks</h2>
                <p></p>
                <p></p>
              </div>
          </div>
    )
}

export default Menu;