import { BrowserRouter, Routes, Route } from 'react-router-dom';
import addList from './pages/addList';
import deleteForm from './pages/deleteForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path = 'addlist' element ={<addList/>} />
        <Route path = 'deleteform' element ={<deleteForm/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
