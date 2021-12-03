import React, {useState} from 'react';
import styled from "styled-components";
import Box from "../Box";
import css from "../../css.json";

const [flexProperties] = css;

const ParentRow = styled.div``;
const Modal = styled.div`
   width: 500px;
   height: 500px;
   position: fixed;
   z-index: 9999;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background: rgba(255, 255, 255, 0.75);
`

const Row = ({row, handleParentCSS}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleClick = () => setShowModal(!showModal);

    const handlePropertyChange = (e) => {
     setSelectedProperty(
         flexProperties.properties.find((prop) => prop.type === e.target.value)
     )
    }

    const handleValueChange = (e) => {
       handleParentCSS({[selectedProperty.type]: e.target.value}, row);
    }

    return(
        <div>
            <div>
                <button onClick={handleClick}>Settings</button>
            </div>
            <ParentRow style={row.parentCSS}>
                {row.children.map((child) => (
                    <Box child={child} />
                ))}
            </ParentRow>
            {showModal && (
                <Modal>
                    <div>
                        <ul>
                            {Object.entries(row.parentCSS).map(([key, value]) => {
                                const foundValue = flexProperties.properties.find(
                                    (prop) => prop.type === key
                                );
                                console.log(foundValue, value);

                                return (
                                    <li>
                                        <span>{key}</span>:
                                        <span>
                                            {foundValue ? (
                                                <select>
                                                    {foundValue.values.map((val) => (
                                                        <option value={val}>{val}</option>
                                                    ))}
                                                </select>
                                            ) : (
                                                value
                                            )}
                                        </span>
                                    </li>
                                )
                            })}
                            <li>
                                <span>
                                    <select onChange={handlePropertyChange}>
                                        {flexProperties.properties.map((prop) => (
                                            <option value={prop.type}>{prop.type}</option>
                                        ))}
                                    </select>
                                </span>
                                <span>
                                    {selectedProperty && (
                                        <select onChange={handleValueChange}>{selectedProperty.values.map((val) => (
                                            <option value={val}>{val}</option>
                                        ))}</select>
                                    )}
                                </span>
                            </li>
                        </ul>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default Row;