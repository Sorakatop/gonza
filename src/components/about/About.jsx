import React from 'react'
import './about.css'
import Idea from '../../../src/img/idea.jpg'
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img src={Idea} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-tittle">
                    Acerca de mi
                </h1>
                <p className="a-sub">
                    Desarrollador web. Egresado de Digital House, incursionando en el mundo it, creador de e-comerces. Mira mis proyectos mas abajo
                </p>
                <p className="a-desc">
                    Creando aplicaciones con React JS, Experiencia en NODEJS con Express y mySQL. El box de  consultas y sugerencia siempre estan para realizar tu idea.
                </p>
                <div className="animation">
                    <div className="animation-file ">
                    <lottie-player className='' src="https://assets4.lottiefiles.com/packages/lf20_la84wwuu.json"  speed="1"  loop  autoplay></lottie-player>
                    </div>               
                <div className="a-animation-text">
                    <h4 className="a-animation-tittle">
                        Diseño responsivo
                    </h4>
                    <p className="a-animation-desc">
                        El diseño se adapta a cualquier dispositivo actual, sin la necesidad de invertir tiempo ni espacio en la web.
                    </p>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default About
