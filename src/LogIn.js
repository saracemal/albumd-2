import React from 'react';

const LogIn = () => {
    return (
        <Container>
            <H1>Log In</H1>
            <Inputs>
                <Label>e-mail</Label>
                <Input placeholder="example@gmail.com"
                        autocomplete="off"
                        id="email"
                        type="text" />

                <Label>password</Label>
                <Input id="password" 
                    type="password" />
            </Inputs>
            <div class="login-button">
                <Button>log in!</Button>
            </div>
        </Container>
    )
}

export default LogIn;

const Container = styled.div`
    background: rgba( 126, 211, 33, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5.0px );
    -webkit-backdrop-filter: blur( 5.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Label = styled.h1`
    position: absolute;
    color: green;
    filter: blur(20px)
`

const Label = styled.h3`
    display: block;
    padding-left: 8px;
    focus {
        opacity: 1;
    }
`

const Inputs = styled.div `
    margin-top: 10px;
`
const Input = styled.input`
   width: 100%;
   padding: 14px 20px;
   border: 0px;
   background: #F1F3F6;
   border-radius: 18px;
   border: 2px solid rgb(var(--color));
   transition: all .25s ease;
   opacity: .2;
   box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.24);

`

const Button = styled.button`
    background: rgb(var(--primary));
    color: #fff;
    border: 0px;
    padding: 14px 20px;
    border-radius: 18px;
    width: 100px;
    display: block;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all .25s ease;
`

