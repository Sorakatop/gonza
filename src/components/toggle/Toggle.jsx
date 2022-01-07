import './toggle.css'
//imagenes to do : usar lottie interactivo
/* import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png' */
//hooks
import { useContext } from 'react'
import { ThemeContext } from '../../context'
/* import darkMode from '../assets/lotties/47047-dark-mode-button.json'  */


const Toggle = () => {
    const theme = useContext(ThemeContext)
    
    const handleClick = ()=>{
        theme.dispatch({type:'TOGGLE'});
    };

    return (
        <div className="t">
            <lottie-interactive
              path="/animations/fast.json"
              interaction='switch'
              onClick = {handleClick}   
              className="t-icon"
          />
            {/* <img src={Sun} alt=''
            className="t-icon"/>
             <img src={Moon} alt=''
            className="t-icon"/> */}
            {/* <div className="t-button" 
            onClick = {handleClick}
            style={{ left: theme.state.darkMode ? 0 : 25}}
            ></div> */}
        </div>
    )
}

export default Toggle
