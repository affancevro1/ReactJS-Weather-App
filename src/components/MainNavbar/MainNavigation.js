import React from "react";
import ImageLogo from "../../UI/Logo";
import Search from "../../UI/Search";
import classes from '../MainNavbar/MainNavigation.module.css'
const MainNavigation = (props) =>{
    
    return <React.Fragment>
        <div className={classes.header}>
        <div className={classes.items}>
        <ImageLogo></ImageLogo>
        <p>Sarajevo, Federacija Bosne i Hercegovine</p>
        <Search></Search>
        </div>
        </div>
        
        

    </React.Fragment>

}


export default MainNavigation;