import styled from "styled-components";

const ChildBox = styled.div``;

const Box = ({ child }) => <ChildBox style={child.childCSS}></ChildBox>;
export default Box;