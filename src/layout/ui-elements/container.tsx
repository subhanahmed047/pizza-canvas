import styled from 'styled-components';

const Container = styled.div<any>`
    display: flex;
    justify-content: ${props => props.justify && props.justify};
    flex-wrap: ${props => props.wrap && props.wrap};
    padding: ${props => props.padding && props.padding};
    background-color: ${props => props.backgroundColor && props.backgroundColor};
`;

export default Container;