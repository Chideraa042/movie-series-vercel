import { Container } from '@mui/system';
import {  Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import { Header } from './components/Header/Header';
import SimpleBottomNavigation from './components/navigation/MainNav';
import { Movies } from './pages/Movies/Movies';
import { Search } from './pages/Search/Search';
import { Trending } from './pages/Trending/Trending';
import { Series } from './pages/Series/Series';
// import { Landing } from './landingPage/Landing';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {

  // const [ landing, setLanding ] = useState(true);

  return (

    <>
      <Header />
      {/* <Landing landing={landing} setLanding={setLanding}/> */}
      
        <div className="App">
          <Container>
            <Routes>
              <Route path="/" element={<Trending /> } />
              <Route path="/movies" element={ <Movies /> } />
              <Route path="/series" element={ <Series /> } />
              <Route path="/search" element={ <Search /> } />
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      
    </>
      
      
  );
}

export default App;
