import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Test from './components/Test';
// export default function App() {


const App = () => {

const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path="/" element={< News setProgress={setProgress} key='general' pageSize={5} country="in" category="general" />}></Route>
            <Route path="/business" element={< News setProgress={setProgress} key='business' pageSize={5} country="in" category="business" />}></Route>
            <Route path="/entertainment" element={< News setProgress={setProgress} key='entertainment' pageSize={5} country="in" category="entertainment" />}></Route>
            <Route path="/health" element={< News setProgress={setProgress} key='health' pageSize={5} country="in" category="health" />}></Route>
            <Route path="/science" element={< News setProgress={setProgress} key='science' pageSize={5} country="in" category="science" />}></Route>
            <Route path="/sports" element={< News setProgress={setProgress} key='sports' pageSize={5} country="in" category="sports" />}></Route>
            <Route path="/technology" element={< News setProgress={setProgress} key='technology' pageSize={5} country="in" category="technology" />}></Route>
            <Route path="/general" element={< News setProgress={setProgress} key='general' pageSize={5} country="in" category="general" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;