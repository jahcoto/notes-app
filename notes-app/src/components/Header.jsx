import { useNavigate } from 'react-router-dom';

import '../styles/header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNewNote = () => {
    navigate(`/add-note`);
  };

  return (
    <div className="header">
      <h1 className="title">Notes App</h1>
      <button className="add" id="add" onClick={handleNewNote}>
        <i className="fas fa-plus"></i> Add note
      </button>
    </div>
  );
};

export default Header;
