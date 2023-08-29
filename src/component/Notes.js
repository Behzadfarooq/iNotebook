import React, { useEffect } from "react";
import { useContext, useRef } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const {showAlert} = props;
  let navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [ note, setNote] = useState({etitle:"", edescription:"", etag:""});
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;


  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
       navigate("/login")
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id : currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    //showAlert("Updated successfully", "success")
  };

  const handleClick = (e)=>{ 

    refClose.current.click();
    editNote(note.id, note.etitle,note.edescription, note.etag)
    showAlert("Updated successfully", "success")
  }
  
  
  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <AddNote showAlert={showAlert}/>
      <Button className="d-none" ref={ref} variant="primary" onClick={handleShow}>
        button
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form className="my-3">
            <Form.Group className="mb-3" >
              <Form.Label htmlFor="title">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="etitle"
                id="etitle"
                onChange={onChange}
                value={note.etitle}
                minLength={5} required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="edescription"
                id="edescription"
                onChange={onChange}
                value={note.edescription} minLength={5} required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="tag">Tag</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Tag"
                name="etag"           
                id="etag"
                onChange={onChange}
                value={note.etag}
                minLength={5} required 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button ref ={refClose}variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClick} variant="primary" disabled = {note.etitle.length<5 || note.edescription.length<5}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>
      <div className=" row my-3">
        <h3>Your Notes</h3> <div className ="container"> 
        {notes.length === 0 && "There are no notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} showAlert = {showAlert} note={note} />
          );
        })}
      </div>
    </div>
  );
};
// 

export default Notes;
