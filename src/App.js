import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import './style/mediaQurey.css'
import SelectedSubcategory from './containers/Subcategories';
import Home from './containers/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/subcategory/:subcategoryId"
          element={<SelectedSubcategory/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
