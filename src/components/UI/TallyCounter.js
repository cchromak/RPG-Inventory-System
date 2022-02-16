import React, { useState } from 'react';

import campFire from '../../assets/campFire.svg';
import classes from './TallyCounter.Module.css';

const TallyCounter = props => {

    const [dayCount, setDayCount] = useState(0);
    const leftDayDigit = parseInt(dayCount / 10);
    const rightDayDigit = dayCount % 10;

    const onAddDay = () => {
        setDayCount(dayCount + 1);
    }

    return (
        <button className={classes.button} onClick={onAddDay}>
        <div className={classes.clock}>
            <span className={classes.digital}>{leftDayDigit}</span>
            <span className={classes.digital}>{rightDayDigit}</span>
        </div>
        <div className={classes.badge} >
            <img src={campFire} alt="camp fire"></img>
        </div>
        </button>
    )
}

export default TallyCounter;