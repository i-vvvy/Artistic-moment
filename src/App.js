import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';
import NewPage from './page/NewPage';
import EditPage from './page/EditPage';
import MyListPage from './page/MyListPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/new" element={<NewPage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
          <Route path="/myList" element={<MyListPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
