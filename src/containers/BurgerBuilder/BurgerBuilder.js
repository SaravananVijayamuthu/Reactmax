/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 
class burgerbuilder extends Component {
    //Even u can follow this method
    // constructor(props) {
    //     super (props);
    //     this.state = {...}
    // }

    //modern way 
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            bacon: 1,
            meat: 2
        }
    };
    render() {
        return (
            <Auxi>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls />
                </div>
            </Auxi>
        );
    }
}

export default burgerbuilder;