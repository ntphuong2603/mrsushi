import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Login = () => {
    return(
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Form style={{width:'350px', height: '350px'}}>
                        <Form.Group as={Row}>
                            <Form.Label column sm='3'>Username</Form.Label>
                            <Col sm='9'>
                                <Form.Control type='text' placeholder='Enter your username'/>
                            </Col>
                        </Form.Group>
                        <Form.Group  as={Row}>
                            <Form.Label column sm='3'>Password</Form.Label>
                            <Col sm='9'>
                                <Form.Control type='password' placeholder='Enter your password'/>
                            </Col>
                        </Form.Group>
                        <Form.Group  as={Row}>
                            <Col sm='3'/>
                            <Col sm='9'> 
                                <Button colum sm='9' variant='primary' type='submit' lg block> 
                                    Login
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </>
    )
}

export default Login;