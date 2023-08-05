import React from 'react';
import './../styles/home.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button,Carousel} from 'react-bootstrap';
import {HiArrowCircleLeft,HiArrowCircleRight} from 'react-icons/hi';
import Cardcarousel from './../components/card';




function Home() {
  return (
    <div className="main-div d-flex flex-column justify-content-center align-items-center align-content-center">

      {/* flash container */}
      <div className="flash-page container-fluid">

        <h1 className="" style={{ color: "#004577", fontSize: "64px", fontWeight: '700' }}>
          Dare to live{" "}
          <span style={{ fontFamily: "Barlow", color: "#DB163A", fontWeight: '800' }}>
            the life
          </span>{" "}
          <br /> you've always <br />{" "}
          <span style={{ fontFamily: "Barlow", color: "#DB163A", fontWeight: '800' }}>
            wanted.
          </span>
        </h1>
        <p className="" style={{ fontSize: "25px", fontWeight: "600" }}>
          Life is short and the world is wide. So, better get started.
        </p>
        <Button
          className="explore-btn"
          variant="primary"
          size="lg"
          style={{
            backgroundColor: "#DB163A",
            border: "none",
            padding: "15px",
            fontSize: "17px",
          }}
        >
          Let's Explore
        </Button>

      </div>


      {/* Package container */}
      <div className="package-container container-fluid d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"#f7f7f7"}}>
        
        <div className="text-cotent container d-flex flex-column flex-md-column justify-content-lg-between justify-content-md-between justify-content-xs-between   flex-sm-column gap-2 mt-4">
          <div className='container d-flex flex-row align-items-center align-content-center justify-content-between'>
            <p className='home-paragraph' style={{color:"#DB163A", fontWeight:"600", fontSize:"1.5rem", margin:"0px"}}>TOUR PACKAGES</p>
            <div className="arrow-icons">
              <HiArrowCircleLeft className='arrow-left' color="#DB163A" size="3rem"/>
              <HiArrowCircleRight className='arrow-right' color="#DB163A" size="3rem"/>
            </div>
          </div>

          <div className="heading-topic">
            <h1 className='p-2 pt-0 ' style={{color:"#004577", fontWeight:"700", fontSize:"3rem", margin:"0px"}}>The amazing places in 
                <span style={{ fontFamily: "Barlow", color: "#DB163A" }}> <br /> Sri Lanka</span>
            </h1>
          </div>  
        </div>

        <div className="carousel-div w-100" style={{marginBottom:"3rem", marginTop:"3rem"}}>
          <Carousel>
            <Carousel.Item>
                <div className='d-flex flex-row justify-content-center'>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
              </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='d-flex flex-row justify-content-center'>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
                <div className='d-flex flex-row justify-content-center'>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>

      {/* Blog container */}
      <div className="blog-container container-fluid d-flex flex-column align-items-center">
          
          <div className="text-cotent pt-5 container d-flex flex-column justify-content-center gap-2 mt-4 align-items-center align-content-center">
            
              <p style={{color:"#DB163A", fontWeight:"600", fontSize:"1.5rem", margin:"0px"}}>TESTIMONIAL</p>
              <h1 className='p-2 pt-0' style={{color:"#004577", fontWeight:"700", fontSize:"3rem", margin:"0px", textAlign:"center"}}>Our satisfies 
                  <span style={{ fontFamily: "Barlow", color: "#DB163A" }}> travellers</span> around <br /> the world
              </h1>
           
          </div>

          <div className="carousel-div w-100" style={{marginBottom:"3rem", marginTop:"1rem"}}>
          <Carousel>
            <Carousel.Item>
                <div className='d-flex flex-row justify-content-center'>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
              </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className='d-flex flex-row justify-content-center'>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
              </div>
            </Carousel.Item>
            
            <Carousel.Item>
                <div className='d-flex flex-row justify-content-center'>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
                <div style={{width:"3.5rem"}}></div>
                <Cardcarousel />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>


      {/* bottom-container */}
      <div className="package-container container-fluid d-flex flex-column justify-content-center align-items-center" style={{backgroundColor:"#f7f7f7"}}>
        
        <div className="text-cotent pt-5 container d-flex flex-column justify-content-center gap-2 mt-4 align-items-center align-content-center">
            
            <h1 className='p-2 pt-0' style={{color:"#004577", fontWeight:"700", fontSize:"3rem", margin:"0px", textAlign:"center"}}>We can do anything we want to <br />  
              if <span style={{ fontFamily: "Barlow", color: "#DB163A" }}> we stick</span> to it long enough.
            </h1>
            <p className='pt-3' style={{fontSize:"1.5rem", fontWeight:"500", textAlign:"center  "}}>Do what you can, with what you have, where you are.</p>
        </div>
        <Button
          className="explore-btn mt-4"
          variant="primary"
          size="lg"
          style={{
            backgroundColor: "#DB163A",
            border: "none",
            padding: "15px 20px 15px 20px",
            fontSize: "18px",
            borderRadius:"2rem"
          }}
        >Explore places</Button>


      </div>


      
    </div>
  );
}

export default Home
