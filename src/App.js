import React, {useState} from 'react';
import styled from 'styled-components';
import Row from "./components/Row";

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
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
`
const CSSVisualiserContainer = styled.div`
  width: 70%;
  background: pink;
  padding: 20px;
  box-sizing: border-box;
`
const ParseOutputContainer = styled.div`
   width: 30%;
   background: salmon;
`
const Indent = styled.div`
  padding-left: ${(props) => props.indent && "20px"};
`
export default function App(){
    const [layout, setLayout] = useState(layoutSetup);

    const handleParentCSS = (entry, row) => {
        const newlayout = layoutSetup.map((currentLayout) => {
          if(currentLayout.id === row.id){
             return {
                 ...currentLayout,
                 parentCSS: {
                     ...row.parseCSS,
                     ...entry
                 }
             };
          }
          return currentLayout;
        })
        setLayout(newlayout)
    }

    const objectToHTML = () => {
        return layoutSetup.map((el) => {
            return(
                <div>
                    {`<${el.elementType} class="${el.className}">`}
                    {el.children.map((child) => (
                        <Indent indent>
                            {`<${child.elementType} class="${child.className}"></${child.elementType}>`}
                        </Indent>
                    ))}
                    {`</${el.elementType}`}
                </div>
            )
        })
    }
    console.log(objectToHTML)
    return(
        <Container>
            <CSSVisualiserContainer>
                <div>
                    {layout.map((row) => (
                        <Row handleParentCSS={handleParentCSS} row={row} />
                    ))}
                </div>
                <div>
                    <button>Add Row</button>
                </div>
            </CSSVisualiserContainer>
            <ParseOutputContainer>
                <div>{objectToHTML()}</div>
                <div></div>
            </ParseOutputContainer>
        </Container>
    )
    
}