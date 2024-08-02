
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Main from './assets/components/Main'
import Help from "./assets/components/Help";
import NavMain from './assets/components/layout/NavMain'
import Items from './assets/components/Items';
import HelpPage from './assets/components/HelpPage';
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
          <Route path='/help/:id' element={<HelpPage />} /> {/** this line should rerender the help compnent and append the result */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container >
      <FooterMain />
    </>
  )
}

function NotFound() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>The page {location.pathname} was not found!</p>
    </>

  );
}

export default App
