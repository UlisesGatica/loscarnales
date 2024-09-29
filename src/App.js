import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Menu from './Menu'
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
        <div className="linkContainer">
          <Link to="/"style={{ textDecoration: 'none', color:'black' }}>Home</Link>
          <Link to="/menu"style={{ textDecoration: 'none', color:'black' }}>Menu</Link>
        </div>
          <img src="https://i.imgur.com/mPHoDIx.jpg"alt="this is the food truck logo"className="bigLogo"/>
        </nav>
      </header>
      <Routes>
      <Route path="/" element={
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
                <h2>Catering</h2>
                <p>
                For catering information and scheduling please contact us at loscarnalesut@gmail.com or you can call or text (435)-229-4272 or (435)-256-7827 you can also reach out to us on our social media
                </p>
              </div>
            </div> 
          </div>
        }
      />
        <Route path="/menu" element={<Menu/> } />
       </Routes>
       <footer style={{
        display: 'flex',
        justifyContent: 'flex-end', 
        alignItems: 'center',
        padding: '10px 20px',
      }}>
  <a href="https://www.instagram.com/los.carnales_foodtruck/">
    <img
      src="https://i.imgur.com/yGCxHPk.jpeg"
      alt="Instagram"
      style={{ width: '70px', height: '63px', margin: '0 8px', borderRadius: '25%' }}
    />
  </a>
  <a href="https://www.facebook.com/loscarnales.ut">
    <img
      src="https://i.imgur.com/CdMjkcs.jpeg"
      alt="Facebook"
      style={{ width: '70px', height: '63px', margin: '0 8px', borderRadius: '25%' }}
    />
  </a>
  <a href="https://www.yelp.com/biz/los-carnales-mexican-food-st-george">
    <img
      src="https://i.imgur.com/P8hi2TU.jpeg"
      alt="Yelp"
      style={{ width: '70px', height: '63px', margin: '0 8px', borderRadius: '25%' }}
    />
  </a>
</footer>
    </div>
  );
}

export default App;
