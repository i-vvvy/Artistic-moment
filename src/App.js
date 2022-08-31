import './App.css';
import 'antd/dist/antd.css';
import GlobalStyle from './styles/globalStyle.style';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './component/common/Navigation';
import Footer from './component/common/Footer';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';
import NewPage from './page/NewPage';
import EditPage from './page/EditPage';
import MyListPage from './page/MyListPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/detail/:id" element={<DetailPage />}></Route>
            <Route path="/new" element={<NewPage />}></Route>
            <Route path="/edit/:id" element={<EditPage />}></Route>
            <Route path="/myList" element={<MyListPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
