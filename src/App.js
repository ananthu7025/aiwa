import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import './style/mediaQurey.css'
import SelectedSubcategory from './containers/Subcategories';
import Home from './containers/Home';

const App = () => {
  const [selectedSub,setSelectedSub]=useState()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setSelectedSub={setSelectedSub} selectedSub={selectedSub}/>} />
        <Route
          path="/subcategory/:subcategoryId"
          element={<SelectedSubcategory setSelectedSub={setSelectedSub} selectedSub={selectedSub}/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
