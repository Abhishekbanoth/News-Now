import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

const App =()=> {
  const pageSize=4;
  const apikey=process.env.REACT_APP_NEWS_API
  const[progress,setProgress]=useState(0)

  
    return (
      <div>
        <Router>
        <NavBar/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      />
        
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey}  pagesize={pageSize} country="in" category="general"/>}/>
          <Route  path="/bussiness" element={<News setProgress={setProgress} apikey={apikey}  key="bussiness"pagesize={pageSize} country="in" category="bussiness"/>}/>
          <Route  path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="entertainment"pagesize={pageSize} country="in" category="entertainment"/>}/>
          <Route  path="/general" element={<News setProgress={setProgress} apikey={apikey}  key="general"pagesize={pageSize} country="in" category="general"/>}/>
          <Route  path="/health" element={<News setProgress={setProgress} apikey={apikey}  key="health"pagesize={pageSize} country="in" category="health"/>}/>
          <Route  path="/science" element={<News setProgress={setProgress} apikey={apikey}  key="science"pagesize={pageSize} country="in" category="science"/>}/>
          <Route  path="/sports" element={<News setProgress={setProgress} apikey={apikey}  key="sports"pagesize={pageSize} country="in" category="sports"/>}/>
          <Route  path="/technology" element={<News setProgress={setProgress} apikey={apikey}  key="technology"pagesize={pageSize} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  
}
export default App;

