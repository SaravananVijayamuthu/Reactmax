import classes from '*.module.sass';
/* eslint-disable no-unused-vars */
import React from 'react'
import classNames from './BuildControl.module.css';

const buildControl = (props) =>(
    <div className={classes.BuildControl}>
        <div className={classes.label}>
        {props.label}
        </div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;