import React, { useState } from "react"
import { Form, Alert } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "../contexts/UserAuthContext";

const Signup = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await signUp(email, password);
            navigate("/")
        }catch(err){
            setError(err.message);
        }
    };
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Signup</h2>
                {error && <Alert variant="danger">{error}</Alert>}
            
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address"
                        onChange={ (e)=> setEmail(e.target.value)}
                        />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={ (e)=> setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit">
                            Sign up
                        </Button>
                    </div>
                </Form>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link to="/">Log In</Link>
            </div>
        </>
    )
};

export default Signup;

/*
import React, { useRef, useState }from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

async function handleSubmit(e){
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button disabled={loading} classNmae="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
                
            </div>
        </>
        
    )
}
*/