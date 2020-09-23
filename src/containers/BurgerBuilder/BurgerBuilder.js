/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
class burgerbuilder extends Component {
    render() {
        return (
            <Auxi>
                <div>
                    <Burger />
                    <p>Builder Controls</p>
                </div>
            </Auxi>
        );
    }
}

export default burgerbuilder;