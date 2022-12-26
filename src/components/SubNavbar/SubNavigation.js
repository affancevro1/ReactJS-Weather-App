import React from "react";
import { NavLink} from "react-router-dom";
import classes from './SubNavigation.module.css'


const SubNavigation = (props) => {



    return <React.Fragment>
            
            <div className={classes.app}>
        <div className={classes.nav}>
          <NavLink
            to="daily"
            activeClassName={classes.active}
          >
            DAILY
          </NavLink>
          <NavLink
            to="hourly"
            activeClassName={classes.active}
          >
           HOURLY
          </NavLink>
          <NavLink
            to="today"
            activeClassName={classes.active}
          >
          TODAY
          </NavLink>
          <NavLink
            to="radar"
            activeClassName={classes.active}
          >
            RADAR
          </NavLink>
          <NavLink
            to="minutecast"
            activeClassName={classes.active}
          >
           MINUTECAST
          </NavLink>
          <NavLink
            to="monthly"
            activeClassName={classes.active}
          >
           MONTHLY
          </NavLink>
        </div>
        </div>
        </React.Fragment>

}

export default SubNavigation;