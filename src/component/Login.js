import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  
  const [credentials, setCredentials] = useState({email:"", password:""});
let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email:credentials.email, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json)
    if(json.success){   
    //Save the auth token and redirect
    localStorage.setItem('token',json.authtoken);
    props.showAlert("Logged in", "success")
    navigate('/');
    }
    else{
      props.showAlert("Invalid Details", "danger")
    }
  }
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div className='container mt-3'>
      <h2>Login to continue</h2>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" value = {credentials.email} onChange={onChange} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" value = {credentials.password} onChange={onChange}  type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
