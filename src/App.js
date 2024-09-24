import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddList from './pages/AddList';
import DeleteForm from './pages/DeleteForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/addlist' element={<AddList />} />
          <Route path='/deleteform/:no' element={<DeleteForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
