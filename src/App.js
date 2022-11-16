import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import Navigation from './component/common/Navigation';

import Footer from './component/common/Footer';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';
import NewPage from './page/NewPage';
import EditPage from './page/EditPage';
import MyListPage from './page/MyListPage';
import SearchPage from './page/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/new/:id" element={<NewPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/myList" element={<MyListPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
