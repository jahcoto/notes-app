import { useState, useEffect } from 'react';

import '../styles/new.css';

const UpdateNote = ({ setNotes, notes }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(notes);
  });

  return (
    <form className="note">
      <div className="barra"></div>
      <div className="title">
        <label htmlFor="title">Titulo Nota:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="text">
        <label htmlFor="text">Nota:</label>
        <textarea
          className=""
          name="text"
          id="text"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
      </div>
      <button className="new">New Note</button>
    </form>
  );
};

export default UpdateNote;
