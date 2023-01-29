import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, selectNotes } from './notesSlice';

const Notes = () => {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();
  const [noteToAdd, setNoteToAdd] = useState('');

  return (
    <div>
    <h1>To Dos: </h1>
    <div>
      {notes.map((note, index) => <p key={index}>{note}</p>)}
    </div>
    <div>
      <h1>Add Todo:</h1>
      <input type='text' id='addTodo' onChange={event => setNoteToAdd(event.target.value)}/>
    <button onClick={() => {
      dispatch(addNote(noteToAdd))
      }}>Add</button>
      </div>

    </div>
  );
}

export { Notes };
