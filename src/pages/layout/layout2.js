import React from 'react'
import styled from 'styled-components'

import Image from '../../nature-design.jpg'

const Imaged = styled.img`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:75%;
    box-shadow: 0 0 8px 8px white inset;
`;
const Container =styled.div`
    background:#a8c1ff;
`;

const Layout2 = () => {
    return (
        <Container>
            <Imaged src={Image} />
        </Container>
    )
}

export default Layout2;