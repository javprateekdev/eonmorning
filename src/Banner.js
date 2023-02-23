import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from './pics/pic1.webp'
import EnquireNowdialog from './EnquireNowdialog'
const Banner = () => {
  return (
    <div className='banner' id='banner' >
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/l9XCkyq.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <div style={{ background: 'rgba(0, 0, 0, 0.4)',height:"100%",width:"100%",position:"relative"}}>
          <h6 style={{color:"white",fontWeight:"600",fontFamily:"poppins"}} className='bannerfontup'>EON IT Park: The Ideal Location for IT Companies in Noida</h6>
          <p  className='bannerfontdown'>Premium Office | Retail Space | Studio Apartments</p>
          

          </div>
          <button className='bannerbutton' ><EnquireNowdialog/></button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/2FZaYr8.jpg"
          alt="Second slide"
          style={{height:"100%"}}
        />

        <Carousel.Caption>
        <div style={{ background: 'rgba(0, 0, 0, 0.4)',height:"100%",width:"100%",position:"relative"}}>
          <h6 style={{color:"white",fontSize:"0.6 rem",fontWeight:"600",fontFamily:"poppins"}} className='bannerfontup'>Experience Modern Office Space In Noida's Most Sought Location</h6>
          <p  className='bannerfontdown'>Luxury Office Spaces @ ₹4199/Sq.Ft</p>
          

          </div>
          <button className='bannerbutton' ><EnquireNowdialog/></button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/l9XCkyq.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div style={{ background: 'rgba(0, 0, 0, 0.4)',height:"100%",width:"100%",position:"relative"}}>
          <h6 style={{color:"white",fontSize:"0.6 rem",fontWeight:"600",fontFamily:"poppins"}} className='bannerfontup'>Invest in a world of great Experience and Great Possibilities</h6>
          <p className='bannerfontdown'>Luxury Retail Spaces @ ₹16000/Sq.Ft</p>
          

          </div>
          <button className='bannerbutton' ><EnquireNowdialog/></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner