import React from "react";
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Alert
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/logo.png';
import {BoxContent, BoxForm} from './style'


class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        domain:'',
        error:'Usuário não informou email',
        isLoading: false,
    }

    handleSignup = async (event) => {
        event.preventDefault();
        const {name, email, password, domain} = this.state;
    }

    renderError = () => {
        return (
            <Alert variant="dangerous">
                {this.state.error}
            </Alert>
        )
    }

    render ( ) {
        return (
            <Container>
           <Row className='justify-content-md-center'>
                    <Col xs={12} md={5}>
                    <BoxContent>
                        <img src={Logo} alt='emailshimp'></img>
                    </BoxContent>
                    <BoxForm>
                        <h2>Cadastro</h2>
                        <p>Informe todos os campos para realizar o cadastro.</p>
                        <Form>
                            {this.state.error && this.renderError()}
                            <Form.Group>
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu nome" onChange={e => this.setState({name:e.target.value})}>

                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>E-mail:</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" onChange={e => this.setState({email:e.target.value})}>
                                    
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Domínio:</Form.Label>
                                <Form.Control type="url" placeholder="Digite seu domínio" onChange={e => this.setState({domain:e.target.value})}>
                                    
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Senha:</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha" onChange={e => this.setState({password:e.target.value})}>
                                    
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <Button block variant="primary">
                            Realizar Cadastro
                        </Button>
                    </BoxForm>
                    <BoxContent>
                        <Link className="button" to="/signin">Voltar para o login</Link>
                    </BoxContent>
                    </Col>
                    </Row>
            </Container>
        )
    }
}

export default SignUp;