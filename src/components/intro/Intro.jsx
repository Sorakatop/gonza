import React from 'react'
/* import Me from '../../../src/img/morfeo.gif' */
//lottie
import Lottie from 'react-lottie'
import Me from '../assets/lotties/82423-developer-yoga.json'
import "./intro.css"
//cfg lottie animations
const defaultOptions = {
  loop:true,
  autoplay:true,
  rendererSettings: {
      preserveAspectRatio: 'xMinYMin slice'
  },
  
}

const animationStyle = {
  margin:0,
  border: "none",
  width:300,
  height:300,
  };


const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro"> Bienvenidos, mi nombre es </h2>
                    <h1 className="i-name">Gonzalo Alcocer</h1>
                    <div className="i-tittle">
                        <div className="i-tittle-wrapper">
                            <div className="i-tittle-item"> Front-end Developer</div>
                            <div className="i-tittle-item"> UI/UX designer</div>
                            <div className="i-tittle-item"> Back-end Developer</div>
                            <div className="i-tittle-item"> Technical Support</div>
                            <div className="i-tittle-item"> </div>
                        </div>
                    </div>
                    <div className="i-description">
                        <p>Apasionado desarrollador web full stack. Creador del e-comerce Barbershop. Una idea ?  <a  href="#contact">Contactame</a> 😉</p>
                    </div>
                </div>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <div className="i-animation-container">
                <Lottie 
                 options={{animationData:Me, ...defaultOptions}}
                  style={{animationStyle}}
                  className="i-animation"           
                 />
                </div>
                
                
            </div>
        </div>
    )
}

export default Intro
