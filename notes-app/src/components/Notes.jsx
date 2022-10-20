import { useState } from 'react';

import Note from './Note';

import '../styles/notes.css';

const Notes = ({ notes, setNotes }) => {
  //console.log(notes);
  return (
    <div className="container">
      {notes.map((note, index) => {
        //console.log(note);
        return (
          <Note key={index} note={note} setNotes={setNotes} notes={notes} />
        );
      })}
    </div>
  );
};

export default Notes;
