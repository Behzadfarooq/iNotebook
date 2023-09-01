import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import noteContext from '../context/notes/noteContext';
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [ note, setNote] = useState({title:"", description:"", tag:""});

    const handleClick = (e)=>{ 
      e.preventDefault();
      addNote(note.title, note.description, note.tag);
      setNote({title:"", description:"", tag:""})
      props.showAlert("Note Added successfully", "success")
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    
    <div >
     <div className="container my-3">
      <h2>Add a Note</h2>
      <Form className="my-3">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title"  name='title' value = {note.title} onChange={onChange} minLength={5} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description" value = {note.description}  name='description'  onChange={onChange}  minLength={5} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="tag">
          <Form.Label>Tag</Form.Label>
          <Form.Control type="text" placeholder="Enter Tag"  name='tag' value = {note.tag} onChange={onChange}  minLength={5} required/>
        </Form.Group>
        <Button disabled = {note.title.length<5 || note.description.length<5}variant="primary" type="submit" onClick={handleClick}>
          Add Note
        </Button>
      </Form>
      </div>
    </div>
  );
}

export default AddNote;
