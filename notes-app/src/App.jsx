import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import UpdateNote from './components/updateNote';

import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    //console.log(notes);
    localStorage.setItem('Notas', JSON.stringify(notes));
  }, [notes]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Notes notes={notes} setNotes={setNotes} />} />
          <Route
            path="/add-note"
            element={<NewNote setNotes={setNotes} notes={notes} />}
          />
          <Route
            path="/update-note"
            element={<UpdateNote setNotes="" notes={[]} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
