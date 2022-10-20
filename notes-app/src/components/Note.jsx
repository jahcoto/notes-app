import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/note.css';

const Note = ({ note, setNotes }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(true);

  let newNotas = [];
  let updatedNote = {};
  const [nota, setNota] = useState(note);
  console.log(nota);
  useEffect(() => {
    setTitle(nota.title);
    setText(nota.text);
  }, []);

  const handleEdit = () => {
    if (isActive === true) {
      setIsActive(false);
    } else {
      let notas = JSON.parse(localStorage.getItem('Notas'));

      newNotas = notas.map(item => {
        if (item.id === nota.id) {
          updatedNote = {
            id: nota.id,
            title: title,
            text: text,
          };
          return updatedNote;
        }
        return item;
      });
      setNotes(newNotas);
      setIsActive(true);
    }
  };

  const handleDelete = () => {
    let notas = JSON.parse(localStorage.getItem('Notas'));
    newNotas = notas.filter(item => item.id !== nota.id);
    console.log(newNotas);
    setNotes(newNotas);
  };

  return (
    <div className="note">
      <div className="tools">
        <button className="edit" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <div className="main">
        <input
          className={`title-input ${isActive ? 'disabled' : ''}`}
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={isActive}
        />

        <textarea
          className={`text-area ${isActive ? 'disabled' : ''}`}
          name="text"
          id="text"
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={isActive}
        ></textarea>
      </div>
    </div>
  );
};

export default Note;
