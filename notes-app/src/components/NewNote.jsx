import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/new.css';

const NewNote = ({ setNotes, notes }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleNew = e => {
    let id = notes.length + 1;
    let textTitle = title;
    let textNote = marked(text);
    let note = {
      id: id,
      title: textTitle,
      text: textNote,
    };
    e.preventDefault();

    setNotes([...notes, note]);
    navigate('/');
  };

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
      <button className="new" onClick={handleNew}>
        New Note
      </button>
    </form>
  );
};

export default NewNote;
