import React from 'react';
import { Link } from 'react-router-dom'
import {Button, Form,Container, Row, Col, FormGroup} from 'react-bootstrap';

import Logo from '../../../assets/logo.png';
import {BoxContent, BoxForm} from './style'

// handleSignin = async (event) => {
//     event.prevetDefault();
// }

class SignIn extends React.Component {
    render() {
        return (
            <Container>
                <Row className='justify-content-md-center'>
                    <Col xs={12} md={5}>
                    <BoxContent>
                        <img src={Logo} alt='emailshimp'></img>
                    </BoxContent>
                    <BoxForm>
                    <h2>Login</h2>
                    <p>Informe seus dados para autenticar</p>
                    <Form>
                      <Form.Group controlId='emailGroup'>
                            <Form.Label>
                                E-Mail:
                            </Form.Label>
                            <Form.Control type='email' placeholder='Digite seu E-mail:'>

                            </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='passwordGroup'>
                            <Form.Label>
                                Senha:
                            </Form.Label>
                            <Form.Control type='password' placeholder='Digite sua Senha:'>

                            </Form.Control>
                      </Form.Group>
                      <Button  block style={{marginTop:'6px'}} variant='secondary' type='submit'>
                        Fazer Login
                      </Button>
                    </Form>
                    </BoxForm>
                    <BoxContent>
                        <p>Novo na plataforma?</p>
                        <Link className="button" to="/signout"><strong>Crie sua conta</strong></Link>
                    </BoxContent>
                    </Col>
                </Row>
           
            </Container>
       )
    
    }
       
}


export default SignIn;