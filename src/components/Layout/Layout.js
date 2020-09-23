/* eslint-disable no-unused-vars */

import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.module.css';

const layout = (props) => (
    <Auxi>
        <div>
            <p>Toolbar, SideDrawer, BackDrop</p>
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>
);

export default layout;