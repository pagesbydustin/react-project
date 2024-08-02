
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Main from './assets/components/Main'
import Help from "./assets/components/Help";
import NavMain from './assets/components/layout/NavMain'
import Items from './assets/components/Items';
import FooterMain from './assets/components/layout/FooterMain';

import './App.css'
import './assets/css/bootstrap_custom.css'

function App() {

  return (
    <>
      <NavMain />
      <Container id='bodyContent'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/items' element={<Items />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </Container >
      <FooterMain />
    </>
  )
}

export default App
