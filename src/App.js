import { Link, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catering">Catering Info</Link>
          <Link to="/menu">Menu</Link>
          <img src="losCarnalesLogoFINAL.jpeg"alt="this is the food truck logo"className="bigLogo"/>
        </nav>
      </header>
      <Routes>
      <Route
        path="/"
        element={
          <div>
            <div className='middleHome'>
              <div className='middleLeftHome'>
                <h2>Located at</h2>
                  <p>915 W Red Cliffs Dr, Washington, UT 84780</p>
                  <p>
                    Mon 10am-6pm <br/>
                    Tue 10am-6pm <br/>
                    Thu 10am-6pm <br/>
                    Fri 10am-6pm <br/>
                    Sat 10am-6pm <br/>
                  </p>
              </div>
              <div className='middleRightHome'>
                <h2>About Us</h2>
                <p>
                  Get ready for some authentic Mexican food! Established by two brothers
                  who have worked in the restaurant industry for over 20+ years! Follow
                  Carmelo and Floriberto Gatica on this new and exciting venture!!!
                </p>
              </div>
            </div> 
              <a href="https://www.instagram.com/los.carnales_foodtruck/">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/02/Emblem-Instagram-500x500.jpg" 
                  alt="Instagram"
                />
              </a>
              <a href="https://www.facebook.com/loscarnales.ut">
                <img
                  src="https://logowik.com/content/uploads/images/324_facebookicon.jpg" 
                  alt="Facebook"
                />
              </a>
          </div>
        }
      />
        <Route path="/catering" element={<div>At the moment the only way to schedule for catering is emailing ('the email is going to be here') or you can call or text (phone number here) you can also reach out to us on our social media</div>} />
        <Route path="/menu" element={
          <div>
            <h1>Menu</h1>
              <div className='meats'>
                <h2>Meats</h2>
                  <p>Carne Asada</p>
                  <p>Chorizo</p>
                  <p>Pollo</p>
                  <p>Pastor</p>
                  <p>Cabeza</p>
                  <p>Birria (only on weekends)</p>
              </div>
              <div className='foodOptions'>
                <h2>Entree</h2>
                <p>Tacos</p>
                <p>Tortas</p>
                <p>Burritos</p>
                <p>Quesadillas</p>
                <p>Quesabirrias</p>
              </div>
              <div className='drinks'>
                <h2>Drinks</h2>
                <p></p>
                <p></p>
              </div>
          </div>
        } />
      </Routes>
    
    </div>
  );
}

export default App;
