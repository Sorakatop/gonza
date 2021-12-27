import React, { useContext, useRef,useState } from 'react'
import './contact.css'
//service email
import emailjs from 'emailjs-com';
//lottie
import Lottie from 'react-lottie'
import Phone from '../assets/lotties/67760-phone.json'
import Email from '../assets/lotties/18781-email-sent-by-todd-rocheford.json'
import Address from '../assets/lotties/86541-location-marked.json'
import Ok from '../assets/lotties/30816-mail-send-animation.json'
//darkMode
import { ThemeContext } from '../../context';

//cfg lottie animations
const defaultOptions = {
    loop:true,
    autoplay:true,
    rendererSettings: {
        preserveAspectRatio: 'xMinYMin slice'
    },
    margin:0
    
}

const animationStyle = {
    display: "inline-block",
    margin:0,
    border: "none",
    width:50,
    height:50,
    backgroundColor:'transparent'
    };

    const ok = {
        display: "inline-block",      
        border: "none",
        margin:10,
        width:200,
        height:200
        };

const Contact = () => {
    const formRef= useRef()
    const [done,setDone]= useState(false)
    const [ error, setErrors ] = useState(false)
    const [inputs, setInputs] = useState({
        name:'',
        lastName:'',
        email:'',
        message:''
    })   
    const handleChange = e => {
        //llamar al segundo valor de useState
        setInputs({
             ...inputs, //copiamos el objeto
             [e.target.name]: e.target.value  // y sobrescribimos la copia
         })
     }
    const {name,lastName,email,message} = inputs
    //dark mode
    const theme= useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
       
        if(name.trim()===''||lastName.trim()===''||email.trim()===''||message.trim()===''){
            setErrors(true)
            console.log('asd');
            console.log(formRef)
            return
            
        }
       
        setErrors(false)
        
        emailjs.sendForm(
            'service_dd04zmq', 
            'template_02t5252', 
            formRef.current, 'user_hpaPOW2KgFUKLfdukRwqw'
            )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        
    }



    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contacto</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <Lottie 
                            options={{animationData:Phone, ...defaultOptions}}
                            style={animationStyle}
                             className="icon"
                            />
                            <a href="https://wa.me/5492612753077" target="_blank" rel='noreferrer' >Whatsapp</a>
                        </div>
                        <div className="c-info-item">
                            <Lottie 
                            options={{animationData:Email, ...defaultOptions}}
                             style={animationStyle}
                             className="icon"
                            />                            
                             <a id='contact' href="mailto:alcocergonzalomatias@gmail.com">Contactame</a>
                        </div>
                        <div className="c-info-item">
                            <Lottie 
                            options={{animationData:Address, ...defaultOptions}}
                            style={animationStyle} 
                             className="icon"
                            />
                            <p>Mendoza-Argentina</p>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Tienes alguna propuesta?</b> Enviame un email, hablemos de tu idea,proyecto o propuesta🐱‍🐉
                    </p>
                    <form ref= {formRef} onSubmit={handleSubmit} id='contact'>
                        <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Nombre" name='name' onChange={handleChange}/>
                        <input style={{backgroundColor : darkMode && "#333"}} type="text" placeholder="Asunto" name='lastName'  onChange={handleChange} />
                        <input style={{backgroundColor : darkMode && "#333"}} type="email" placeholder="Tucorreo@dominio.com" name='email' onChange={handleChange} />
                        <textarea style={{backgroundColor : darkMode && "#333"}} rows="5" placeholder="Mensaje" name="message" onChange={handleChange} /><br></br>
                        <button type="submit">Enviar</button>
                        {done &&
                        <div className="c-ok">
                         <Lottie 
                            options={{animationData:Ok, ...defaultOptions}}
                            style={ok}
                             className="icon"
                            />  <p>Gracias por contactarte...</p>
                        </div>}
                        <div>
                        {error?<p className='alerta-error'>Todos los campos son obligatorios</p>: null}
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
