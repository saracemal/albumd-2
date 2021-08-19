import React from 'react'
import styled from 'styled-components';

//pick new font
function Info() {
    return (
        <Container>
            <h1>welcome to album'd</h1>
        </Container>
    )
}

export default Info;

const Container = styled.div`
    background: rgba( 126, 211, 33, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`


