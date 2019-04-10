import React, { Component } from 'react'

// this component represents a grid square with a color

// create a class which is a child of another class (Component)
class GridSquare extends Component {
    // render method to return elements
    render() {

        // initialize a variable that generates a class name based on the color property
        const classes = `grid-square color-${this.props.color}`

        // creates a division of content with an appropiate class name
        return <div className={classes} />
    }
}

// export function to be used by other parts of the program
export default GridSquare