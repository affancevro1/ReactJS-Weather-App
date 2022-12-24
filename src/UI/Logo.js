import Image from '../images/accuweather-dark.png'
import classes from './Logo.module.css'

const ImageLogo = () =>{

    return  <img src={Image} alt='logo' className={classes.logo}></img>
}


export default ImageLogo;