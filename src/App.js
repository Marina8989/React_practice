import React, {useState} from 'react';
import styled from 'styled-components';

const layoutSetup = [
    {
        id: `${Math.random()}-${Math.random()}`,
        elementType: "div",
        className: "row",
        parentCSS: {
            width: "100%",
            height: "50px",
            background: "cyan",
            "margin-bottom": "20px",
            display: "flex"
        },
        children: [
            {
              elementType: "div",
              className: "box",
              childCSS: {
                  width: "50px",
                  height: "50px",
                  background: "purple",
                  margin: "0 20px"
              }
            },
            {
            elementType: "div",
            className: "box",
            childCSS: {
              width: "50px",
              height: "50px",
              background: "purple",
              margin: "0 20px"
             }
            },
            {
            elementType: "div",
            className: "box",
            childCSS: {
              width: "50px",
              height: "50px",
              background: "purple",
              margin: "0 20px"
             }
            }
        ]
    },
    {
        id: `${Math.random()}-${Math.random()}`,
        elementType: "div",
        className: "row",
        parentCSS: {
            width: "100%",
            height: "50px",
            background: "cyan",
            "margin-bottom": "20px",
            display: "flex"
        },
        children: [
            {
                elementType: "div",
                className: "box",
                childCSS: {
                   width: "50px",
                   height: "50px",
                   background: "purple",
                   margin: "0 20px"
                }
            },
            {
                elementType: "div",
                className: "box",
                childCSS: {
                    width: "50px",
                    height: "50px",
                    background: "purple",
                    margin: "0 20px"
                }
            },
            {
                elementType: "div",
                className: "box",
                childCSS: {
                    width: "50px",
                    height: "50px",
                    background: "purple",
                    margin: "0 20px"
                }
            }
        ]
    }
]

class App extends React.Component{
    render(){
        return(
            <h3>test</h3>
        )
    }
}

export default App 