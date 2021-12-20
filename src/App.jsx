import { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
//lottie
import Lottie from 'react-lottie'

const App = () => {
  
  const theme= useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return(
   <div
   style={{
   backgroundColor: darkMode? '#222' : 'white' ,
    transition: 'all 0.5s',
    transitionTimingFunction:'ease',
    color: darkMode &&'white'
  }}
    >
    <Toggle/>
    <Intro/>    
    <About/>
    <ProductList/>
    <Contact/>    
    
  </div>
  );
};

export default App;