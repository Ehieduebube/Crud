import React, { useState } from 'react';
import Overview from '../pages/Overview';
import Campaign from '../pages/Campaign';
import Newcampaign from '../pages/Newcampaign';
import Campaigninfo from '../pages/Campaigninfo';
import Modalcreate from './components/Modalcreate';
import Modaldelete from './components/Modaldelete';
import Modalstop from './components/Modalstop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div>
    <Routes>
      <Route exact path='/' element={<Overview/>}/>
      <Route  path='/Overview' element={<Overview/>}/>
      <Route path='/Campaign' element={<Campaign/>}/>
      <Route path='/Newcampaign' element={<Newcampaign/>}/>
      <Route path='/Campaign/:id' element={<Campaigninfo/>}/>
        
        <Route exact path="/Modalcreate" component={Modalcreate}/>
        <Route path="/Modaldelete" component={Modaldelete}/>
        <Route path="/Modalstop" component={Modalstop}/>
      </Routes>
      
    </div>
    </Router>
    
  );
};

export default App;
