import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Singup = (props) => {

  const [credentials, setCredentials] = useState({name :"" ,email:"", password:"", cPassword:""});

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json)
    if(json.success){
    //Save the authToken and redirect
    localStorage.setItem('token',json.authToken)
    navigate('/');
    props.showAlert("Account Created", "success")
    }
    else{
      props.showAlert("Invalid Credentials", "danger")
    }
  }

  return (
    <div className='container mt-2'>
      <h2>Create an account to continue</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label> 
          <Form.Control type="text" placeholder="Enter name" name = "name"onChange={onChange}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name = "email" onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label> Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name = "password" onChange={onChange} minLength={5}required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" name = "cPassword" onChange={onChange} minLength={5} required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Singup;
