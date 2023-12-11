import { Link, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/"style={{ textDecoration: 'none', color:'black' }}>Home</Link>
          <Link to="/catering"style={{ textDecoration: 'none', color:'black' }}>Catering Info</Link>
          <Link to="/menu"style={{ textDecoration: 'none', color:'black' }}>Menu</Link>
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
                <h2>Located at:</h2>
                  <a href="https://www.google.com/maps?q=915+W+Red+Cliffs+Dr,+Washington,+UT+84780"target="_blank"rel="noopener noreferrer">915 W Red Cliffs Dr, Washington, UT 84780</a>
                  <p>Mon 10am-6pm</p>
                  <p>Tue 10am-6pm </p>
                  <p>Thu 10am-6pm </p>
                  <p>Fri 10am-6pm </p>
                  <p>Sat 10am-6pm </p>
              </div>
              <div className='middleRightHome'>
                <h2>About Us</h2>
                <p>
                Welcome to our flavorful world at Los Carnales! Delight in the authentic taste of Mexico crafted by two brothers, Carmelo and Floriberto Gatica, seasoned veterans in the restaurant industry, with a combined experience of over 20+ years. Join us on this thrilling culinary journey as we bring our passion for Mexican cuisine to life!
                </p>
                <p>Indulge in a fiesta of flavors at Los Carnales where every dish tells a story steeped in tradition and culinary expertise. Carmelo and Floriberto Gatica's deep-rooted knowledge and dedication to creating an unforgettable dining experience shine through each delectable bite. Join us as we infuse every meal with the rich heritage and vibrant spirit of Mexico, inviting you to savor the true essence of our culture in every meticulously crafted dish.</p>
              </div>
            </div> 
            <footer>
              <a href="https://www.instagram.com/los.carnales_foodtruck/">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/02/Emblem-Instagram-500x500.jpg" 
                  alt="Instagram"
                  style={{ width: '25%',height:'25%' }}
                />
              </a>
              <a href="https://www.facebook.com/loscarnales.ut">
                <img
                  src="https://logowik.com/content/uploads/images/324_facebookicon.jpg" 
                  alt="Facebook"
                  style={{ width: '25%',height:'25%'}}
                />
              </a>
              <a href="https://www.yelp.com/biz/los-carnales-mexican-food-st-george">
                <img
                  src="https://logodix.com/logo/83953.png" 
                  alt="Yelp"
                  style={{ width: '25%',height:'25%'}}
                />
              </a>
             </footer>
          </div>

        }
      />
        <Route path="/catering" element={<div>At the moment the only way to schedule for catering is emailing ('the email is going to be here') or you can call or text (phone number here) you can also reach out to us on our social media</div>} />
        <Route path="/menu" element={
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
        } />
      </Routes>
    
    </div>
  );
}

export default App;
