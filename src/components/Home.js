import React from 'react'
import slider1 from '../media/slider-1.png'
import '../Styles/Homepage.css'
function Home() {
  return (
    <div>
      <div className="home">
        {/* left section start */}
        <div className="left">
          <p>New Products</p>
          <h1>Flexible Chair</h1>
          <h2>
            We are having the best furnitures in the marke
            <br></br>We supply Products over 30+ countries
          </h2>
          <button>Check Now</button>
        </div>
        {/* left section end */}
        {/* right section start */}
        <div className="right">
          <img src={slider1} alt="img" />
        </div>
        {/* right section end */}
      </div>
     
    </div>
  )
}

export default Home