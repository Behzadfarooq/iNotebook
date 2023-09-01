import React from 'react';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
    const {note,updateNote, showAlert} = props;
  return (
    <div className='col-md-3'>
    <Card className='my-3'>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text style={{color:"black"}}>
        
      {note.description} 
        </Card.Text>
        <i style={{color:"black"}} className="fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id);
        showAlert("Deleted successfully", "success");}}></i>
      <i style={{color:"black"}} className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note);}}></i>     
      </Card.Body>
    </Card>
    </div>
  );
}
export default NoteItem;
