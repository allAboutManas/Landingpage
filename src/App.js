
import './App.css';
import logo from "./Static/Group.png"
import star1 from "./Static/Star 1.png"

import blur from "./Static/Group 35930.png"
import ellipse from "./Static/Group 35887.png"
import banner from "./Static/Group 35924.png"
import phone1 from "./Static/iPhone-13-Pro-Front.png"
import phone2 from "./Static/iPhone-13-Pro-Front (1).png"
import phone3 from "./Static/iPhone-13-Pro-Front (2).png"
function App() {
  return (
    
      <>
        <div className='main'>
          {/* Nav Bar */}
          <div className="nva">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className='itmes'>
              <ul>
                <li style={{ color: "red" }}>Home</li>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Features</li>
              </ul>
            </div>
            <div>
              <button className='btn'>Download</button>
            </div>
          </div>
            <div className='starIcon1'>
              <img src={star1} alt="" />
            </div>
            <div className='starIcon2'>
              <img src={star1} alt="" />
            </div>
          <div className='container'>
            <div className='img'>
              <img src={blur} alt="" />
            </div>
            <div className='textCon'>
              <h1>Make The Best <br /> Financial Decision</h1>
              <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet <br />
                Fucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttior.</p>
              <div className='btnCon'>
                <button className='btn'>Get Started</button>
                <button className='btnIcon'><i class="fa-regular fa-circle-play"></i>watch Video</button>
              </div>
            </div>
          </div>
          <div className='container1'>
            <div className='starImg'>
              <img src={star1} alt="" />
            </div>
            <div className='banner'>
              <img src={banner} alt="" />
            </div>
          </div>
          <div className='container2'>
            <div className='blurImg'>
              <img src={blur} alt="" />
            </div>
            <div className='ellipse'>
              <img src={ellipse} alt="" />
            </div>
            <div className='iphone1'>
              <img src={phone1} alt="" />
            </div>
            <div className='iphone2'>
              <img src={phone2} alt="" />
            </div>
            <div className='iphone3'>
              <img src={phone3} alt="" />
            </div>
          </div>
        </div>
      </>
  
  );
}

export default App;
