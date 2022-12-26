import { NavLink } from "react-router-dom"
import Card from "../UI/Card"
import React, {useState, useEffect} from "react"
import { FaSun} from "react-icons/fa";
import classes from './CurrentTime.module.css';


const CurrentTime = (props) => {    
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);


    return <NavLink to='/daily'>

        <Card>
            <div className="card">
            <div className="currentWeather">
                <h2>Trenutno Vrijeme</h2>
                <p>{dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}</p>

            <div className={classes.temp}>
            <h3><FaSun style={{color: 'orange', fontSize: '80px', paddingTop: '20px', marginRight: '30px' }}></FaSun></h3>
            <div className={classes.tempBox}>
                13°
                <span>C</span>
            <div className={classes.realFeel}>Real Feel 15° C</div>
            </div>
            </div>
            </div>
            <div></div>
            </div>
        </Card>
    
        </NavLink>

}


export default CurrentTime;